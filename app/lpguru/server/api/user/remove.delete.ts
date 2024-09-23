import { useWebApiKey } from '~/composables/useWebApiKey';

export default defineEventHandler(async (event) => {
    const userStorage = useStorage('user');
    const body = await readBody(event);

    const { webApiKey } = await useWebApiKey();
    const xApiKey = getHeader(event, 'x-api-key') || '';

    if (!xApiKey) {
        throw createError({
            statusCode: 403,
            statusMessage: 'You do not permissions to remove a user!!!',
        });
    }

    if (xApiKey !== webApiKey) {
        throw createError({
            statusCode: 401,
            statusMessage: 'You are not authorized to remove a user',
        });
    }

    try {
        console.log(`Removing user ${body.username}...`);
        await userStorage.removeItem(body.username);
        console.log('Removed!!!');
    } catch (error) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Cannot remove user. Can\'t write to storage!!!',
        });
    }

    setResponseStatus(event, 202, 'User removed!');
});
