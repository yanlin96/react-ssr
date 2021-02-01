import express from "express";
import Home from "../containers/Home";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

// 静态文件
app.use(express.static("public"));

const content = renderToString(<Home />);
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="/index.js"></script>
    </html>    
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
