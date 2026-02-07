import { Users, Calendar, Star, DollarSign, Clock, ArrowRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/Card"
import { Button } from "@/components/shared/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar"
import { Badge } from "@/components/shared/Badge"

const DoctorDashboard = () => {
    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Patients", value: "1,240", icon: Users, color: "bg-blue-500", trend: "+12%" },
                    { label: "Appointments", value: "48", icon: Calendar, color: "bg-purple-500", trend: "+8%" },
                    { label: "Pending Reviews", value: "12", icon: Star, color: "bg-yellow-500", trend: "0%" },
                    { label: "Earnings", value: "$4,250", icon: DollarSign, color: "bg-green-500", trend: "+24%" },
                ].map((stat, index) => (
                    <Card key={index} className="border-none shadow-sm overflow-hidden relative">
                        <div className={`absolute right-0 top-0 w-24 h-24 transform translate-x-8 -translate-y-8 rounded-full opacity-10 ${stat.color}`}></div>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10 text-white`}>
                                    <div className={`p-2 rounded-md ${stat.color}`}>
                                        <stat.icon className="h-5 w-5" />
                                    </div>
                                </div>
                                {stat.trend !== "0%" && (
                                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                        {stat.trend}
                                    </span>
                                )}
                            </div>
                            <div className="mt-4">
                                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                                <p className="text-text-secondary text-sm">{stat.label}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Today's Schedule */}
                <Card className="lg:col-span-2 border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-xl">Today's Schedule</CardTitle>
                        <span className="text-sm text-text-secondary">{new Date().toLocaleDateString()}</span>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { time: "09:00 AM", patient: "Alice Cooper", type: "Video Consultation", status: "completed", img: "20" },
                                { time: "10:30 AM", patient: "Robert Fox", type: "In-Person Visit", status: "in-progress", img: "11" },
                                { time: "11:45 AM", patient: "Cody Fisher", type: "Video Consultation", status: "upcoming", img: "33" },
                                { time: "02:00 PM", patient: "Esther Howard", type: "In-Person Visit", status: "upcoming", img: "44" },
                            ].map((apt, i) => (
                                <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="w-20 text-center border-r pr-4 mr-4">
                                        <span className="text-sm font-bold text-gray-900 block">{apt.time}</span>
                                    </div>
                                    <div className="flex-1 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={`https://i.pravatar.cc/150?u=${apt.img}`} />
                                                <AvatarFallback>PT</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{apt.patient}</h4>
                                                <p className="text-xs text-text-secondary">{apt.type}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {apt.status === "in-progress" ? (
                                                <Button size="sm" className="bg-green-600 hover:bg-green-700">Continue</Button>
                                            ) : apt.status === "upcoming" ? (
                                                <Button size="sm" variant="outline">Start</Button>
                                            ) : (
                                                <Badge variant="secondary" className="bg-gray-200 text-gray-600">Completed</Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button variant="ghost" className="w-full mt-4">
                            View All Appointments <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>

                {/* Recent Activity / Requests */}
                <div className="space-y-6">
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg">Review Requests</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                                    <div className="bg-blue-50 p-2 rounded-full">
                                        <Clock className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">Medical Report Review</p>
                                        <p className="text-xs text-text-secondary mb-2">Requested by John Doe • 2h ago</p>
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="outline" className="h-7 text-xs">Decline</Button>
                                            <Button size="sm" className="h-7 text-xs">Review</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboard
