import { BackgroundHandler } from "@netlify/functions";
import axios from "axios";

export const handler: BackgroundHandler = (event, context) => {
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  //   console.log({ event, context });

  const { headers, rawUrl } = event;

  (async () => {
    for (let i = 0; i <= 5; i++) {
      const date = new Date();
      await sleep(i * 1000);
      await axios.post(
        `https://en1ta4a0x9c6i.x.pipedream.net?no-next=1&host=${headers.host}`,
        {
          i,
          headers,
          rawUrl,
        }
      );
      console.log(date.toLocaleString(), i);
    }
    console.log("Done");
  })();
};
