"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { BsGithub, BsGoogle } from "react-icons/bs"

export default function LoginForm() {
  const [showPassword,setShowPassword] = useState<boolean>(false)
  return (
    <div className={"flex flex-col gap-6"} >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Github or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button  className="w-full">
                  <BsGithub/>
                  Login with Github
                </Button>
                <Button variant="outline" className="w-full">
                  <BsGoogle/>
                  Login with Google
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="xyz@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline hover:text-purple-400"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter a Password"  required />
                  <Button type="button" onClick={()=>setShowPassword(prev=>!prev)}>
                    {showPassword ? <EyeOff/> : <EyeIcon/>}
                  </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-purple-400 hover:bg-purple-600"  >
                  Login
                </Button>
              </div>
              <div className="text-center text-sm ">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline underline-offset-4 hover:text-purple-400">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
