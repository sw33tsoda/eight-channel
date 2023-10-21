import { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ClassValue } from 'clsx';

// Components
import { Paper } from '.';

export interface IModalProps {
    readonly headerContent?: JSX.Element | ReactNode;
    readonly bodyContent?: JSX.Element | ReactNode;
    readonly footerContent?: JSX.Element | ReactNode;
    readonly additionalClasses?: ClassValue;
}

export const Modal = ({ headerContent, bodyContent, footerContent, additionalClasses = '' }: IModalProps) => {
    return createPortal(
        <div className="backdrop backdrop-blur-sm">
            <Paper additionalClasses={['modal', additionalClasses]}>
                {headerContent}
                {bodyContent}
                {footerContent}
            </Paper>
        </div>,
        document.body,
    );
};
