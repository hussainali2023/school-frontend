import { Bell, Filter, Menu, Moon, Plus, Search, Settings, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Header({ onMenuToggle, isSidebarOpen }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New student registered", time: "5 min ago", unread: true },
    { id: 2, title: "Exam schedule updated", time: "1 hour ago", unread: true },
    { id: 3, title: "Fee payment reminder", time: "2 hours ago", unread: false },
    { id: 4, title: "Staff meeting tomorrow", time: "1 day ago", unread: false },
  ]);

  const searchRef = useRef(null);
  const notificationRef = useRef(null);
  const userMenuRef = useRef(null);

  // Initialize dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode - SIMPLIFIED for Tailwind v4
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setShowSearch(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, unread: false } : notification
    ));
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, unread: false })));
    setShowNotifications(false);
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between space-x-4">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white">Dashboard</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">Welcome Back, Hussain Ali</p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative" ref={searchRef}>
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search students, teachers, classes..."
              className="w-full pl-10 pr-12 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              onFocus={() => setShowSearch(true)}
            />

            {/* Clear search button */}
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <Filter className="w-4 h-4" />
            </button>
          </div>

          {/* Search results dropdown */}
          {showSearch && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
              <div className="p-4">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  Search results for "{searchQuery}"
                </div>
                <button className="w-full text-left p-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="font-medium text-slate-800 dark:text-white">Students matching "{searchQuery}"</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">View student records</div>
                </button>
                <button className="w-full text-left p-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  <div className="font-medium text-slate-800 dark:text-white">Teachers matching "{searchQuery}"</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">View teacher profiles</div>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-3">
          {/* Quick action */}
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 active:scale-95">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">New Student</span>
          </button>

          {/* Theme toggle - FIXED for Tailwind v4 */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notification */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-slate-800 dark:text-white">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-primary-500 cursor-pointer hover:text-primary-600"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-slate-100 dark:border-slate-700 cursor-pointer transition-colors ${
                          notification.unread ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-800 dark:text-white">
                              {notification.title}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              {notification.time}
                            </p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-primary-500 rounded-full ml-2 mt-1"></div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-slate-500 dark:text-slate-400">
                      No notifications
                    </div>
                  )}
                </div>
                <div className="p-3 border-t border-slate-200 dark:border-slate-700">
                  <button className="w-full text-center text-sm text-primary-500 hover:text-primary-600 py-2">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Settings className="w-5 h-5" />
          </button>

          {/* User profile */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-10 h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold cursor-pointer hover:shadow-xl transition-all"
            >
              HA
            </button>

            {/* User menu dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                  <p className="font-medium text-slate-800 dark:text-white">Hussain Ali</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">admin@school.edu</p>
                </div>
                <div className="p-2">
                  <button className="w-full text-left px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    Account Settings
                  </button>
                </div>
                <div className="p-2 border-t border-slate-200 dark:border-slate-700">
                  <button className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
