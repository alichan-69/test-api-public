import { Request, Response } from "express";
import { MessageController } from "../controller/MessageController";

const createMockRequest = () => {
  const req = {} as Request;

  req.body = jest.fn().mockReturnValue(req);
  (req.query as jest.MockedFunction<any>) = jest.fn().mockReturnValue(req);

  return req;
};

const createMockResponse = () => {
  const res = {} as Response;

  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
};

const mockMessageService = {
  getMessageById: jest.fn().mockReturnValue({
    message: "hello",
  }),
};

describe("MessageController", () => {
  // モックを注入してMessageControllerを作成
  const messageController = new MessageController(mockMessageService as any);

  describe("getMessageById", () => {
    it("ステータスコード200を返すケース", async () => {
      const req = createMockRequest();
      const res = createMockResponse();

      await messageController.getMessageById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "成功",
        data: {
          message: "hello",
        },
      });
    });

    it("ステータスコード500を返すケース", async () => {
      const req = createMockRequest();
      const res = createMockResponse();
      jest
        .spyOn(mockMessageService, "getMessageById")
        .mockRejectedValue(
          new Error("messageServiceのgetMessageByIdでエラーが発生しました")
        );

      await messageController.getMessageById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "メッセージの取得に失敗しました",
      });
    });
  });
});
