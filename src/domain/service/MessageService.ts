import { MessageRepository } from "../../infrastructure/repository/MessageRepository";
import { IMessageService } from "../interface/IMessageService";

export class MessageService implements IMessageService {
  private messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  public async getMessageById(id: number) {
    const results = await this.messageRepository.getMessageById(id);
    return results;
  }
}
