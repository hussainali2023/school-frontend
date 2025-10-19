import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Forgot() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-md">
        {/* Card container */}
        <div className="overflow-hidden rounded-lg bg-white shadow-xl">
          {/* Header with school icon and title */}
          <div className="flex flex-col items-center bg-gradient-to-b from-primary-400 to-primary-600 p-6 shadow-xl">
            <AcademicCapIcon className="mb-3 h-12 w-12 text-white" />
            <h1 className="text-2xl font-bold text-white">School Management System</h1>
          </div>

          {/* Forgot password form */}
          <div className="p-8">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
              Forgot password
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email input */}
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-secondary-500 focus:outline-none"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Reset password button */}
              <button
                type="submit"
                className="w-full rounded-md bg-secondary-600 px-4 py-2 font-medium text-white transition duration-200 hover:bg-secondary-700"
              >
                Reset password
              </button>
            </form>

            {/* Back to login link */}
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">Remember your password? </span>
              <Link to="/" className="text-sm font-medium text-primary-600 hover:text-primary-800">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
