import { ButtonHTMLAttributes, Component } from 'react';
import { clsx } from 'clsx';

// Types
import type { AdditionalClasses, ButtonVariant } from '@/types';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly variant?: ButtonVariant;
    readonly additionalClasses?: AdditionalClasses
}

export class Button extends Component<IButtonProps> {
    render(): JSX.Element {
        const {
            variant = 'primary',
            additionalClasses = '',
            ...restProps
        } = this.props;

        const classNames = clsx([{
            'btn': true,
            'btn-primary': variant === 'primary',
            'btn-secondary': variant === 'secondary',
            'btn-outlined': variant === 'outlined',
        }], additionalClasses);

        return (
            <button className={classNames} {...restProps} />
        );
    }
}