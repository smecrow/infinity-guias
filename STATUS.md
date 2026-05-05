# Projeto InfinityGuias - STATUS.md

## Última atualização
05/05/2026 - Lint e build validados; removida dependência de Google Fonts no build.

## Estado da sessão
`encerrada limpa`

## Contexto rápido do projeto
- App Next.js 16.2.3 com React 19, TypeScript, Tailwind CSS 4, `next-themes`, `framer-motion` e ícones `lucide-react`.
- Estrutura principal em `src/app`, com App Router: página inicial, contato e tutoriais em rotas por pasta.
- Tutoriais ativos: `minhainfinitygo`, `ittv-plus`, `ittv-plus/criacao`, `speedtest` e `imagina-so`, com seleção de sistema operacional ou dispositivo feita no cliente quando necessário.
- Assets consumidos pelas páginas estão em `public/tutoriais/...`; também existem cópias antigas ou paralelas em `src/app/tutoriais/...`.
- Projeto tem scripts Docker em `scripts/iniciar.bat` e `scripts/gerenciar.sh`, além do conversor `scripts/convert_to_webp.py`.

## Arquivos tocados
- `src/app/layout.tsx:imports e body` - removido `next/font/google` para evitar falha de build ao buscar Google Fonts.
- `STATUS.md:arquivo inteiro` - atualizado para refletir a validação por lint/build.

## Próximos passos
- Reiniciar o container uma vez pelo `scripts/gerenciar.sh` para aplicar as novas opções de hot reload, se ainda não foi reiniciado.
- Avaliar as 33 vulnerabilidades reportadas por `npm ci` com `npm audit`; não rodar `npm audit fix --force` sem aprovação porque pode alterar versões com quebra de compatibilidade.
- Corrigir textos visíveis com pequenos erros de pt-BR em `src/app/tutoriais/minhainfinitygo/page.tsx`, começando por termos como "lozaliza", "beneficios" e "utiliza-los".
- Atualizar `README.md` para trocar o texto padrão do Create Next App por instruções reais do InfinityGuias.
- Conferir se as cópias de mídia em `src/app/tutoriais/...` ainda são usadas; se não forem, propor limpeza antes de apagar qualquer arquivo.

## Decisões pendentes
- Gabriel precisa decidir se `public/tutoriais/...` será a fonte única de assets antes de remover cópias de imagens e vídeos em `src/app/tutoriais/...`.
- Gabriel precisa decidir se prefere manter páginas de tutorial independentes, mais simples para iniciante, ou criar componentes compartilhados para reduzir repetição.
- Git ainda não está disponível no PATH deste terminal; verificar instalação/configuração antes de pedir status, commits ou branches por linha de comando.
