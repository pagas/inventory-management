"use client"
import { Bell, Menu, Settings, Sun } from "lucide-react"
import Link from "next/link"

const Sidebar = () => {
    return (
        <div>
            {/* TOP LOGO */}
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8`}>
                <div>Logo</div>
                <h1 className="font-extralight text-2xl">EDSTOCK</h1>
                <button onClick={() => { }}
                    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
                    <Menu className="w-4 h-4" />
                </button>

            </div>
            {/* LINKS */}
            <div className="flex-grow mt-8">

            </div>

            {/* FOOTER */}
            <div>
                <p className="text-center text-xs text-gray-500">&copy; 2024 EDSTOCK</p>
            </div>
        </div>
    )
}

export default Sidebar