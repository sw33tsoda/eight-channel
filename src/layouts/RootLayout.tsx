import { ReactNode } from 'react';

interface IRootLayout {
    children: ReactNode;
}

export const RootLayout = ({ children }: IRootLayout) => {
    return (
        <div className="root-layout">
            <h1>This is root layout</h1>
            {children}
        </div>
    );
};
