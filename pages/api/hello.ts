// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  for (let i = 0; i <= 5; i++) {
    console.log(`sleeping ${i}`);
    await sleep(i * 1000);
  }

  await res.status(200).json({ name: "John Doe" });
}

export const config = {
  type: "experimental-background",
};
