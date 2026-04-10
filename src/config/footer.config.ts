import { RouteName } from "@/router/router";

export type FooterLinks = {
    title: string;
    links: {
        text: string;
        url: {
            name: string;
            query?: Record<string, string | number>;
        }
    }[]
}

export type FooterSlogan = {
    text: string;
}

export type FooterConfig = {
    links: FooterLinks[];
    slogan: FooterSlogan;
}

export const FOOTER_CONFIG: FooterConfig = {
    links: [
        {
            title: 'Useful Links',
            links: [
                {
                    text: 'Games',
                    url: { name: RouteName.Games }
                },
                {
                    text: 'Genres',
                    url: { name: RouteName.Genres }
                },
                // {
                //     text: 'Blog',
                //     url: { name: 'Blog' }
                // }
            ]
        },
        {
            title: 'Games',
            links: [
                {
                    text: 'PC',
                    url: {
                        name: RouteName.Games,
                        query: { parent_platforms: 1 }
                    }
                },
                {
                    text: 'PlayStation',
                    url: {
                        name: RouteName.Games,
                        query: { parent_platforms: 2 }
                    }
                },
                {
                    text: 'Xbox',
                    url: {
                        name: RouteName.Games,
                        query: { parent_platforms: 3 }
                    }
                },
                {
                    text: 'Nintendo',
                    url: {
                        name: RouteName.Games,
                        query: { parent_platforms: 7 }
                    }
                }
            ]
        },
        {
            title: 'Social Links',
            links: [
                {
                    text: 'Instagram',
                    url: { name: RouteName.Home }
                },
                {
                    text: 'Twitter',
                    url: { name: RouteName.Home }
                },
                {
                    text: 'YouTube',
                    url: { name: RouteName.Home }
                }
            ]
        }
    ],

    slogan: {
        text: 'Your gaming adventure awaits! Conquer challenges, embark on epic quests, and dive into unforgettable stories. The journey begins here!'
    }

}
