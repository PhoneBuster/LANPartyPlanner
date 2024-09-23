export default defineEventHandler(async (event) => {
    const configStorage = useStorage('config');

    const body = await readBody(event);
    if (!body || !body.lanDate) {
        throw createError({
            statusCode: 400,
            statusMessage: 'LanDate required!!!',
        });
    }

    const newLanDate = new Date(body.lanDate).getTime();
    if (!newLanDate) {
        throw createError({
            statusCode: 400,
            statusMessage: 'LanDate is not a valid date!!!',
        });
    }

    await configStorage.setItem('lanDate', newLanDate);

    setResponseStatus(event, 200, 'Lan Date set');
});
