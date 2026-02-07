import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Link } from "react-router-dom"
import { Activity, Stethoscope, User } from "lucide-react"

import { Button } from "@/components/shared/Button"
import { Input } from "@/components/shared/Input"
import { Label } from "@/components/shared/Label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shared/Card"
import { Tabs, TabsList, TabsTrigger } from "@/components/shared/Tabs"

// Schema for Patient
const patientSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
})

// Schema for Doctor
const doctorSchema = patientSchema.extend({
    specialization: z.string().min(2, "Specialization is required"),
    licenseNumber: z.string().min(5, "License number is required"),
})

const SignUpForm = () => {
    const [role, setRole] = useState<"patient" | "doctor">("patient")
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<any>({
        resolver: zodResolver(role === "patient" ? patientSchema : doctorSchema),
    })

    // Reset form when switching roles to clear errors/values
    const handleRoleChange = (value: string) => {
        setRole(value as "patient" | "doctor")
        reset()
    }

    const onSubmit = async (data: any) => {
        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log("Signup data:", { ...data, role })
        setIsLoading(false)
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-6 py-8">
            <Link to="/" className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg">
                    <Activity className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-primary-dark">MedConnect</span>
            </Link>

            <Card className="w-[450px] shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Create an account</CardTitle>
                    <CardDescription className="text-center">
                        Join thousands of users on MedConnect
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="patient" className="w-full" onValueChange={handleRoleChange}>
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="patient" className="flex items-center gap-2">
                                <User className="h-4 w-4" /> Patient
                            </TabsTrigger>
                            <TabsTrigger value="doctor" className="flex items-center gap-2">
                                <Stethoscope className="h-4 w-4" /> Doctor
                            </TabsTrigger>
                        </TabsList>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input
                                    id="fullName"
                                    placeholder="John Doe"
                                    {...register("fullName")}
                                    className={errors.fullName ? "border-red-500" : ""}
                                />
                                {errors.fullName && (
                                    <p className="text-sm text-red-500">{errors.fullName.message as string}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder={role === "patient" ? "john@example.com" : "dr.smith@hospital.com"}
                                    {...register("email")}
                                    className={errors.email ? "border-red-500" : ""}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email.message as string}</p>
                                )}
                            </div>

                            {role === "doctor" && (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="specialization">Specialization</Label>
                                        <Input
                                            id="specialization"
                                            placeholder="e.g. Cardiologist"
                                            {...register("specialization")}
                                            className={errors.specialization ? "border-red-500" : ""}
                                        />
                                        {errors.specialization && (
                                            <p className="text-sm text-red-500">{errors.specialization.message as string}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="licenseNumber">Medical License Number</Label>
                                        <Input
                                            id="licenseNumber"
                                            placeholder="e.g. MD123456"
                                            {...register("licenseNumber")}
                                            className={errors.licenseNumber ? "border-red-500" : ""}
                                        />
                                        {errors.licenseNumber && (
                                            <p className="text-sm text-red-500">{errors.licenseNumber.message as string}</p>
                                        )}
                                    </div>
                                </>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register("password")}
                                    className={errors.password ? "border-red-500" : ""}
                                />
                                {errors.password && (
                                    <p className="text-sm text-red-500">{errors.password.message as string}</p>
                                )}
                            </div>

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Creating account..." : "Sign Up"}
                            </Button>
                        </form>
                    </Tabs>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2 text-center text-sm text-text-secondary">
                    <div>
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary font-medium hover:underline">
                            Log in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignUpForm
