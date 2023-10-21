import { InputHTMLAttributes, Component } from 'react';
import { ClassValue, clsx } from 'clsx';

// Types
import type { InputVariant } from '@/types';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    readonly variant?: InputVariant;
    readonly hasError?: boolean;
    readonly hasWarning?: boolean;
    readonly additionalClasses?: ClassValue;
}

export const Input = ({
    variant = 'primary',
    hasError = false,
    hasWarning = false,
    additionalClasses = '',
    ...restProps
}: IInputProps) => {
    const classNames = clsx(
        [
            {
                input: true,
                'input-primary': variant === 'primary',
                'input-secondary': variant === 'secondary',
                'input-error': hasError,
                'input-warning': hasWarning,
            },
        ],
        additionalClasses,
    );

    return <input className={classNames} {...restProps} />;
};
