import clsx, { ClassValue } from 'clsx';
import { ButtonHTMLAttributes, Component } from 'react';
import { IconType } from 'react-icons';

export interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    component: IconType;
    sideText?: string;
    additionalClasses?: ClassValue;
}

export class IconButton extends Component<IIconButtonProps> {
    render(): JSX.Element {
        const { component, additionalClasses, sideText, ...restProps } = this.props;
        const IconComponent = component;
        const classNames = clsx('icon-button', additionalClasses);

        return (
            <button className={classNames} {...restProps}>
                <IconComponent />
                {sideText && sideText}
            </button>
        );
    }
}
