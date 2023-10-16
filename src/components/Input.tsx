import { InputHTMLAttributes, Component } from 'react';
import { clsx } from 'clsx';

// Types
import type { AdditionalClasses, InputVariant } from '@/types';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    readonly variant?: InputVariant;
    readonly hasError?: boolean;
    readonly hasWarning?: boolean;
    readonly additionalClasses?: AdditionalClasses;
}

export class Input extends Component<IInputProps> {
    render(): JSX.Element {
        const {
            variant = 'primary',
            hasError = false,
            hasWarning = false,
            additionalClasses = '',
            ...restProps
        } = this.props;

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
    }
}
