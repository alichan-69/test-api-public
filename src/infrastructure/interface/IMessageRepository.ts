import { MessageEntity } from "../entity/MessageEntity";

export interface IMessageRepository {
  getMessageById(id: number): Promise<MessageEntity>;
}
