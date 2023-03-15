import React from 'react';
import cssClassBuilder from '../../CssClassBuilder';
import {Size} from '../../types/Size';
import {ThemeDefinition} from '../../theme';
import {useTheme} from "../../hooks";

export interface ButtonTheme extends ThemeDefinition {
    base:string;
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    },
    disabled: {
        true: 'bg-blue-400 dark:bg-blue-500 cursor-not-allowed'
    }
}

export interface ButtonProps {
    size?:Size;
    disabled?:boolean;
    children?:any;
    onClick?:(event?:any) => void;
}

export const Button:React.FC<ButtonProps> = (props:ButtonProps) => {
    const theme = useTheme('button') as ButtonTheme;
    const css:string = cssClassBuilder(props, theme, theme.base);
    return (
        <>
            <button type="button" disabled={props.disabled} onClick={props.onClick} className={css}>{props.children}</button>
        </>
    );
}
