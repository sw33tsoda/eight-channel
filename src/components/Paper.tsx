import { Component, ReactNode } from 'react';
import clsx, { ClassValue } from 'clsx';

export interface IPaperProps {
    readonly children: ReactNode,
    readonly additionalClasses?: ClassValue;
}

export class Paper extends Component<IPaperProps> {
    render(): JSX.Element {
        const {
            children,
            additionalClasses = ''
        } = this.props;

        const classNames = clsx('paper', 'shadow-lg', additionalClasses);

        return (
            <div className={classNames}>
                {children}
            </div>
        );
    }
}