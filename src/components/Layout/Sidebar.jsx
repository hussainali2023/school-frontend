import { BarChart3, BookOpen, ChevronDown, ChevronRight, ClipboardList, LayoutDashboard, UserRoundPen, Users, Zap } from "lucide-react"
import { useState } from "react"

function Sidebar({ isSidebarOpen }) {
  const [openSubmenus, setOpenSubmenus] = useState({})
  const [activeItem, setActiveItem] = useState("dashboard")

  const menuItems = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      active: true,
    },
    {
      id: "analytics",
      icon: BarChart3,
      label: "Analytics",
      submenu: [
        { id: "reports", label: "Reports" },
        { id: "statistics", label: "Statistics" }
      ]
    },
    {
      id: "students",
      icon: Users,
      label: "Students",
      submenu: [
        { id: "all-students", label: "All Students" },
        { id: "add-student", label: "Add Student" },
        { id: "attendance", label: "Attendance" },
        { id: "performance", label: "Performance" }
      ]
    },
    {
      id: "teachers",
      icon: UserRoundPen,
      label: "Teachers",
      submenu: [
        { id: "all-teachers", label: "All Teachers" },
        { id: "add-teacher", label: "Add Teacher" },
        { id: "schedule", label: "Schedule" }
      ]
    },
    {
      id: "classes",
      icon: BookOpen,
      label: "Classes",
      submenu: [
        { id: "all-classes", label: "All Classes" },
        { id: "timetable", label: "Timetable" },
        { id: "subjects", label: "Subjects" }
      ]
    },
    {
      id: "exams",
      icon: ClipboardList,
      label: "Exams",
      submenu: [
        { id: "schedule", label: "Exam Schedule" },
        { id: "results", label: "Results" },
        { id: "grades", label: "Grades" }
      ]
    }
  ]

  const toggleSubmenu = (itemId) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  const handleItemClick = (itemId, hasSubmenu) => {
    if (hasSubmenu) {
      toggleSubmenu(itemId)
    } else {
      setActiveItem(itemId)
      // Here you can add navigation logic
      console.log(`Navigating to: ${itemId}`)
    }
  }

  return (
    <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10 h-screen overflow-hidden`}>
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">Nexus</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const hasSubmenu = item.submenu && item.submenu.length > 0
          const isSubmenuOpen = openSubmenus[item.id]
          const isActive = activeItem === item.id

          return (
            <div key={item.id} className="space-y-1">
              {/* Main Menu Item */}
              <button
                onClick={() => handleItemClick(item.id, hasSubmenu)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Submenu Arrow */}
                  {hasSubmenu && (
                    isSubmenuOpen ?
                    <ChevronDown className="w-4 h-4" /> :
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Submenu Items */}
              {hasSubmenu && isSubmenuOpen && (
                <div className="ml-4 space-y-1">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => {
                        setActiveItem(subItem.id)
                        console.log(`Navigating to: ${subItem.id}`)
                      }}
                      className={`w-full text-left p-2 pl-8 rounded-lg transition-all duration-200 ${
                        activeItem === subItem.id
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            HA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">Hussain Ali</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
