import React from 'react';

export type ModalBodyProps = React.PropsWithChildren<React.ComponentProps<'div'>>;

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className, ...props }) => {
    return (
        <div className="p-6" {...props}>
            {children}
        </div>
    );
};

export default ModalBody;
