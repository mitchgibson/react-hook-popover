import React from 'react';

export type ModalHeaderProps = React.PropsWithChildren<React.ComponentProps<'div'>>;

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className, ...props }): JSX.Element => {

    return (
        <div className="flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5" {...props}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{children}</h3>
        </div>
    );
};

export default ModalHeader;
