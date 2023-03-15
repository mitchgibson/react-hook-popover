import {Theme} from './theme/Theme';
import {theme as defaultTheme} from './theme/default';
import {defaultsDeep} from 'lodash';

export interface ItwcConfig {
    theme:Theme;
}

export class Config {
    public static init(config:Partial<ItwcConfig> = {}):ItwcConfig {
        globalThis._ITWC = defaultsDeep(config, {
            theme: defaultTheme
        });
        Object.assign(globalThis._ITWC, config || {});
        return Config.read();
    }

    public static read():ItwcConfig {
        return globalThis._ITWC || {
            theme: defaultTheme
        };
    }
}
