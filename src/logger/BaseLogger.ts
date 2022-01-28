import {
    BaseHeadingStyles,
    ErrorHeadingStyle,
    ErrorStyle,
    GreetHeadingStyle,
    GreetStyle,
    LogHeadingStyle,
    LogStyle,
    WarningHeadingStyle,
    WarnStyle,
} from './styles';
import { BaseHeading, Config, LifecycleHooks, Styles } from './types';

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

    protected onMounted() {
        if (this.config.name) console.log(`Hello ${this.config.name}`);
        if (this.config.organization) console.log(`Hope ${this.config.organization} is doing well`);
        if (this.config.componentName)
            console.log(`Hope ${this.config.componentName} will work like a charm`);
    }

    private baseLog<T>(
        data: T,
        styles: Styles,
        heading?: string,
        headingStyles: Styles = BaseHeadingStyles
    ) {
        console.log(
            `%c${heading + '\n'}%c ${data}`,
            this.resolveStyles(headingStyles),
            this.resolveStyles(styles)
        );
    }

    private resolveDataType<T>(data: T) {
        console.log('Siema');
    }

    private resolveStyles(styles: Styles): string {
        if (typeof styles === 'object') {
            return styles.join(';');
        }

        return styles;
    }

    greet<T>(data: T, heading: BaseHeading = 'Hello'): void {
        this.baseLog('-------------------------', GreetStyle, heading, GreetHeadingStyle);
    }

    log<T>(data: T, heading: BaseHeading = 'Info'): void {
        this.baseLog(data, LogStyle, heading, LogHeadingStyle);
    }

    warn<T>(data: T, heading: BaseHeading = 'Warning'): void {
        this.baseLog(data, WarnStyle, heading, WarningHeadingStyle);
    }

    error<T>(data: T, heading: BaseHeading = 'Error'): void {
        this.baseLog(data, ErrorStyle, heading, ErrorHeadingStyle);
    }
}
