export const useUrlGenerator = () => {
  const saveGameUrl: string = "/api/games/save";
  const deleteGameUrl: string = "/api/games/delete";
  const getAllUrl: string = "/api/games/all";
  const getSessionUrl: string = "/api/auth/session";
  const apiLoginUrl: string = "/api/auth/login";
  const apiCreateUser: string = "/api/user/create";
  const apiRemoveUser: string = "/api/user/remove";

  const getLoginUrl: string = "/login";
  const noAccessUrl: string = "/noaccess";
  const gamePage: string = "/games";

  return {
    saveGameUrl,
    deleteGameUrl,
    getAllUrl,
    getSessionUrl,
    apiLoginUrl,
    apiCreateUser,
    apiRemoveUser,
    getLoginUrl,
    noAccessUrl,
    gamePage,
  };
};
