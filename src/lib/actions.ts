import {InfoRequest} from "@dcat23/lib/types/api";
import {Response} from "@prisma/client";
import {BASE_API_URL} from "@dcat23/lib/constants";


export async function requestInfo(info: InfoRequest): Promise<Response> {

  const url = new URL("yt/info", BASE_API_URL);

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
    throw new Error(error);
  }
  const json = await response.json();
  console.log({json});
  return json;
}