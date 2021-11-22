import { IReplyMessage } from '../IReplyMessage';
import { zoomUseCases } from '@useCases/ZoomUseCases';
import { getAnswer } from './naturalLanguage';
import { handleSearchaleWord, isSearchableMessage } from '@utils/message';

export async function onMessageAnswer(question) {
  return await getAnswer(question);
}

async function sendSearchMessage(client, message) {
  client.sendText(message.from, 'Aguarde... Estou fazendo a tua pesquisa :)');
  await makeSearchAndAnswer(client, message, handleSearchaleWord(message.body));
}

async function makeSearchAndAnswer(client, message, search: string) {
  const results = await zoomUseCases.execute(search);
  results
    .slice(0, 8)
    .map(
      async (product) =>
        await client.sendText(
          message.from,
          `${product.label} \nPreço : ${product.price} \nLink :${product.href}`
        )
    );
}

export class ReplyMessage implements IReplyMessage {
  constructor() {}

  async onMessage(message, client) {
    if (isSearchableMessage(message.body)) {
      try {
        await sendSearchMessage(client, message);
      } catch (ex) {
        console.log(ex);
        client.sendText(
          message.from,
          'Desculpa ! Não consegui fazer a sua pesquisa. Você pode tentar novamente ?'
        );
      }
    } else {
      const messageToAnswer = await onMessageAnswer(message.body);
      client.sendText(message.from, messageToAnswer);
    }
  }
}
