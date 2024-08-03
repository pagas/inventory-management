"use client"
import { useAppDispatch, useAppSelector } from "@/app/redux"
import { globalSlice } from "@/state"
import { Bell, Menu, } from "lucide-react"
import Link from "next/link"

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    const toggleSidebar = () => {
        dispatch(globalSlice.actions.toggleSidebar());
    }

    const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
        } bg-white 
        transition-all duration-300 overflow-hidden shadow-md h-full z-40`;

    return (
        <div className={sidebarClassNames}>
            {/* TOP LOGO */}
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 
                ${isSidebarCollapsed ? "px-5" : "px-8"}`}>

                <div>Logo</div>
                <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>EDSTOCK</h1>
                <button onClick={toggleSidebar}
                    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100">
                    <Menu className="w-4 h-4" />
                </button>

            </div>
            {/* LINKS */}
            <div className="flex-grow mt-8">

            </div>

            {/* FOOTER */}
            <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
                <p className="text-center text-xs text-gray-500">&copy; 2024 EDSTOCK</p>
            </div>
        </div>
    )
}

export default Sidebar