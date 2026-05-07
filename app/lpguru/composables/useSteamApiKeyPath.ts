export const useSteamApiKeyPath = () => {
  const steamApiKeyPath = process.env.STEAM_API_KEY_FILE || "";

  return {
    steamApiKeyPath,
  };
};
