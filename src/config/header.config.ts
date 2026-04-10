import { RouteName } from "@/router/router";

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
        to: RouteName.Home
    },
    {
        name: 'Games',
        to: RouteName.Games,
        query: {
            page: 1
        }
    },
    {
        name: 'Genres',
        to: RouteName.Genres
    }

]