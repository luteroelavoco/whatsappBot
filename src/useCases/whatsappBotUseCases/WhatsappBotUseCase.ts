import { IWhatsappBotProvider } from '@providers/IWhatsappBotProvider';

export class WhatsappBotUseCases {
  constructor(private whatsappBotProvider: IWhatsappBotProvider) {}

  async execute() {
    this.whatsappBotProvider.start();
  }
}
