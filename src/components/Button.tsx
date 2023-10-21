import { ButtonHTMLAttributes, Component } from 'react';
import { ClassValue, clsx } from 'clsx';

// Types
import type { ButtonVariant } from '@/types';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly variant?: ButtonVariant;
    readonly additionalClasses?: ClassValue;
}

export const Button = ({ variant = 'primary', additionalClasses = '', ...restProps }: IButtonProps) => {
    const classNames = clsx(
        [
            {
                btn: true,
                'btn-primary': variant === 'primary',
                'btn-secondary': variant === 'secondary',
                'btn-outlined': variant === 'outlined',
            },
        ],
        additionalClasses,
    );

    return <button className={classNames} {...restProps} />;
};
