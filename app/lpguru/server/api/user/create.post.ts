import { useWebApiKey } from '~/composables/useWebApiKey';
import type { UserStorage } from '~/types/games/storageTypes';

export default defineEventHandler(async (event) => {
    const userStorage = useStorage('user');
    const body = await readBody(event);

    const { webApiKey } = await useWebApiKey();
    const xApiKey = getHeader(event, 'x-api-key') || '';

    if (!xApiKey) {
        throw createError({
            statusCode: 403,
            statusMessage: 'You do not permissions to create a user!!!',
        });
    }

    if (xApiKey !== webApiKey) {
        throw createError({
            statusCode: 401,
            statusMessage: 'You are not authorized to create a user',
        });
    }

    const data: UserStorage = {
        username: body.username,
        password: body.password,
        currentVotes: 0,
        gameVotes: [],
    };

    try {
        console.log(`Creating user ${body.username}...`);
        await userStorage.setItem(body.username, data);
        console.log('Created!!!');
    } catch (error) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Cannot create user. Can\'t write to storage!!!',
        });
    }

    setResponseStatus(event, 201, 'User created!');
});
