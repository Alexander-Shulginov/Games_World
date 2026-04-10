export type HeaderNav = {
    name: string;
    to: string,
    query?: {
        page?: number;
    }
}

export const HEADER_CONFIG: HeaderNav[] = [
    {
        name: 'Home',
        to: 'Home'
    },
    {
        name: 'Games',
        to: 'Games',
        query: {
            page: 1
        }
    },
    {
        name: 'Genres',
        to: 'Genres'
    }

]