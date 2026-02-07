import { useState } from "react"
import { MapPin, Star, Languages, Award } from "lucide-react"

import { Button } from "@/components/shared/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar"
import { Badge } from "@/components/shared/Badge"
import { Card, CardContent } from "@/components/shared/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/Tabs"
// Note: In a real app, I would implement a full Calendar component.
// For now, I'll simulate the slot selection.

const DoctorProfile = () => {
    const [selectedDate] = useState<Date | null>(new Date())
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

    // Mock Data
    const doctor = {
        name: "Dr. Sarah Wilson",
        image: "https://i.pravatar.cc/150?u=1",
        specialty: "Cardiologist",
        rating: 4.9,
        reviews: 124,
        experience: 12,
        patients: "1000+",
        languages: ["English", "Spanish"],
        about: "Dr. Sarah Wilson is a renowned Cardiologist with over 12 years of experience in diagnosing and treating cardiovascular diseases. She is dedicated to providing personalized care to her patients and is known for her compassionate approach.",
        education: [
            { degree: "MD - Cardiology", school: "Harvard Medical School", year: "2010" },
            { degree: "MBBS", school: "Johns Hopkins University", year: "2005" }
        ],
        fee: 150,
        address: "123 Medical Center Dr, New York, NY 10001"
    }

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
    ]

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            {/* Profile Header */}
            <Card className="border-none shadow-md overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <CardContent className="px-8 pb-8">
                    <div className="relative flex flex-col md:flex-row items-start md:items-end -mt-12 mb-6 gap-6">
                        <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                            <AvatarImage src={doctor.image} />
                            <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 pt-2 md:pt-0">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                        {doctor.name}
                                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                                            Verified
                                        </Badge>
                                    </h1>
                                    <p className="text-primary font-medium">{doctor.specialty}</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-text-secondary">
                                        <span className="flex items-center gap-1">
                                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                            {doctor.rating} ({doctor.reviews} reviews)
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Award className="h-4 w-4" />
                                            {doctor.experience} Years Exp.
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            New York, NY
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <p className="text-sm text-text-secondary">Consultation Fee</p>
                                    <p className="text-2xl font-bold text-primary">${doctor.fee}</p>
                                    <div className="flex gap-2">
                                        <Button variant="outline">Message</Button>
                                        <Button>Book Appointment</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Tabs defaultValue="about" className="w-full">
                        <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0 h-auto gap-6">
                            <TabsTrigger
                                value="about"
                                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-0 py-2"
                            >
                                About
                            </TabsTrigger>
                            <TabsTrigger
                                value="slots"
                                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-0 py-2"
                            >
                                Available Slots
                            </TabsTrigger>
                            <TabsTrigger
                                value="reviews"
                                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary px-0 py-2"
                            >
                                Reviews
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="about" className="mt-6 space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Biography</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {doctor.about}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Education</h3>
                                    <ul className="space-y-4">
                                        {doctor.education.map((edu, idx) => (
                                            <li key={idx} className="flex gap-4">
                                                <div className="mt-1 bg-blue-50 p-2 rounded-full h-8 w-8 flex items-center justify-center">
                                                    <Award className="h-4 w-4 text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{edu.degree}</p>
                                                    <p className="text-sm text-text-secondary">{edu.school}</p>
                                                    <p className="text-xs text-text-tertiary">{edu.year}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Languages Spoken</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {doctor.languages.map(lang => (
                                            <Badge key={lang} variant="outline" className="px-3 py-1 flex items-center gap-2">
                                                <Languages className="h-3 w-3" /> {lang}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="slots" className="mt-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="md:col-span-1 border rounded-lg p-4">
                                    <div className="text-center font-medium mb-4">Select Date</div>
                                    {/* Placeholder for Calendar */}
                                    <div className="bg-gray-50 h-64 rounded flex items-center justify-center text-text-tertiary">
                                        Calendar Component Here
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <h3 className="font-semibold mb-4">Available Time Slots</h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                        {timeSlots.map((slot) => (
                                            <Button
                                                key={slot}
                                                variant={selectedSlot === slot ? "default" : "outline"}
                                                onClick={() => setSelectedSlot(slot)}
                                                className="w-full"
                                            >
                                                {slot}
                                            </Button>
                                        ))}
                                    </div>
                                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-blue-900">Selected Slot</p>
                                            <p className="text-blue-700">{selectedDate?.toDateString()} - {selectedSlot || "Select a time"}</p>
                                        </div>
                                        <Button disabled={!selectedSlot}>Confirm Booking</Button>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}

export default DoctorProfile
