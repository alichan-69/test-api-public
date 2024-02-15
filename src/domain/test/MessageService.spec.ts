import { MessageService } from "../service/MessageService";

describe("MessageService", () => {
  it("getMessageById", async () => {
    const mockMessageRepository = {
      getMessageById: jest.fn().mockResolvedValue({
        message: "hello",
      }),
    };

    // モックを注入してMessageServiceを作成
    const messageService = new MessageService(mockMessageRepository as any);

    // テスト
    const result = await messageService.getMessageById(1);
    expect(result.message).toEqual("hello");
  });
});
