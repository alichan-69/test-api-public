import { MessageDto } from "../dto/MessageDto";

export interface IMessageService {
  getMessageById(id: number): Promise<MessageDto>;
}
