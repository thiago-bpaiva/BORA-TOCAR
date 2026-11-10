# Bora Tocar — projeto PWA

Esta pasta contém a primeira organização do Bora Tocar para publicação como Progressive Web App (PWA).

## Arquivos principais

- `index.html`: estrutura da interface.
- `styles.css`: estilos visuais.
- `app.js`: funcionalidades e dados atuais do aplicativo.
- `manifest.webmanifest`: identidade e parâmetros de instalação do PWA.
- `service-worker.js`: cache da aplicação e suporte básico a uso offline.
- `pwa-register.js`: registro do Service Worker.
- `assets/`: logo e ícones do aplicativo.

## Teste local

O PWA precisa ser servido por HTTP/HTTPS; abrir `index.html` diretamente como `file://` não ativa o Service Worker. Para um teste local, use um servidor local (por exemplo, a extensão Live Server do VS Code) ou publique primeiro no Netlify.

## Atualizações

Ao publicar uma nova versão, atualize `CACHE_VERSION` no `service-worker.js` (por exemplo, `bora-tocar-shell-v2`). Isso faz o navegador baixar o novo conjunto de arquivos e descartar o cache antigo quando o novo Service Worker for ativado.

## Observações importantes

- O armazenamento atual dos repertórios continua local no navegador (`localStorage`); esta etapa não adiciona sincronização entre dispositivos.
- Os dados existentes em `localStorage` do arquivo aberto localmente não são automaticamente transferidos para o novo endereço HTTPS. Antes da migração definitiva, exporte um backup pelo próprio aplicativo e depois importe-o no endereço publicado.
- A publicação no Netlify fornece HTTPS, requisito para instalação PWA em dispositivos reais.
- O Service Worker faz cache do app shell e tenta atualizar a página quando há conexão. A disponibilidade offline depende de o primeiro carregamento online ter sido concluído com sucesso.
