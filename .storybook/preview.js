import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import './styles.css';
import {Config} from '../src'

Config.init();

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const globalTypes = {

}
