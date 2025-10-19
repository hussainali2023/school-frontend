import { EyeIcon, EyeSlashIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Login1() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        {/* Blue outer frame */}
        <div className="overflow-hidden rounded-lg bg-blue-600 shadow-xl">
          {/* Header with blue background */}
          <div className="flex items-center justify-center bg-blue-700 p-6">
            <HomeIcon className="mr-3 h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">School Management System</h1>
          </div>

          {/* White login module */}
          <div className="bg-white p-8">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email or Username input */}
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email or Username
                </label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email or username"
                  required
                />
              </div>

              {/* Password input */}
              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot password link */}
              <div className="text-right">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </a>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white transition duration-200 hover:bg-green-700"
              >
                Login
              </button>
            </form>

            {/* Register link */}
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
