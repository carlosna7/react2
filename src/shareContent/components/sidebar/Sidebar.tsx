import React, { ReactNode } from "react"

interface SidebarProps {
  children: ReactNode
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="h-sreen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">

          <img src="https://img.logoipsum.com/243.svg" className="w-32" alt="" />
          <button className="p-2 rounded-lg bg-gray-50">

          </button>

        </div>

        <ul className="flex-1 px-3">
          {children}
        </ul>

        <div className="border-t flex p-3">
          <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" className="w-10 h-10 rounded-md" />
        </div>  

      </nav>
    </aside>
  )
}

export default Sidebar