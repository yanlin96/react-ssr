import express from "express";
import Home from "./containers/Home";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();
const content = renderToString(<Home />);
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>${content}</body>
    </html>    
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
