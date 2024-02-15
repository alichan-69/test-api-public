import { Request, Response } from "express";
import { MessageService } from "../../domain/service/MessageService";
import { Validation } from "../util/Validation";

interface MessageError {
  message?: string;
}

export class MessageController {
  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  public async getMessageById(req: Request, res: Response) {
    // リクエストパラメータを格納
    const id = parseInt(req.query.id as string);

    try {
      const data = await this.messageService.getMessageById(id);

      res.status(200).json({ message: "成功", data });
    } catch (error: any) {
      res.status(500).json({ message: "メッセージの取得に失敗しました" });
    }
  }
}
