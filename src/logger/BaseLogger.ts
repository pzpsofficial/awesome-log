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
    static hasGreeted = false;

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
        this.greet();
    }

    private baseLog<T>(
        data: T,
        styles: Styles,
        heading?: string,
        headingStyles: Styles = BaseHeadingStyles
    ) {
        if (heading) {
            console.log(`%c${heading}`, this.resolveStyles(headingStyles));
        }
        console.log(`%c${data}`, this.resolveStyles(styles));
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

    private get getConsoleWidth() {
        return window.screen.availWidth - document.body.clientWidth;
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
