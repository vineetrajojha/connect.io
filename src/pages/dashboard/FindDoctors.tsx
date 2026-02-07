import { useState } from "react"
import { Search, MapPin, Filter, Star } from "lucide-react"
import { Button } from "@/components/shared/Button"
import { Input } from "@/components/shared/Input"
import { Card, CardContent, CardFooter } from "@/components/shared/Card"
import { Badge } from "@/components/shared/Badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar"

const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Wilson",
        specialty: "Cardiologist",
        image: "https://i.pravatar.cc/150?u=1",
        rating: 4.9,
        reviews: 124,
        experience: 12,
        location: "New York, NY",
        fee: 150,
        available: "Today",
        tags: ["Heart", "Surgery"]
    },
    {
        id: 2,
        name: "Dr. James Carter",
        specialty: "Neurologist",
        image: "https://i.pravatar.cc/150?u=10",
        rating: 4.8,
        reviews: 89,
        experience: 8,
        location: "Brooklyn, NY",
        fee: 180,
        available: "Tomorrow",
        tags: ["Brain", "Nerves"]
    },
    {
        id: 3,
        name: "Dr. Emily Chen",
        specialty: "Dermatologist",
        image: "https://i.pravatar.cc/150?u=5",
        rating: 4.9,
        reviews: 210,
        experience: 15,
        location: "Manhattan, NY",
        fee: 120,
        available: "Available Now",
        tags: ["Skin", "Cosmetic"]
    },
    {
        id: 4,
        name: "Dr. Michael Brown",
        specialty: "Pediatrician",
        image: "https://i.pravatar.cc/150?u=8",
        rating: 4.7,
        reviews: 95,
        experience: 10,
        location: "Queens, NY",
        fee: 100,
        available: "Today",
        tags: ["Children", "Infants"]
    },
    {
        id: 5,
        name: "Dr. Lisa White",
        specialty: "Psychiatrist",
        image: "https://i.pravatar.cc/150?u=12",
        rating: 4.9,
        reviews: 150,
        experience: 18,
        location: "Staten Island, NY",
        fee: 200,
        available: "Next Week",
        tags: ["Mental Health", "Therapy"]
    },
    {
        id: 6,
        name: "Dr. David Lee",
        specialty: "Orthopedist",
        image: "https://i.pravatar.cc/150?u=15",
        rating: 4.8,
        reviews: 110,
        experience: 14,
        location: "Bronx, NY",
        fee: 160,
        available: "Tomorrow",
        tags: ["Bones", "Joints"]
    }
]

const FindDoctors = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h1 className="text-2xl font-bold text-primary-dark">Find a Doctor</h1>
                <div className="flex w-full md:w-auto gap-2">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-tertiary" />
                        <Input
                            placeholder="Search by name, specialty, or condition"
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="shrink-0">
                        <Filter className="h-4 w-4 mr-2" /> Filters
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                    <Card key={doctor.id} className="group hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg border-none shadow-sm">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="relative">
                                    <Avatar className="h-20 w-20 rounded-xl">
                                        <AvatarImage src={doctor.image} />
                                        <AvatarFallback>DR</AvatarFallback>
                                    </Avatar>
                                    <span className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="flex items-center gap-1 text-yellow-500 font-bold">
                                        <Star className="h-4 w-4 fill-current" />
                                        {doctor.rating}
                                    </div>
                                    <span className="text-xs text-text-secondary">({doctor.reviews} reviews)</span>
                                </div>
                            </div>

                            <div className="space-y-1 mb-4">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{doctor.name}</h3>
                                <p className="text-primary font-medium">{doctor.specialty}</p>
                                <div className="flex items-center gap-1 text-sm text-text-secondary">
                                    <MapPin className="h-3 w-3" /> {doctor.location}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {doctor.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t">
                                <div>
                                    <p className="text-xs text-text-secondary">Consultation Fee</p>
                                    <p className="font-bold text-gray-900">${doctor.fee}</p>
                                </div>
                                <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                                    {doctor.available}
                                </Badge>
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <Button className="w-full opacity-0 group-hover:opacity-100 transition-opacity">Book Appointment</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default FindDoctors
