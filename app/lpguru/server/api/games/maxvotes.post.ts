import { useWebApiKey } from '~/composables/useWebApiKey';
import type { VoteStorage } from '~/types/games/storageTypes';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const { webApiKey } = await useWebApiKey();
    const xApiKey = getHeader(event, 'x-api-key') || '';

    if (!xApiKey) {
        throw createError({
            statusCode: 403,
            statusMessage: 'You do not permissions to set max votes!!!',
        });
    }

    if (xApiKey !== webApiKey) {
        throw createError({
            statusCode: 401,
            statusMessage: 'You are not authorized to set max votes',
        });
    }

    if (!body || !body.maxVotes) {
        throw createError({
            statusCode: 400,
            statusMessage: 'You have to provide maxVotes!!!',
        });
    }

    const voteStorage = useStorage('votes');
    const voteItem: VoteStorage = {
        maxVotes: body.maxVotes,
    };

    await voteStorage.setItem('voteParams', voteItem);
    setResponseStatus(event, 200, 'Max votes set!');
});
