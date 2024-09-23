export default defineEventHandler(async (event) => {
    const configStorage = useStorage('config');
    const lanDate = (await configStorage.getItem('lanDate')) as number;

    if (!lanDate) {
        return 0;
    }
    setResponseStatus(event, 200, 'Lan Date found');

    return lanDate;
});
