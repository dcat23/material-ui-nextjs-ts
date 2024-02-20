import {InfoRequest} from "@dcat23/lib/types/api";
import {Response} from "@prisma/client";


const BASE_API_URL = process.env.BASE_API_URL as string;

export async function requestInfo(info: InfoRequest): Promise<Response> {
  const url = new URL("yt/info", BASE_API_URL);

  console.log({url})

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({info}),
  });

  if (!response.ok) {
    console.log("there was an issue");
    const error = await response.text();
    console.log(error);
    throw new Error(error);
  }
  const json = await response.json();
  console.log({json});
  return json;
}