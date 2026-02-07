import { Link } from 'react-router-dom';
import { Button } from '@/components/shared/Button';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <h1 className="text-4xl font-bold mb-8">Welcome to Connect.io</h1>
            <p className="text-xl mb-12 text-muted-foreground">The future of healthcare connectivity.</p>
            <div className="flex gap-4">
                <Link to="/dashboard">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">Explore Dashboard</Button>
                </Link>
                <Link to="/login">
                    <Button variant="outline" size="lg">Login</Button>
                </Link>
                <Link to="/signup">
                    <Button variant="outline" size="lg">Sign Up</Button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
