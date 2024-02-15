import mysql, { RowDataPacket } from "mysql2/promise";
import { IMessageRepository } from "../interface/IMessageRepository";

export class MessageRepository implements IMessageRepository {
  private pool;

  constructor() {
    this.pool = mysql.createPool({
      host: "[DBのhost]",
      user: "root",
      password: "root",
      database: "test_api",
      port: 3306,
      namedPlaceholders: true,
    });
  }

  public async getMessageById(id: number) {
    const [rows] = await this.pool.query<RowDataPacket[]>(
      "select * from message where id = :id",
      {
        id,
      }
    );

    const message: {
      message: string;
    } = {
      message: rows[0].message,
    };

    return message;
  }
}
