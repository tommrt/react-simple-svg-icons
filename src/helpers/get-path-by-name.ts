import { TIconName } from "../models/icon-name";

/**
 * I think this is dodgy because it will bloat the package
 * @param name 
 * @returns 
 */
export const getPathByName = (name: TIconName): string => {
    if (!name) return '';
    switch (name) {
        case 'calandar':
            return `
                M 4 4
                h 16
                a 2 2 0 0 1 2 2
                v 14
                a 2 2 0 0 1 -2 2
                h -16
                a 2 2 0 0 1 -2 -2
                v -14
                a 2 2 0 0 1 2 -2
                M 8 2
                v 4
                m 8 0
                v -4
                M 2 10
                h 20
            `;
    }
    return '';
}