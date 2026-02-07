import { useState } from "react"
import { Search, Filter, Eye, MessageSquare, Calendar } from "lucide-react"

import { Button } from "@/components/shared/Button"
import { Input } from "@/components/shared/Input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar"
import { Badge } from "@/components/shared/Badge"
import { Card, CardContent } from "@/components/shared/Card"

const patients = [
    {
        id: 1,
        name: "Alice Cooper",
        age: 45,
        gender: "Female",
        lastVisit: "Oct 24, 2023",
        condition: "Hypertension",
        status: "Active",
        image: "https://i.pravatar.cc/150?u=20"
    },
    {
        id: 2,
        name: "Robert Fox",
        age: 32,
        gender: "Male",
        lastVisit: "Oct 22, 2023",
        condition: "Flu",
        status: "Recovered",
        image: "https://i.pravatar.cc/150?u=11"
    },
    {
        id: 3,
        name: "Cody Fisher",
        age: 28,
        gender: "Male",
        lastVisit: "Oct 15, 2023",
        condition: "Checkup",
        status: "Active",
        image: "https://i.pravatar.cc/150?u=33"
    },
    {
        id: 4,
        name: "Esther Howard",
        age: 56,
        gender: "Female",
        lastVisit: "Oct 10, 2023",
        condition: "Diabetes",
        status: "Active",
        image: "https://i.pravatar.cc/150?u=44"
    },
    {
        id: 5,
        name: "Jenny Wilson",
        age: 24,
        gender: "Female",
        lastVisit: "Sep 28, 2023",
        condition: "Migraine",
        status: "Active",
        image: "https://i.pravatar.cc/150?u=55"
    }
]

const MyPatients = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h1 className="text-2xl font-bold text-primary-dark">My Patients</h1>
                <div className="flex w-full md:w-auto gap-2">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-tertiary" />
                        <Input
                            placeholder="Search by name, condition..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="shrink-0">
                        <Filter className="h-4 w-4 mr-2" /> Filter
                    </Button>
                </div>
            </div>

            <Card className="border-none shadow-sm">
                <CardContent className="p-0">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 font-medium text-text-secondary">Patient Name</th>
                                    <th className="px-6 py-4 font-medium text-text-secondary">Age/Gender</th>
                                    <th className="px-6 py-4 font-medium text-text-secondary">Last Visit</th>
                                    <th className="px-6 py-4 font-medium text-text-secondary">Condition</th>
                                    <th className="px-6 py-4 font-medium text-text-secondary">Status</th>
                                    <th className="px-6 py-4 font-medium text-text-secondary text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredPatients.map((patient) => (
                                    <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar>
                                                    <AvatarImage src={patient.image} />
                                                    <AvatarFallback>PT</AvatarFallback>
                                                </Avatar>
                                                <div className="font-medium text-gray-900">{patient.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-text-secondary">
                                            {patient.age} / {patient.gender}
                                        </td>
                                        <td className="px-6 py-4 text-text-secondary">
                                            {patient.lastVisit}
                                        </td>
                                        <td className="px-6 py-4 text-gray-900">
                                            {patient.condition}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className={patient.status === "Active" ? "bg-green-50 text-green-700 border-green-200" : "bg-gray-100 text-gray-700"}>
                                                {patient.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button size="sm" variant="ghost" title="View Profile">
                                                    <Eye className="h-4 w-4 text-primary" />
                                                </Button>
                                                <Button size="sm" variant="ghost" title="Message">
                                                    <MessageSquare className="h-4 w-4 text-text-secondary" />
                                                </Button>
                                                <Button size="sm" variant="ghost" title="Schedule Appointment">
                                                    <Calendar className="h-4 w-4 text-text-secondary" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {filteredPatients.length === 0 && (
                        <div className="p-8 text-center text-text-secondary">
                            No patients found matching your search.
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default MyPatients
