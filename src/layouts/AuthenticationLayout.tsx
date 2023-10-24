import type { ReactNode } from 'react';

export interface IAuthenticationLayout {
    readonly title: string;
    readonly subTitle: string;
    readonly children: ReactNode;
}

export const AuthenticationLayout = ({ title = '', subTitle = '', children }: IAuthenticationLayout) => {
    return (
        <div className="auth-layout-container">
            <div className="auth-layout-content-left">
                <h1 className="auth-layout-title">{title}</h1>
                <h2 className="auth-layout-sub-title">{subTitle}</h2>
            </div>
            <div className="auth-layout-content-right">{children}</div>
        </div>
    );
};
