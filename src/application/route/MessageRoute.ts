import { Router } from "express";
import { MessageController } from "../controller/MessageController";
import { MessageService } from "../../domain/service/MessageService";
import { MessageRepository } from "../../infrastructure/repository/MessageRepository";

const messageRoute = Router();

const messageController = new MessageController(
  new MessageService(new MessageRepository())
);

messageRoute.get("/message", (req, res) =>
  messageController.getMessageById(req, res)
);

export default messageRoute;
