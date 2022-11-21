// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url, headers } = req;

  for (let i = 0; i <= 10; i++) {
    console.log(`sleeping ${i}`);
    axios.post("https://en1ta4a0x9c6i.x.pipedream.net", { i, url, headers });
    await sleep(i * 1000);
  }

  await res.status(200).json({ name: "John Doe" });
}

export const config = {
  type: "experimental-background",
};
