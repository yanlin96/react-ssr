import express from "express";
import { render } from "./utils";

const app = express();

// 静态文件
app.use(express.static("public"));

const port = 3000;

app.get("*", (req, res) => {
  res.send(render(req));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
