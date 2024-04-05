export const useUrlGenerator = () => {
  const saveGameUrl: string = "/api/games/save";
  const deleteGameUrl: string = "/api/games/delete";
  const getAllUrl: string = "/api/games/all";
  const getSessionUrl: string = "/api/auth/session";
  const apiLoginUrl: string = "/api/auth/login";
  const apiSignUp: string = "/api/auth/signup";

  const getLoginUrl: string = "/login";
  const noAccessUrl: string = "/noaccess";
  const gamePage: string = "/games";

  return {
    saveGameUrl,
    deleteGameUrl,
    getAllUrl,
    getSessionUrl,
    apiLoginUrl,
    getLoginUrl,
    noAccessUrl,
    apiSignUp,
    gamePage,
  };
};
