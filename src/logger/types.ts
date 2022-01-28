export type Config = {
    name: string;
    organization: string;
    componentName: string;
};

export type OnMounted = () => void;

export type LifecycleHooks = {
    onMounted: OnMounted | undefined;
};