import { ButtonHTMLAttributes, Component } from 'react';
import { clsx } from 'clsx';

// Types
import type { ButtonVariant } from '@/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly variant?: ButtonVariant;
    readonly additionalClasses?: Record<string, boolean> | Array<string>
}

export class Button extends Component<ButtonProps> {
    render(): JSX.Element {
        const {
            variant = 'primary',
            additionalClasses,
            ...rest
        } = this.props;

        const classNames = clsx([{
            'btn': true,
            'btn-primary': variant === 'primary',
            'btn-secondary': variant === 'secondary',
            'btn-outlined': variant === 'outlined',
        }], additionalClasses);

        return (
            <button className={classNames} {...rest}/>
        );
    }
}