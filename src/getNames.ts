import { config } from "dotenv";
import { prompt } from "inquirer";
import { env } from "process";

config();

export async function getNames() {
  if (env.SANTAS) {
    return env.SANTAS.split(",");
  }
  const names: string[] = [];
  let response: NameResponse;
  do {
    response = await prompt<NameResponse>({
      name: "name",
    });
    if (response.name) {
      names.push(response.name);
    }
  } while (response.name);
  return names;
}

type NameResponse = {
  name: string;
};
