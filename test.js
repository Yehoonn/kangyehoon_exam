const express = require("express");
const app = express();
const port = 8080;

let dummyData = [
  { user_id: 1, user_name: "강예훈", user_text: "안녕하세요" },
  { user_id: 2, user_name: "김근수", user_text: "텍스트입니다" },
  { user_id: 3, user_name: "이상호", user_text: "하이하이" },
];

app.listen(port, () => {
  console.log(`server start : ${port} `);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/data", (req, res) => {
  res.json(dummyData);
});
