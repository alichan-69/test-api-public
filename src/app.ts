import express from "express";
import MessageRoute from "./application/route/MessageRoute";

const app = express();
const port = 3000;

app.use("", MessageRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
