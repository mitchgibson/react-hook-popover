import React from 'react';
import { ModalHeader } from '../ModalHeader';
import { ModalBody } from '../ModalBody';
import { ModalFooter } from '../ModalFooter';
import cssClassBuilder from '../../../CssClassBuilder';
import {SizeExtended} from '../../../types/Size';
import {ThemeDefinition} from '../../../theme';
import {useTheme} from "../../../hooks";

export interface ModalContentInnerTheme extends ThemeDefinition {
    base: string;
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        auto: string;
    };
}

export interface ModalTheme extends ThemeDefinition {
    base: string;
    content: {
        base: string;
        inner: ModalContentInnerTheme
    };
    body: {
        base: string;
    };
    header: {
        base: string;
        title: string;
    };
    footer: {
        base: string;
    };
}

export interface ModalProps {
    children?:React.ReactNode,
    size?: SizeExtended;
}

const ModalComponent: React.FC<ModalProps> = ({
                                            children,
                                            size
                                        }) => {

    const theme = useTheme('modal') as ModalTheme;

    const base:string = cssClassBuilder({}, theme, theme.base);
    const content:string = cssClassBuilder({}, theme.content, theme?.content?.base);
    const contentInner:string = cssClassBuilder({size:size}, theme.content?.inner, theme.content?.inner.base);

    return <div
        className={base}>
        <div className={content}>
            <div className={contentInner}>
                {children}
            </div>
        </div>
    </div>
};

ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalComponent, { Header: ModalHeader, Body: ModalBody, Footer: ModalFooter });
export default Modal;
