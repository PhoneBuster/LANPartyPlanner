import { useUrlGenerator } from "~/composables/useUrlGenerator";
import type {
  GenreOptions,
  LanGame,
  PlatformOptions,
} from "~/types/games/gameTypes";
import { GamingPlatform, GamingGenre } from "~/types/games/gameTypes";
import type { ResponseMessage } from "~/types/messages/responseMessages";

export const useGameService = () => {
  const urlGenerator = useUrlGenerator();

  function saveNewGame(game: LanGame) {
    return $fetch(urlGenerator.saveGameUrl, {
      method: "POST",
      body: JSON.stringify(game),
    });
  }

  function deleteGame(gameId: string) {
    console.log("delete game...", gameId);
    const content = { id: gameId };
    return $fetch(urlGenerator.deleteGameUrl, {
      method: "DELETE",
      body: JSON.stringify(content),
    });
  }

  function getAll(): Promise<ResponseMessage> {
    return $fetch(urlGenerator.getAllUrl, {
      headers: {
        accept: "application/json",
      },
    });
  }

  function getPlatformOptions(): PlatformOptions[] {
    return [
      { label: "Steam", value: GamingPlatform.Steam },
      { label: "GamePass", value: GamingPlatform.GamePass },
      { label: "Ubisoft", value: GamingPlatform.Ubisoft },
      { label: "GOG", value: GamingPlatform.GOG },
      { label: "EA Gaming", value: GamingPlatform.EA },
      { label: "Epic", value: GamingPlatform.Epic },
      { label: "Battle NET", value: GamingPlatform.BattleNet },
      { label: "Unbekannt", value: GamingPlatform.Unknown },
    ];
  }

  function getGenreOptions(): GenreOptions[] {
    return [
      { label: "Action", value: GamingGenre.Action },
      { label: "Racing", value: GamingGenre.Racing },
      { label: "Adventure", value: GamingGenre.Adventure },
      { label: "Jump and run", value: GamingGenre.JumpNRun },
      { label: "Roleplay", value: GamingGenre.Roleplay },
      { label: "Shooter", value: GamingGenre.Shooter },
      { label: "Simulation", value: GamingGenre.Simulation },
      { label: "Sport", value: GamingGenre.Sport },
      { label: "Strategy", value: GamingGenre.Strategy },
      { label: "Survival", value: GamingGenre.Survival },
      { label: "Other", value: GamingGenre.Other },
    ];
  }

  return {
    saveNewGame,
    deleteGame,
    getAll,
    getPlatformOptions,
    getGenreOptions,
  };
};
