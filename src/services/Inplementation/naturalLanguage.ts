import { NlpManager } from 'node-nlp';

const language = 'pt';

const manager = new NlpManager({ languages: [language], forceNER: true });
// Adds the utterances and intents for the NLP

const botApresentation =
  'Eu sou o WhatsappBot e estou aqui para ajuda-lo. \nPara pesquisar alguma coisa, por favor insira o comando *"pesquisar"* e o que você deseja pesquisar';

manager.addDocument(language, 'oi !', 'greetings.hello');
manager.addDocument(language, 'olá !', 'greetings.hello');
manager.addDocument(language, 'hello !', 'greetings.hello');
manager.addDocument(language, 'e aí ?!', 'greetings.hello');
manager.addDocument(language, 'oie !', 'greetings.hello');
manager.addDocument(language, 'suave irmão ?', 'greetings.suave');
manager.addDocument(language, 'e ai suave ?', 'greetings.suave');
manager.addDocument(language, 'e ai irmão ?', 'greetings.suave');
manager.addDocument(language, 'qual é a boa ?', 'greetings.aboa');
manager.addDocument(language, 'Boa noite !', 'greetings.greeting.night');
manager.addDocument(language, 'Bom Dia !', 'greetings.greeting.day');
manager.addDocument(language, 'Boa tarde!', 'greetings.greeting.noon');
manager.addDocument(language, 'corno', 'corno');

// Train also the NLG

manager.addAnswer(language, 'greetings.hello', 'Olá ! ' + botApresentation);
manager.addAnswer(
  language,
  'greetings.aboa',
  'A boa é o seguinte irmão. ' + botApresentation
);
manager.addAnswer(language, 'greetings.suave', 'Suave ! ' + botApresentation);
manager.addAnswer(
  language,
  'greetings.suave',
  'Suave irmão! ' + botApresentation
);
manager.addAnswer(
  language,
  'greetings.greeting.night',
  'Boa noite ! ' + botApresentation
);
manager.addAnswer(
  language,
  'greetings.greeting.day',
  'Bom dia ! ' + botApresentation
);
manager.addAnswer(
  language,
  'greetings.greeting.noon',
  'Boa tarde ! ' + botApresentation
);

manager.addAnswer(language, 'corno', 'Corno é seu pai ! ' + botApresentation);

// Train and save the model.

export async function trainNLP() {
  await manager.train();
  manager.save();
}

export async function getAnswer(question: string) {
  const response = await manager.process(language, question);
  return (
    (response && response.answer) ||
    'Eu ainda sou um bebê  :)\nEstou aprendendo tudo agora. Desculpe por não saber respondê-lo'
  );
}
