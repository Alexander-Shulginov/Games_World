export type AppGlobalConfig = {
    appName: string;
    appGitHub: string;
    authorName: string;
    authorGithub: string;
}

export type AppConfig = {
    global: AppGlobalConfig
}

export const APP_CONFIG: AppConfig = {
    global: {
        appName: 'Games World',
        appGitHub: 'https://github.com/Alexander-Shulginov/Games_World',
        authorName: 'Alexander Shulginov',
        authorGithub: 'https://github.com/Alexander-Shulginov',
    }
}