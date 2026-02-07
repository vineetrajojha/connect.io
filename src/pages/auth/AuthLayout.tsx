import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
