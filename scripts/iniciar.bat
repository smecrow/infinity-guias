@echo off
setlocal enabledelayedexpansion

:: Nome da imagem e do container
set "IMAGE_NAME=infinity-guias-img"
set "CONTAINER_NAME=infinity-guias-app"

:menu
cls
echo ==========================================
echo    INFINITY GUIAS - GERENCIADOR DOCKER
echo ==========================================
echo.
echo [1] Iniciar Projeto (Build + Container)
echo [2] Parar e Remover Container
echo [3] Ver Logs do Container
echo [4] Sair
echo.
set /p opcao="Escolha uma opcao: "

if "%opcao%"=="1" goto iniciar
if "%opcao%"=="2" goto parar
if "%opcao%"=="3" goto logs
if "%opcao%"=="4" exit
goto menu

:iniciar
echo.
echo 1. Construindo imagem Docker (isso pode demorar na primeira vez)...
cd /d "%~dp0.."
docker build -t %IMAGE_NAME% .

echo 2. Iniciando container na porta 3000...
:: -d (background), -p (porta), --rm (remove ao parar), -v (volume para hot-reload no windows)
docker run -d --name %CONTAINER_NAME% -p 3000:3000 %IMAGE_NAME%

if %errorlevel% neq 0 (
    echo [ERRO] Falha ao iniciar o container. Verifique se o Docker Desktop esta rodando.
    pause
) else (
    echo Container iniciado com sucesso em http://localhost:3000
    pause
)
goto menu

:parar
echo.
echo Parando e removendo o container %CONTAINER_NAME%...
docker stop %CONTAINER_NAME%
docker rm %CONTAINER_NAME%
echo.
echo Container removido com sucesso.
pause
goto menu

:logs
echo.
echo Exibindo logs do container (Pressione Ctrl+C para sair dos logs):
docker logs -f %CONTAINER_NAME%
goto menu
