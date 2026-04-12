#!/bin/bash

# Configurações
IMAGE_NAME="infinity-guias-img"
CONTAINER_NAME="infinity-guias-app"

# Cores para o terminal
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

show_menu() {
    clear
    echo -e "${BLUE}==========================================${NC}"
    echo -e "${BLUE}    INFINITY GUIAS - GERENCIADOR DOCKER   ${NC}"
    echo -e "${BLUE}==========================================${NC}"
    echo ""
    echo "1) Iniciar Projeto (Build + Container)"
    echo "2) Parar e Remover Container"
    echo "3) Ver Logs em Tempo Real"
    echo "4) Sair"
    echo ""
    read -p "Escolha uma opção: " opcao
}

iniciar_projeto() {
    # Garante que temos o caminho absoluto para a pasta de scripts
    SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
    LOG_DIR="$SCRIPT_DIR/logs"
    mkdir -p "$LOG_DIR"
    
    # Caminhos absolutos para os arquivos de log
    BUILD_LOG="$LOG_DIR/build.log"
    RUN_LOG="$LOG_DIR/run.log"

    echo -e "\n${BLUE}1. Preparando ambiente...${NC}"
    # Vai para a raiz do projeto
    cd "$SCRIPT_DIR/.."
    
    # Para e remove qualquer container anterior para liberar arquivos
    docker stop $CONTAINER_NAME > /dev/null 2>&1
    docker rm $CONTAINER_NAME > /dev/null 2>&1
    
    # Usa o Docker para apagar a pasta .next (evita erro de permissão do Linux)
    echo "Limpando cache antigo..."
    docker run --rm -v "$(pwd):/app" -w /app alpine rm -rf .next > /dev/null 2>&1

    echo -e "${BLUE}2. Construindo imagem Docker...${NC}"
    # Executa o build e redireciona saída e erro para o log absoluto
    echo "Iniciando build em $(date)" > "$BUILD_LOG"
    if docker build -t $IMAGE_NAME . >> "$BUILD_LOG" 2>&1; then
        echo -e "${GREEN}[OK]${NC} Imagem construída com sucesso."
    else
        echo -e "\n${RED}[ERRO CRÍTICO]${NC} Falha na construção da imagem Docker."
        echo -e "O projeto não pode ser iniciado. Verifique o log: ${BLUE}scripts/logs/build.log${NC}"
        read -p "Pressione Enter para voltar ao menu..."
        return 1
    fi

    echo -e "\n${BLUE}3. Iniciando container na porta 3000 com Hot-Reload...${NC}"
    # Executa o run e redireciona saída e erro para o log absoluto
    echo "Iniciando container em $(date)" > "$RUN_LOG"
    docker run -d \
      --name $CONTAINER_NAME \
      -p 3000:3000 \
      -e WATCHPACK_POLLING=true \
      -v "$(pwd):/app" \
      -v /app/node_modules \
      $IMAGE_NAME >> "$RUN_LOG" 2>&1

    if [ $? -eq 0 ]; then
        echo -e "\n${GREEN}[SUCESSO]${NC} Container iniciado em http://localhost:3000"
        echo -e "As alterações feitas no código serão aplicadas automaticamente."
    else
        echo -e "\n${RED}[ERRO]${NC} Falha ao iniciar o container."
        echo -e "Verifique os detalhes no log: ${BLUE}scripts/logs/run.log${NC}"
    fi
    read -p "Pressione Enter para voltar ao menu..."
}

parar_projeto() {
    echo -e "\n${RED}Parando e removendo o container $CONTAINER_NAME...${NC}"
    docker stop $CONTAINER_NAME && docker rm $CONTAINER_NAME
    echo -e "${GREEN}Container removido com sucesso.${NC}"
    read -p "Pressione Enter para voltar ao menu..."
}

ver_logs() {
    echo -e "\n${BLUE}Exibindo logs (Pressione Ctrl+C para sair dos logs):${NC}"
    docker logs -f $CONTAINER_NAME
}

# Loop principal
while true; do
    show_menu
    case $opcao in
        1) iniciar_projeto ;;
        2) parar_projeto ;;
        3) ver_logs ;;
        4) exit 0 ;;
        *) echo -e "${RED}Opção inválida!${NC}"; sleep 1 ;;
    esac
done
