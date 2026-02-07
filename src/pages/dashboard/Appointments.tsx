import { useState } from "react"
import { Calendar as CalendarIcon, Clock, MapPin, Video, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/shared/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar"
import { Badge } from "@/components/shared/Badge"
import { Card, CardContent } from "@/components/shared/Card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/shared/Tabs"

const appointments = [
    {
        id: 1,
        doctor: { name: "Dr. Sarah Wilson", specialty: "Cardiologist", image: "https://i.pravatar.cc/150?u=1" },
        date: "2023-10-24",
        time: "10:00 AM",
        type: "Video Consultation",
        status: "confirmed",
        location: "Online"
    },
    {
        id: 2,
        doctor: { name: "Dr. James Carter", specialty: "Neurologist", image: "https://i.pravatar.cc/150?u=10" },
        date: "2023-10-28",
        time: "02:30 PM",
        type: "In-Person Visit",
        status: "pending",
        location: "123 Medical Center Dr, NY"
    },
    {
        id: 3,
        doctor: { name: "Dr. Emily Chen", specialty: "Dermatologist", image: "https://i.pravatar.cc/150?u=5" },
        date: "2023-10-15",
        time: "11:00 AM",
        type: "In-Person Visit",
        status: "completed",
        location: "456 Skin Clinic, NY"
    },
    {
        id: 4,
        doctor: { name: "Dr. Michael Brown", specialty: "Pediatrician", image: "https://i.pravatar.cc/150?u=8" },
        date: "2023-10-10",
        time: "09:15 AM",
        type: "Video Consultation",
        status: "cancelled",
        location: "Online"
    }
]

const getStatusColor = (status: string) => {
    switch (status) {
        case "confirmed": return "bg-green-100 text-green-700 border-green-200"
        case "pending": return "bg-yellow-100 text-yellow-700 border-yellow-200"
        case "completed": return "bg-blue-100 text-blue-700 border-blue-200"
        case "cancelled": return "bg-red-100 text-red-700 border-red-200"
        default: return "bg-gray-100 text-gray-700"
    }
}

const Appointments = () => {
    const [filter, setFilter] = useState("upcoming")

    const filteredAppointments = appointments.filter(apt => {
        if (filter === "upcoming") return ["confirmed", "pending"].includes(apt.status)
        if (filter === "past") return apt.status === "completed"
        if (filter === "cancelled") return apt.status === "cancelled"
        return true
    })

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-primary-dark">My Appointments</h1>
                <Button>Book New Appointment</Button>
            </div>

            <Tabs defaultValue="upcoming" onValueChange={setFilter}>
                <TabsList className="mb-6">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>

                <TabsContent value={filter} className="space-y-4">
                    {filteredAppointments.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-dashed">
                            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <CalendarIcon className="h-6 w-6 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No appointments found</h3>
                            <p className="text-text-secondary mt-1">You don&apos;t have any {filter} appointments.</p>
                        </div>
                    ) : (
                        filteredAppointments.map((apt) => (
                            <Card key={apt.id} className="overflow-hidden border-l-4 hover:shadow-md transition-shadow"
                                style={{ borderLeftColor: apt.status === "confirmed" ? "#10B981" : apt.status === "pending" ? "#F59E0B" : apt.status === "cancelled" ? "#EF4444" : "#3B82F6" }}
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Date Side */}
                                        <div className="flex-shrink-0 flex flex-row md:flex-col items-center justify-center md:w-24 bg-gray-50 rounded-lg p-3 gap-2 md:gap-0">
                                            <span className="text-sm font-bold text-text-secondary uppercase">
                                                {new Date(apt.date).toLocaleDateString('en-US', { month: 'short' })}
                                            </span>
                                            <span className="text-2xl font-bold text-gray-900">
                                                {new Date(apt.date).getDate()}
                                            </span>
                                            <span className="text-xs text-text-tertiary">
                                                {new Date(apt.date).toLocaleDateString('en-US', { weekday: 'short' })}
                                            </span>
                                        </div>

                                        {/* Main Info */}
                                        <div className="flex-1 flex flex-col md:flex-row justify-between gap-4">
                                            <div className="flex gap-4">
                                                <Avatar className="h-12 w-12 rounded-lg">
                                                    <AvatarImage src={apt.doctor.image} />
                                                    <AvatarFallback>DR</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{apt.doctor.name}</h3>
                                                    <p className="text-sm text-text-secondary">{apt.doctor.specialty}</p>

                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3">
                                                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                                            <Clock className="h-4 w-4" />
                                                            {apt.time}
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                                            {apt.type === "Video Consultation" ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                                                            {apt.location}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Status & Actions */}
                                            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4">
                                                <Badge variant="outline" className={`${getStatusColor(apt.status)} capitalize border-2`}>
                                                    {apt.status === "confirmed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                                                    {apt.status}
                                                </Badge>

                                                {apt.status !== "cancelled" && apt.status !== "completed" && (
                                                    <div className="flex items-center gap-2">
                                                        <Button variant="outline" size="sm">Reschedule</Button>
                                                        {apt.status === "confirmed" && apt.type === "Video Consultation" ? (
                                                            <Button size="sm">Join Call</Button>
                                                        ) : (
                                                            <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">Cancel</Button>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Appointments
