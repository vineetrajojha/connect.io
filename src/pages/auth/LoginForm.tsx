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

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginFormValues = z.infer<typeof loginSchema>

const LoginForm = () => {
    const [role, setRole] = useState<"patient" | "doctor">("patient")
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log("Login data:", { ...data, role })
        setIsLoading(false)
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <Link to="/" className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-lg">
                    <Activity className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-primary-dark">MedConnect</span>
            </Link>

            <Card className="w-[400px] shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
                    <CardDescription className="text-center">
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="patient" className="w-full" onValueChange={(value) => setRole(value as "patient" | "doctor")}>
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
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder={role === "patient" ? "john@example.com" : "dr.smith@hospital.com"}
                                    {...register("email")}
                                    className={errors.email ? "border-red-500" : ""}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register("password")}
                                    className={errors.password ? "border-red-500" : ""}
                                />
                                {errors.password && (
                                    <p className="text-sm text-red-500">{errors.password.message}</p>
                                )}
                            </div>

                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Signing in..." : "Sign In"}
                            </Button>
                        </form>
                    </Tabs>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2 text-center text-sm text-text-secondary">
                    <div>
                        Don&apos;t have an account?{" "}
                        <Link to="/signup" className="text-primary font-medium hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default LoginForm
