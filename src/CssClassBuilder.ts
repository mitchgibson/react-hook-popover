/**
 * Builds a CSS string from properties object and styles object
 *
 * Usage:
 * ```
 *
 * ```
 * @param props
 * @param styles
 * @param base
 */

/**
Usage:
```
const props:any = {
    size: 'lg'
};

const containerStyles:any = {
    size: {
        xs: 'w-8',
        sm: 'w-12',
        md: 'w-16',
        lg: 'w-24'
    },
    defaults: {
        size: 'md'
    }
};

const css:string = cssClassBuilder(props, containerStyles, 'avatar placeholder');

// "avatar placeholder w24"
```

**/
export default function cssClassBuilder(props:any, options:any, base?:string|undefined):string {
    const className:string[] = [base || ''];

    for(const key in options) {
        const defaultOption:string = options['defaults'] && options['defaults'][key] ? options['defaults'][key] : null;
        if (props[key] !== undefined) {
            const propKey:string = '' + props[key];
            className.push(options[key][propKey]);
        } else if(defaultOption) {
            className.push(options[key][defaultOption]);
        }
    }

    return className.join(' ');
}
