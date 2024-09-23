import { useUrlGenerator } from '~/composables/useUrlGenerator';

export const useConfigService = () => {
    const urlGenerator = useUrlGenerator();

    function getLanDate() {
        return $fetch(urlGenerator.apiConfigLanDate, {
            method: 'GET',
        });
    }
    return {
        getLanDate,
    };
};
