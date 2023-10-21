import { Input } from '@/components';

export default function Login() {
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
}
