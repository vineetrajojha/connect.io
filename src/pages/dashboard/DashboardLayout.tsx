import { useState } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import {
    LayoutDashboard,
    Search,
    Calendar,
    FileText,
    Pill,
    MessageSquare,
    Settings,
    LogOut,
    Bell,
    Menu,
    X
} from "lucide-react"

import { Button } from "@/components/shared/Button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar"
import { Badge } from "@/components/shared/Badge"
import { Input } from "@/components/shared/Input"

const SidebarItem = ({ icon: Icon, label, path, isActive }: { icon: any, label: string, path: string, isActive: boolean }) => (
    <Link
        to={path}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
            ? "bg-primary text-white shadow-md"
            : "text-text-secondary hover:bg-gray-100 hover:text-primary"
            }`}
    >
        <Icon className="h-5 w-5" />
        <span className="font-medium">{label}</span>
    </Link>
)

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const location = useLocation()

    const sidebarItems = [
        { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
        { icon: Search, label: "Find Services", path: "/dashboard/find-doctors" },
        { icon: Calendar, label: "Appointments", path: "/dashboard/appointments" },
        { icon: FileText, label: "Records", path: "/dashboard/records" },
        { icon: Pill, label: "Prescriptions", path: "/dashboard/prescriptions" },
        { icon: MessageSquare, label: "Messages", path: "/dashboard/messages" },
        { icon: Settings, label: "Settings", path: "/dashboard/settings" },
    ]

    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <div className="h-full flex flex-col">
                    <div className="h-16 flex items-center px-6 border-b">
                        <span className="text-xl font-bold text-primary-dark">Connect.io</span>
                        <button
                            className="ml-auto lg:hidden"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <X className="h-6 w-6 text-text-secondary" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                        {sidebarItems.map((item) => (
                            <SidebarItem
                                key={item.path}
                                {...item}
                                isActive={location.pathname === item.path}
                            />
                        ))}
                    </div>

                    <div className="p-4 border-t">
                        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                            <LogOut className="h-5 w-5 mr-3" />
                            Log Out
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu className="h-6 w-6 text-text-secondary" />
                        </button>
                        <div className="hidden md:flex items-center relative w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-tertiary" />
                            <Input
                                placeholder="Search doctors, appointments..."
                                className="pl-10 bg-gray-50 border-none focus-visible:ring-1"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Bell className="h-5 w-5 text-text-secondary" />
                            <Badge className="absolute top-1 right-1 h-2 w-2 p-0 bg-red-500 border-2 border-white rounded-full" />
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l">
                            <Link to="/login">
                                <Button variant="ghost" size="sm">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button size="sm">Sign Up</Button>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-background p-6">
                    <Outlet />
                </main>
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    )
}

export default DashboardLayout
