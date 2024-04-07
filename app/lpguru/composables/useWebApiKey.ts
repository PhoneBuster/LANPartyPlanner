import fs from "node:fs";
import { useWebApiKeyPath } from "~/composables/useWebApiKeyPath";

export const useWebApiKey = async () => {
  const { webApiKeyPath } = useWebApiKeyPath();
  let webApiKey = (await fs.promises.readFile(webApiKeyPath, "utf-8")) || "";
  webApiKey = webApiKey.replaceAll("\r\n", "");
  webApiKey = webApiKey.replaceAll("\n", "");

  return {
    webApiKey,
  };
};
