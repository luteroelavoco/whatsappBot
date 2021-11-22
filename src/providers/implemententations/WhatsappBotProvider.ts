import { IWhatsappBotProvider } from '@providers/IWhatsappBotProvider';
import { IVenom } from '@services/IVenom';

export class WhatsappBotProvider implements IWhatsappBotProvider {
  constructor(private venom: IVenom) {}
  start() {
    this.venom.initialize();
  }
}
