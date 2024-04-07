export const useWebApiKeyPath = () => {
  const webApiKeyPath = process.env.WEB_API_KEY_FILE || "";

  return {
    webApiKeyPath,
  };
};
