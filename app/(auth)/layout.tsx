"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import './styles.module.css'


const navLinks = [
    { name: "register", href: "/register" },
    { name: "login", href: "/login" },
    { name: "forget-password", href: "/forget-password" }
]

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <div>
            {navLinks.map((link) => {
                const isActive =
                    pathname === link.href ||
                    (pathname.startsWith(link.href) && link.href !== "/")

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}