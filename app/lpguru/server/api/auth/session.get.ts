export default defineEventHandler((event) => {
    if (getRequestURL(event).pathname === '/__nuxt_error') {
        return false;
    }

    return {
        token: {
            accessToken: '',
            refreshToken: '',
        },
    };
});
