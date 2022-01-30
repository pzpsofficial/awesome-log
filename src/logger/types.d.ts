export declare type Config = {
    name: string;
    organization: string;
    componentName: string;
    showGreet: boolean;
};
export declare type AvailableTypes = 'primitive' | 'function' | 'object' | 'formData' | 'object' | 'array' | 'unknown';
export declare type OnMounted = () => void;
export declare type LifecycleHooks = {
    onMounted: OnMounted | undefined;
};
export declare type Styles = string | string[];
export declare type BaseHeading = 'Hello' | 'Info' | 'Warning' | 'Error' | string;
export interface FormData {
    entries(): [[string, unknown]];
}
