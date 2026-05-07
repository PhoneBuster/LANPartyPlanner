import fs from "node:fs";
import { useSteamApiKeyPath } from "~/composables/useSteamApiKeyPath";

export const useSteamApiKey = async () => {
  const { steamApiKeyPath } = useSteamApiKeyPath();
  let steamApiKey =
    (await fs.promises.readFile(steamApiKeyPath, "utf-8")) || "";
  steamApiKey = steamApiKey.replaceAll("\r\n", "");
  steamApiKey = steamApiKey.replaceAll("\n", "");

  return {
    steamApiKey,
  };
};
