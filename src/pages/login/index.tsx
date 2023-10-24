import type { ReactNode } from 'react';

// Components
import { Input } from '@/components';

// Layouts
import { AuthenticationLayout } from '@/layouts';

// Types
import type { NextPageWithLayout } from '../_app';

const Login: NextPageWithLayout = () => {
    return (
        <div className="login-page">
            <h1 className="heading">Login</h1>
            <form>
                <label htmlFor="email">
                    Email
                    <Input id="email" placeholder="Enter your email" />
                </label>
                <label htmlFor="password">
                    Password
                    <Input id="password" placeholder="Enter your password" />
                </label>
            </form>
        </div>
    );
};

Login.getCustomLayout = (page: ReactNode) => {
    return (
        <AuthenticationLayout title="Login" subTitle="Welcome to Eight-Channel.">
            {page}
        </AuthenticationLayout>
    );
};

export default Login;
