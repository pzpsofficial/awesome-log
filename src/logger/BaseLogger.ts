import { resolveDataType } from './helpers/resolve-data-type';
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
import { AvailableTypes, BaseHeading, Config, LifecycleHooks, Styles } from './types';

export class BaseLogger {
    private readonly config: Config = {
        name: '',
        organization: '',
        componentName: '',
        showGreet: true,
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
        if (this.config.showGreet) {
            this.greet();
        }
    }

    private baseLog<T>(
        data: T,
        styles: Styles,
        heading?: string,
        headingStyles: Styles = BaseHeadingStyles
    ) {
        const dataType = this.resolveDataType(data);
        if (heading) {
            console.log(`%c${heading}`, this.resolveStyles(headingStyles));
        }

        if (dataType === 'array' || dataType === 'object') {
            console.log(`%c${JSON.stringify(data, undefined, 4)}`, this.resolveStyles(styles));
        } else {
            console.log(`%c${data}`, this.resolveStyles(styles));
        }
    }

    private resolveDataType<T>(data: T): AvailableTypes {
        return resolveDataType(data);
    }

    private resolveStyles(styles: Styles): string {
        if (typeof styles === 'object') {
            return styles.join(';');
        }

        return styles;
    }

    private greet(): void {
        const heading = 'Hello, ' + (this.config.name ?? 'our awesome user') + '!';
        let data = '';

        if (this.config.organization) {
            data += `We hope you are having a great time in ${this.config.organization}! `;
        }

        if (this.config.componentName) {
            data += `Fingers crossed your ${this.config.componentName} component will work like a charm!`;
        }

        this.baseLog(data, GreetStyle, heading, GreetHeadingStyle);
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
