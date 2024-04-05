export const useExcludeRoutes = () => {
  function exclude(originalRoute: string, routes: string[]) {
    if (routes.includes(originalRoute)) {
      return true;
    }

    return false;
  }
  return {
    exclude,
  };
};
