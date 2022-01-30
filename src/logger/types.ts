export type Config = {
    name: string;
    organization: string;
    componentName: string;
    showGreet: boolean;
};

export type AvailableTypes =
    | 'primitive'
    | 'function'
    | 'object'
    | 'formData'
    | 'object'
    | 'array'
    | 'unknown';

export type OnMounted = () => void;

export type LifecycleHooks = {
    onMounted: OnMounted | undefined;
};

export type Styles = string | string[];

export type BaseHeading = 'Hello' | 'Info' | 'Warning' | 'Error' | string;

export interface FormData {
    entries(): [[string, unknown]];
}
