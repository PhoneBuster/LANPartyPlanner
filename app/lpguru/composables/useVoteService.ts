import { useUrlGenerator } from '~/composables/useUrlGenerator';

export const useVoteService = () => {
    const urlGenerator = useUrlGenerator();

    function getMaxVotes(): Promise<number> {
        return $fetch(urlGenerator.apiMaxVotes, {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        });
    }

    return {
        getMaxVotes,
    };
};
