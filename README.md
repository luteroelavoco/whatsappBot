# WhatsappBot
>Um pequeno robô para Whatsapp, que auxilia na pesquisa de produtos pela internet. 

![](public/whatsappBot.png)	

O Brasil se encontra na segunda posição global dentre os países que mais gastam tempo na Internet. Em média, os brasileiros passam 10 horas e 8 minutos por dia conectados, seja para trabalho ou lazer.

Tirar um tempo para navegar na internet e fazer aquela "comprinha" no melhor site e no melhor preço pode ser uma tarefa árdua. Por essa razão decidi criar o WhatsappBot !! Um robô que faz uma busca no **zoom.com.br** do produto que você deseja comprar, retornando para você uma lista de produtos com preços e as lojas virtuais mais conceituada com o produto disponível.

Para realização desse projeto foi necessário usar o **Venom-Bot** para fazer integração com Whatsapp associado ao **Natural language processing** para deixar o bot mais um pouquinho inteligente (Não foi muita coisa, só brinquei um pouco rsrsrs). E uma das partes principais do projeto que é extração dessas inofrmações no site do **zoom.com.br** utilizei o **Puppeteer**. Como bônus, deixei um servidor **Express** para que a pesquisa de produtos esteja também disponivel em forma de API.

#### Me siga no instagram ([@luteroelavoco](https://www.instagram.com/luteroelavoco/), lá tem um video no meu Reels mostrando o funcionamento do projeto.




## Instalação 	

Vai até ao terminal da pasta do projeto e roda o comando a baixo.

```sh	
yarn install	
```	

Depois de instalar todas as dependências

**Para iniciar**	

```sh	
yarn dev 	
```	

## Tecnologias / Bibliotecas 
- [NodeJS](https://nodejs.org/en/)
- [Puppeteer](https://github.com/puppeteer/puppeteer)
- [Venom Bot](https://www.npmjs.com/package/venom-bot)
- [NLP](https://github.com/axa-group/nlp.js)
- [Express](https://expressjs.com/pt-br/)

## Funcionalidades

* Saudação 

Usando NLP deixei o robô um mais inteligente na forma de saudação.

```sh	
Iniciando com olá !
```	

![](public/1-ola.PNG)	

```sh	
Iniciando com Bom dia !
```	

![](public/2-bomdia.PNG)	

```sh	
Que robô hein !! Ele também sabe o "suave"
```	

![](public/3-suave.PNG)	

* Fazendo a pesquisa 

```sh	
Escrevendo "Pesquisar" e depois o nome do produto ele diz para você aguardar
```	
![](public/4-pesquisar.PNG)	

```sh	
Após "Pesquisar" o robô diz para aguardar.
```	
![](public/4-pesquisar.PNG)	

```sh	
E no final de tudo ele retorna uma lista com preço e link para comprar esses produtos
```	
![](public/5-mostrar1.PNG)	


![](public/6-mostrar2.PNG)

## Meta	

Author - Lutero Elavoco

programmer -  [Lutero Elavoco](https://www.linkedin.com/in/l%C3%BAtero-elavoco-5951b619b/) - luteroelavoco90@gmail.com	


## Contributing 	

1. Fork it (https://github.com/luteroelavoco/whatsappBot)	
2. Create your feature branch (`git checkout -b feature/fooBar`)	
3. Commit your changes (`git commit -am 'Add some fooBar'`)	
4. Push to the branch (`git push origin feature/fooBar`)	
5. Create a new Pull Request