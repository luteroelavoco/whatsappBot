const venom = require('venom-bot');
import Zoom from '@services/zoom';

venom
  .create({
    session: 'LuteroBot',
    multidevice: false,
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    if (message.body.includes('Olá') && message.isGroupMsg === false) {
      client.sendText(message.from, 'olá! eu sou o Lutero Bot');
    }
    if (message.body.includes('Pesquisar : ') && message.isGroupMsg === false) {
      const search = message.body.split(':')[1];
      client.sendText(message.from, 'Aguarde...');
      const result = await Zoom(search);
      for (var i = 0; i < result.length; i++) {
        const product = result[i];
        await client.sendText(
          message.from,
          `${product.label} \nPreço : ${product.price} \nLink :${product.href}`
        );

        if (i == 5) break;
      }
    }
  });
}
