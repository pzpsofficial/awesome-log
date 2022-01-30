import { Styles } from './types';

export const BaseStyles: Styles = [
    'color: white',
    'padding: 4px',
    'font-family: "Courier New", monospace;',
    'font-weight: regular',
    'font-size: 13px',
    'background-color: #2B2B2B',
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
    'padding: 100px 10px',
    'background-image: url(https://source.unsplash.com/random/?programming,terminal)',
    'background-position: center',
    'background-repeat: no-repeat',
    'background-size: cover',
    'font-size: 16px',
    'text-shadow: 2px 2px 2px #000',
];

export const LogStyle: Styles = [...BaseStyles];

export const WarnStyle: Styles = [...BaseStyles];

export const ErrorStyle: Styles = [...BaseStyles];
