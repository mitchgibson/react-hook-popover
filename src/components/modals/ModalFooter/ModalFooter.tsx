import React from 'react';
import {Config} from "../../../config";
import cssClassBuilder from "../../../CssClassBuilder";

export type ModalFooterProps = React.PropsWithChildren<React.ComponentProps<'div'>>;

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...props }) => {
    const theme = Config.read().theme.modal.footer;

    const css:string = cssClassBuilder({}, theme, theme?.base);

    return (
        <div className={css} {...props}>
            {children}
        </div>
    );
};

export default ModalFooter;
