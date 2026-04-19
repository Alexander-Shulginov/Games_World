export enum ErrorIcons {
    Default = 'common-broken-joystick',
}

export type ErrorConfig = {
    title?: string;
    text?: string;
    icon?: ErrorIcons;
}

export const ERROR_CONFIG: ErrorConfig = {
    title: 'Failed to load data',
    text: 'Try again',
    icon: ErrorIcons.Default

}
