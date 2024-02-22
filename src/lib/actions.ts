import {InfoRequest} from "@dcat23/lib/types/api";
import {Response} from "@prisma/client";
import {BASE_API_URL} from "@dcat23/lib/constants";


export async function requestInfo(info: InfoRequest): Promise<Response> {
  const apiUrl = new URL(BASE_API_URL);
  apiUrl.pathname += "/yt/info";

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });

  if (!response.ok) {
    console.log("there was an issue");
    const error = await response.text();
    throw new Error(error);
  }
  const json = await response.json();
  console.log(json);
  return json;
}