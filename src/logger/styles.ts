import { Styles } from './types';

export const BaseStyles: Styles = [
    'color: white',
    'padding: 8px',
    'font-family: "Courier New", monospace;',
    'font-weight: regular',
    'font-size: 13px',
    'background-color: #2B2B2B',
    'border-radius: 5px',
    'margin-bottom: 5px',
];

export const BaseHeadingStyles: Styles = [
    'color: white',
    'font-weight: bold',
    'font-size: 16px',
    'font-family: "Courier New", monospace;',
    'padding: 7px',
    'margin-bottom: 4px',
    'border-radius: 5px',
];

export const GreetHeadingStyle: Styles = [
    ...BaseHeadingStyles,
    'background-color: steelblue',
    'border-bottom: 2px solid blue',
];

export const LogHeadingStyle: Styles = [
    ...BaseHeadingStyles,
    'background-color: steelblue',
    'border-bottom: 2px solid blue',
];

export const WarningHeadingStyle: Styles = [
    ...BaseHeadingStyles,
    'background-color: orange',
    'border-bottom: 2px solid darkgoldenrot',
];

export const ErrorHeadingStyle: Styles = [
    ...BaseHeadingStyles,
    'background-color: firebrick',
    'border-bottom: 2px solid maroon',
];

export const GreetStyle: Styles = [
    ...BaseStyles,
    'line-height: 150px',
    'background-image: url(https://source.unsplash.com/random)',
    'background-position: center',
    'background-repeat: no-repeat',
    'background-size: cover',
    'color: transparent',
];

export const LogStyle: Styles = [...BaseStyles];

export const WarnStyle: Styles = [...BaseStyles];

export const ErrorStyle: Styles = [...BaseStyles];
