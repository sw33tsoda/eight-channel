import { Component, ReactNode } from 'react';
import clsx, { ClassValue } from 'clsx';

export interface IPaperProps {
    readonly children: ReactNode;
    readonly additionalClasses?: ClassValue;
}

export const Paper = ({ children, additionalClasses = '' }: IPaperProps) => {
    const classNames = clsx('paper', 'shadow-lg', additionalClasses);

    return <div className={classNames}>{children}</div>;
};
