export const useUrlGenerator = () => {
  const saveGameUrl: string = "/api/games/save";
  const deleteGameUrl: string = "/api/games/delete";
  const getAllUrl: string = "/api/games/all";
  const getGameByIdUrl: string = "/api/games/one";
  const getSessionUrl: string = "/api/auth/session";
  const apiLoginUrl: string = "/api/auth/login";
  const apiCreateUser: string = "/api/user/create";
  const apiRemoveUser: string = "/api/user/remove";
  const apiGameUpVote: string = "/api/games/upvote";
  const apiGameDownVote: string = "/api/games/downvote";
  const apiMaxVotes: string = "/api/games/maxvotes";

  const getLoginUrl: string = "/login";
  const noAccessUrl: string = "/noaccess";
  const gamePage: string = "/games";
  const homePage: string = "/";

  return {
    saveGameUrl,
    deleteGameUrl,
    getAllUrl,
    getGameByIdUrl,
    getSessionUrl,
    apiLoginUrl,
    apiCreateUser,
    apiRemoveUser,
    apiGameUpVote,
    apiGameDownVote,
    apiMaxVotes,
    getLoginUrl,
    noAccessUrl,
    gamePage,
    homePage,
  };
};
