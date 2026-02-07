import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/Card"
import { Button } from "@/components/shared/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar"
import { Calendar, FileText, Pill, Activity, ArrowRight, Star, Clock } from "lucide-react"

const DashboardHome = () => {
    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-primary-dark">Hello, John! 👋</h1>
                    <p className="text-text-secondary mt-1">How are you feeling today?</p>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-sm">
                    {["😊", "😐", "😔", "🤒"].map((mood) => (
                        <button key={mood} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-xl transition-colors">
                            {mood}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Book Appointment", icon: Calendar, color: "bg-blue-100 text-blue-600" },
                    { label: "Upload Records", icon: FileText, color: "bg-green-100 text-green-600" },
                    { label: "Prescriptions", icon: Pill, color: "bg-purple-100 text-purple-600" },
                    { label: "Health Metrics", icon: Activity, color: "bg-orange-100 text-orange-600" },
                ].map((action, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-none bg-white">
                        <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${action.color}`}>
                                <action.icon className="h-6 w-6" />
                            </div>
                            <span className="font-medium text-text-primary">{action.label}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Upcoming Appointments */}
                <Card className="lg:col-span-2 border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-xl">Upcoming Appointments</CardTitle>
                        <Button variant="ghost" className="text-primary">View All</Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2].map((_, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-shrink-0 text-center bg-white p-2 rounded-lg shadow-sm w-16">
                                            <span className="block text-xs font-bold text-primary uppercase">Oct</span>
                                            <span className="block text-xl font-bold text-gray-900">24</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Avatar className="h-6 w-6">
                                                    <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                                                    <AvatarFallback>DR</AvatarFallback>
                                                </Avatar>
                                                <h4 className="font-semibold text-gray-900">Dr. Sarah Wilson</h4>
                                            </div>
                                            <p className="text-sm text-text-secondary">Cardiologist • Video Consultation</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right mr-4 hidden sm:block">
                                            <div className="flex items-center gap-1 text-sm text-text-secondary">
                                                <Clock className="h-3 w-3" />
                                                10:00 AM
                                            </div>
                                            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">Confirmed</span>
                                        </div>
                                        <Button size="sm" variant="outline">Reschedule</Button>
                                        <Button size="sm">Join</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Recommended Doctors */}
                <Card className="border-none shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl">Recommended</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                                <Avatar className="h-12 w-12 rounded-lg">
                                    <AvatarImage src={`https://i.pravatar.cc/150?u=${i + 10}`} />
                                    <AvatarFallback>DR</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Dr. James Carter</h4>
                                    <p className="text-xs text-text-secondary">Neurologist • 12 years exp</p>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-500 font-semibold text-sm">
                                    <Star className="h-3 w-3 fill-current" />
                                    4.9
                                </div>
                            </div>
                        ))}
                        <Button variant="outline" className="w-full mt-4 group">
                            Find More Doctors <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Health Metrics (Placeholder for charts) */}
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-blue-100">Heart Rate</span>
                            <Activity className="h-5 w-5 text-blue-100" />
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">72</span>
                            <span className="text-blue-100 text-sm">bpm</span>
                        </div>
                        <p className="text-xs text-blue-100 mt-2">Normal range</p>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-none">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-purple-100">Blood Pressure</span>
                            <Activity className="h-5 w-5 text-purple-100" />
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">120/80</span>
                            <span className="text-purple-100 text-sm">mmHg</span>
                        </div>
                        <p className="text-xs text-purple-100 mt-2">Optimal</p>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-none">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-teal-100">Sleep</span>
                            <Activity className="h-5 w-5 text-teal-100" />
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold">7h 30m</span>
                            <span className="text-teal-100 text-sm">avg</span>
                        </div>
                        <p className="text-xs text-teal-100 mt-2">+30m from last week</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default DashboardHome
