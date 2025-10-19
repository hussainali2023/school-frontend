import { useState } from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className='flex h-screen overflow-hidden'>
        {/* Sidebar with conditional rendering */}
        {isSidebarOpen && (
          <Sidebar isSidebarOpen={isSidebarOpen} />
        )}

        {/* Main content area */}
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header
            onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            isSidebarOpen={isSidebarOpen}
          />

          {/* Main content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sample dashboard cards */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Total Students</h3>
                  <p className="text-3xl font-bold text-primary-600">1,247</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">+12% from last month</p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Total Teachers</h3>
                  <p className="text-3xl font-bold text-primary-600">48</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">+2 new this month</p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Classes</h3>
                  <p className="text-3xl font-bold text-primary-600">24</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Across all grades</p>
                </div>
              </div>

              {/* Welcome message */}
              <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Welcome to Nexus School Management</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Manage your school efficiently with our comprehensive admin panel. Track students, teachers, classes, and exams all in one place.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
