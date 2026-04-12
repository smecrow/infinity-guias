import os
import sys
from PIL import Image

def convert_to_webp(source_path, quality=85):
    """
    Converte imagens PNG, JPG e JPEG para WebP.
    """
    if not os.path.exists(source_path):
        print(f"Erro: O caminho '{source_path}' não existe.")
        return

    # Extensões suportadas
    valid_extensions = ('.png', '.jpg', '.jpeg')

    # Verifica se é um arquivo único ou diretório
    files_to_convert = []
    if os.path.isfile(source_path):
        if source_path.lower().endswith(valid_extensions):
            files_to_convert.append(source_path)
    else:
        for root, _, files in os.walk(source_path):
            for file in files:
                if file.lower().endswith(valid_extensions):
                    files_to_convert.append(os.path.join(root, file))

    if not files_to_convert:
        print("Nenhuma imagem compatível encontrada para conversão.")
        return

    print(f"Encontradas {len(files_to_convert)} imagens para converter.")

    for file_path in files_to_convert:
        try:
            # Define o novo nome do arquivo
            base_path = os.path.splitext(file_path)[0]
            webp_path = f"{base_path}.webp"

            # Abre e converte a imagem
            with Image.open(file_path) as img:
                # Converte para RGB se necessário (WebP não suporta alguns modos de cor de JPEG/PNG sem tratamento)
                if img.mode in ("RGBA", "P") and file_path.lower().endswith(('.jpg', '.jpeg')):
                    img = img.convert("RGB")
                
                img.save(webp_path, "WEBP", quality=quality)
                print(f"Convertido: {os.path.basename(file_path)} -> {os.path.basename(webp_path)}")

        except Exception as e:
            print(f"Erro ao converter {file_path}: {e}")

if __name__ == "__main__":
    # Define a pasta padrão como 'public/' se nenhum argumento for passado
    target_dir = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.getcwd(), "public")
    
    print(f"--- Iniciando conversão em: {target_dir} ---")
    convert_to_webp(target_dir)
    print("--- Conversão concluída! ---")
