# hands-on-mfe - POC de Microfrontend com Single SPA

Este projeto é uma Prova de Conceito (POC) para demonstrar o uso de microfrontends utilizando o framework Single SPA. A arquitetura é composta por três projetos principais: 

1. **Compose (Single SPA Root)**: O projeto raiz que orquestra os microfrontends.
2. **Header**: Microfrontend responsável pelo cabeçalho da aplicação.
3. **Body**: Microfrontend responsável pelo corpo principal da aplicação.

## Estrutura do Projeto


## Pré-requisitos

Certifique-se de ter instalado em seu ambiente:

- **Node.js** (versão 14 ou superior)
- **Yarn** (gerenciador de pacotes)
- **Git Bash** ou **WSL** para executar scripts shell no Windows, ou usar PowerShell com o script `.ps1`.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/acsfreitas/hands-on-mfe.git

2. Instale as dependências em todos os projetos:
  2.1 No windows, utilize o PowerShell e execute o script install_mfes.ps1:
    ./install_mfes.ps1
  
  2.2 No Linux ou  MacOS, execute os comandos abaixo:
  cd ./compose && yarn install
  cd ../header && yarn install
  cd ../body && yarn install  
  cd ../contact && yarn install


## Executando o projeto


1. Executando o projeto no Windows
  No Windows, utilize o PowerShell e execute o script start_mfes.ps1:
    ./start_mfes.ps1

2. Executanto o projeto no Linux ou MacOS
  No Linux ou MacOS, execute o script start_mfes.sh:
    ./start_mfes.sh

## Acessando a Aplicação

Após iniciar os projetos, a aplicação estará disponível em:
    compose: http://localhost:9000

## Tecnologias Utilizadas

  Single SPA: Framework para microfrontends.
  React (ou outra biblioteca de sua escolha) para os microfrontends.
  Webpack para a construção dos projetos.

## Contribuição

  Sinta-se à vontade para contribuir com esta POC. Para fazer alterações:
    Faça um fork do repositório.
    Crie uma branch para sua feature (git checkout -b feature/nova-feature).
    Faça commit das suas alterações (git commit -am 'Adiciona nova feature').
    Envie para o branch (git push origin feature/nova-feature).
    Abra um Pull Request.

## Licença

  Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
