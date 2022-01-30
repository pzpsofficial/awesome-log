import { BaseHeading, Config, LifecycleHooks } from './types';
export declare class BaseLogger {
    private readonly config;
    constructor(data?: Config, hooks?: LifecycleHooks);
    protected onMounted(): void;
    private baseLog;
    private resolveDataType;
    private resolveStyles;
    private formatFormData;
    private greet;
    log<T>(data: T, heading?: BaseHeading): void;
    warn<T>(data: T, heading?: BaseHeading): void;
    error<T>(data: T, heading?: BaseHeading): void;
}
