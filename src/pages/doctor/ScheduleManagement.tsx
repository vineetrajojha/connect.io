import { useState } from "react"
import { Calendar as CalendarIcon, Clock, Save } from "lucide-react"

import { Button } from "@/components/shared/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shared/Card"
import { Label } from "@/components/shared/Label"

const daysOfWeek = [
    { id: "mon", label: "Monday" },
    { id: "tue", label: "Tuesday" },
    { id: "wed", label: "Wednesday" },
    { id: "thu", label: "Thursday" },
    { id: "fri", label: "Friday" },
    { id: "sat", label: "Saturday" },
    { id: "sun", label: "Sunday" },
]

const ScheduleManagement = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [availability, setAvailability] = useState<any>({
        mon: true,
        tue: true,
        wed: true,
        thu: true,
        fri: true,
        sat: false,
        sun: false
    })

    const toggleDay = (dayId: string) => {
        setAvailability((prev: any) => ({ ...prev, [dayId]: !prev[dayId] }))
    }

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary-dark">Schedule Management</h1>
                    <p className="text-text-secondary">Manage your weekly availability and viewing hours.</p>
                </div>
                <Button>
                    <Save className="h-4 w-4 mr-2" /> Save Changes
                </Button>
            </div>

            <Card className="border-none shadow-sm">
                <CardHeader>
                    <CardTitle>Weekly Schedule</CardTitle>
                    <CardDescription>Set your recurring weekly availability.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {daysOfWeek.map((day) => (
                        <div key={day.id} className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b last:border-0 gap-4">
                            <div className="flex items-center gap-4 w-40">
                                <input
                                    type="checkbox"
                                    id={`enable-${day.id}`}
                                    className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                                    checked={availability[day.id]}
                                    onChange={() => toggleDay(day.id)}
                                />
                                <Label htmlFor={`enable-${day.id}`} className="font-medium text-lg cursor-pointer">
                                    {day.label}
                                </Label>
                            </div>

                            <div className={`flex-1 flex flex-col md:flex-row items-center gap-4 transition-opacity ${availability[day.id] ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-text-tertiary" />
                                    <div className="flex items-center gap-2">
                                        <select className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                            <option>09:00 AM</option>
                                            <option>10:00 AM</option>
                                        </select>
                                        <span>-</span>
                                        <select className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                            <option>01:00 PM</option>
                                            <option>02:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <span className="text-text-tertiary text-sm hidden md:block">and</span>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <select className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                            <option>02:00 PM</option>
                                            <option>03:00 PM</option>
                                        </select>
                                        <span>-</span>
                                        <select className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                            <option>06:00 PM</option>
                                            <option>07:00 PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="w-20 text-right">
                                {availability[day.id] ? (
                                    <span className="text-sm text-green-600 font-medium">Available</span>
                                ) : (
                                    <span className="text-sm text-text-tertiary">Unavailable</span>
                                )}
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm">
                    <CardHeader>
                        <CardTitle>Consultation Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Slot Duration</Label>
                            <select className="w-full h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                <option>15 minutes</option>
                                <option>30 minutes</option>
                                <option>45 minutes</option>
                                <option>60 minutes</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label>Buffer Time (between slots)</Label>
                            <select className="w-full h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                <option>0 minutes</option>
                                <option>5 minutes</option>
                                <option>10 minutes</option>
                                <option>15 minutes</option>
                            </select>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                    <CardHeader>
                        <CardTitle>Time Off / Leave</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg bg-gray-50 text-center">
                            <CalendarIcon className="h-10 w-10 text-gray-400 mb-2" />
                            <p className="text-sm font-medium text-gray-900">No time off scheduled</p>
                            <p className="text-xs text-text-secondary mb-4">Block dates when you are unavailable</p>
                            <Button variant="outline" size="sm">Add Time Off</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default ScheduleManagement
