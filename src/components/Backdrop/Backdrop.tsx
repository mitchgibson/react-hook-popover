import React from 'react';
import cssClassBuilder from '../../CssClassBuilder';
import useContainer from '../../hooks/use-container/useContainer';
import {createPortal} from 'react-dom';
import {ThemeDefinition} from '../../theme';
import {Position} from '../../types/Position';
import {useTheme} from "../../hooks/useTheme/useTheme";

export interface BackdropContentTheme extends ThemeDefinition {
    base: string;
    position: {
        'top-left': string;
        'top-center': string;
        'top-right': string;
        'center-left': string;
        'center': string;
        'center-right': string;
        'bottom-right': string;
        'bottom-center': string;
        'bottom-left': string;
    }
}

export interface BackdropTheme extends ThemeDefinition {
    base: string;
    content: BackdropContentTheme;
    show: {
        true: string;
        false: string;
    }
    blur: {
        true:string;
        false:string;
    };
    contrast: {
        true:string;
        false:string;
    },
    sepia: {
        true:string;
        false:string;
    }
}

export interface BackdropProps {
    children?:any;
    onClick?:() => void;
    blur?:boolean;
    contrast?:boolean;
    sepia?:boolean;
    show?:boolean;
    position?:Position;
}

export const Backdrop:React.FC<BackdropProps> = (props:BackdropProps) => {
    // props.show = props.show || false;
    const theme = useTheme('backdrop') as BackdropTheme;
    const base:string = cssClassBuilder(props, theme, theme.base);
    const content:string = cssClassBuilder(props, theme.content, theme.content?.base);
    const container = useContainer(document.body);

    const handleInsideClick = (event) => {
        event.stopPropagation();
    };

    return createPortal(
        <>
            <div aria-hidden={!props.show} role="dialog" className={base} onClick={props.onClick}>
                <div className={content}>
                    <div onClick={handleInsideClick}>
                        {props.children}
                    </div>
                </div>
            </div>
        </>,
        container
    );
}

export default Backdrop;
