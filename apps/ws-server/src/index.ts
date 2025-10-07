import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async function connection(ws) {
  const username = Math.random().toString();
  const password = Math.random().toString();
  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  ws.send("user created successfully");
});
