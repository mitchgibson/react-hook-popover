import {Theme} from "../../theme";
import {Config} from "../../config";

/**
 * Returns a specific part of the theme.
 * @param {(keyof Theme)} [scope] - The part of the theme to return.
 * @returns {(Theme[keyof Theme] | Theme)} The requested part of the theme or the entire theme object.
 */
export function useTheme(scope:keyof Theme):Theme[keyof Theme] {
    return Config.read().theme[scope];
}

export default useTheme;
