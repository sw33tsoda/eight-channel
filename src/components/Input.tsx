import { InputHTMLAttributes, Component } from 'react';
import { clsx } from 'clsx';

// Types
import type { InputVariant } from '@/types';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    readonly variant?: InputVariant;
    readonly additionalClasses?: Record<string, boolean> | Array<string>
}

export class Input extends Component<InputProps> {
    render(): JSX.Element {
        const {
            variant = 'primary',
            additionalClasses,
            ...restProps
        } = this.props;

        const classNames = clsx([{
            'input': true,
            'input-primary': variant === 'primary',
            'input-secondary': variant === 'secondary'
        }], additionalClasses);

        return (
            <input className={classNames} {...restProps} />
        );
    }
}