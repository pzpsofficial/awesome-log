import { AvailableTypes } from '../types';

export const resolveDataType = <T>(data: T): AvailableTypes => {
    switch (typeof data) {
        case 'bigint':
            return 'primitive';
            break;

        case 'boolean':
            return 'primitive';
            break;

        case 'number':
            return 'primitive';
            break;

        case 'string':
            return 'primitive';
            break;

        case 'symbol':
            return 'primitive';
            break;

        case 'undefined':
            return 'primitive';
            break;

        case 'function':
            return 'function';
            break;

        case 'object':
            if (Array.isArray(data)) {
                return 'array';
            }

            if (data === null) {
                return 'primitive';
            }

            if (data instanceof FormData) {
                return 'formData';
            }

            return 'object';

            break;

        default:
            return 'unknown';
            break;
    }
};
