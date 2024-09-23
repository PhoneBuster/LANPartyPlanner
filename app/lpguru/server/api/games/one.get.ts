import { LanGame } from '~/types/games/gameTypes';

export default defineEventHandler(async (event) => {
    const parameter = getQuery(event);
    const gameId = parameter.gameId as string;

    if (!gameId || gameId === '') {
        throw createError({
            statusCode: 400,
            statusMessage: 'Game Id required!!!',
        });
    }

    const gameStorage = useStorage('db');
    const game = (await gameStorage.getItem(gameId)) as LanGame;

    setResponseStatus(event, 200, 'Game found');

    return game;
});
