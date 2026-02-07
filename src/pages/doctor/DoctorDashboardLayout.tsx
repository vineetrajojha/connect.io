import { useState } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import {
    LayoutDashboard,
    Users,
    Calendar,
    Clock,
    Settings,
    LogOut,
    Bell,
    Menu,
    X,
    FileText
} from "lucide-react"

import { Button } from "@/components/shared/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar"
import { Badge } from "@/components/shared/Badge"

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

const DoctorDashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const location = useLocation()

    const sidebarItems = [
        { icon: LayoutDashboard, label: "Overview", path: "/doctor/dashboard" },
        { icon: Users, label: "My Patients", path: "/doctor/patients" },
        { icon: Calendar, label: "Appointments", path: "/doctor/appointments" },
        { icon: Clock, label: "Schedule", path: "/doctor/schedule" },
        { icon: FileText, label: "Prescriptions", path: "/doctor/prescriptions" },
        { icon: Settings, label: "Settings", path: "/doctor/settings" },
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
                        <span className="text-xl font-bold text-primary-dark">MedConnect</span>
                        <span className="ml-2 text-xs bg-blue-100 text-primary px-2 py-0.5 rounded-full">Doctor</span>
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
                        <h2 className="text-lg font-semibold text-gray-800 hidden md:block">
                            Welcome back, Dr. Smith
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Bell className="h-5 w-5 text-text-secondary" />
                            <Badge className="absolute top-1 right-1 h-2 w-2 p-0 bg-red-500 border-2 border-white rounded-full" />
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-medium text-text-primary">Dr. Adam Smith</p>
                                <p className="text-xs text-text-secondary">Cardiologist</p>
                            </div>
                            <Avatar>
                                <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                                <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
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

export default DoctorDashboardLayout
