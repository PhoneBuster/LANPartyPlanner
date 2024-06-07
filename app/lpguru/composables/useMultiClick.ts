let multiClicks = 0;
const timeoutIds: NodeJS.Timeout[] = [];

export const useMultiClick = () => {
  function onMultiClick(callbacks: Function[], delay: number = 300) {
    multiClicks++;
    clearTimeouts();
    timeoutIds.push(startTimeout(callbacks, delay));
  }

  function clearTimeouts() {
    timeoutIds.forEach((timeoutId) => {
      clearTimeout(timeoutId);
    });
  }

  function startTimeout(callbacks: Function[], delay: number) {
    return setTimeout(() => {
      if (callbacks.length === 0) {
        return;
      }
      if (multiClicks > callbacks.length) {
        callbacks[callbacks.length - 1]();
        return;
      }

      if (multiClicks >= 1 && multiClicks <= callbacks.length) {
        callbacks[multiClicks - 1]();
      }

      multiClicks = 0;
    }, delay);
  }

  return {
    onMultiClick,
  };
};
