import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findMany();
  return (
    <div>
      username: {user?.[0]?.username} <br />
      password: {user?.[0]?.password}
    </div>
  );
}
