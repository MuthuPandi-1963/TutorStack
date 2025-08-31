// "use client"

// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"
// import { ReactNode } from "react"
// import Link from "next/link"
// import { Card, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { FaGoogle } from "react-icons/fa"
// import { BsGithub } from "react-icons/bs"
// import { BiLeftArrow } from "react-icons/bi"


// export default function AuthLayout({ children }: { children: ReactNode }) {
//   return (
//     <>
//     <Link href={"/"}>
//       <Button className="w-fit m-2">
//         <BiLeftArrow/> Back
//       </Button>
//     </Link>
//     <div className="h-full m-auto grid">
//       <Card className="w-full max-w-sm m-auto border-none ">
//         <Tabs defaultValue="account">
//           <TabsList className="m-auto ">
//             <TabsTrigger value="account" className="" asChild>
//               <Link href="/login">Login</Link>
//             </TabsTrigger>
//             <TabsTrigger value="signup" asChild>
//               <Link href="/signup">Signup</Link>
//             </TabsTrigger>
//           </TabsList>
//           {children}
//         </Tabs>
       

//         <CardFooter className="flex-col gap-y-3">
//           or
//           <Button variant="outline" className="w-full">
//             <FaGoogle /> Continue With Google
//           </Button>
//           <Button variant="outline" className="w-full bg-accent-foreground text-white">
//             <BsGithub /> Continue With GitHub
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//     </>
//   )
// }


import { ReactNode } from "react"

// import { LoginForm } from "@/components/login-form"

export default function Layout({children}:{children :ReactNode}) {
  return (
    <div className="relative overflow-hidden flex h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-purple-900/30 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full"></div>
              </div>
      <div className="flex w-full max-w-sm flex-col">
        <a href="#" className="mb-4 flex items-center gap-2 self-center font-medium text-xl">
          <div className=" flex  items-center justify-center rounded-md ">
            <img src="/logo.png" alt="" className="w-10 h-10 object-cover" />
          </div>
          Tutor Stack
        </a>
        {children}
      </div>
    </div>
  )
}
