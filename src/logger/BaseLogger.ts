import { Config, LifecycleHooks } from './types';

export class BaseLogger {
    private readonly config: Config = {
        name: '',
        organization: '',
        componentName: '',
    };

    constructor(data?: Config, hooks?: LifecycleHooks) {
        this.config = data ?? this.config;

        if (hooks?.onMounted) {
            this.onMounted();
            hooks.onMounted();
        } else {
            this.onMounted();
        }
    }

    onMounted() {
        if (this.config.name) console.log(`Hello ${this.config.name}`);
        if (this.config.organization) console.log(`Hope ${this.config.organization} is doing well`);
        if (this.config.componentName)
            console.log(`Hope ${this.config.componentName} will work like a charm`);
    }

    greet<T>(data: T): void {
        console.log(data);
    }

    log<T>(data: T) {
        console.log(data);
    }

    warn<T>(data: T) {
        console.warn(data);
    }

    error<T>(data: T) {
        console.error(data);
    }
}
