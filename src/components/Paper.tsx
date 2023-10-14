import { Component, ReactNode } from 'react';
import clsx from 'clsx';

export interface PaperProps {
    readonly children: ReactNode,
    readonly additionalClasses?: Record<string, boolean> | Array<string>;
}

export class Paper extends Component<PaperProps> {
    render(): JSX.Element {
        const {
            children,
            additionalClasses
        } = this.props;

        const classNames = clsx('paper', 'shadow-lg', additionalClasses);

        return (
            <div className={classNames}>
                {children}
            </div>
        );
    }
}