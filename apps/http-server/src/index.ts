import express from "express";
import { client } from "@repo/db/client";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from http server");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client.user.create({
    data: {
      username: username,
      password: password
    }
  })

  res.json({
    status: "user created",
    data: { user },
  });
});

app.listen(3001, () => {
  console.log("HTTP server running on port 3001");
});
