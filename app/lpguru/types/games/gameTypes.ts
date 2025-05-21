//eslint-disable-file
export interface LanGame {
  id: string;
  name: string;
  upVotes: number;
  downVotes: number;
  differentUserUpVotes?: number;
  differentUserDownVotes?: number;
  creatorId: string;
  platform: GamingPlatform;
  genre: GamingGenre;
  price: string;
  description?: string;
}

export enum GamingPlatform {
  Steam,
  Epic,
  Ubisoft,
  EA,
  GamePass,
  GOG,
  BattleNet,
  Unknown,
}

export enum GamingGenre {
  Action,
  Racing,
  Survival,
  Shooter,
  JumpNRun,
  Simulation,
  Strategy,
  Sport,
  Roleplay,
  Adventure,
  Other,
}

export interface PlatformOptions {
  label: string;
  value: GamingPlatform;
}

export interface GenreOptions {
  label: string;
  value: GamingGenre;
}
