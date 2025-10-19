import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Add your login logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="rounded-t-xl bg-gradient-to-l from-primary-400 to-primary-600 p-6 text-white shadow-lg">
          <div className="flex items-center space-x-3">
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5V2z" fill="#FFD700" />
              <path d="M2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7" fill="#4CAF50" />
              <path d="M8 9h8v6H8z" fill="#FFFFFF" />
              <path d="M12 15l-4 4h8l-4 4" fill="#FFC107" />
            </svg>
            <div>
              <h1 className="text-xl font-bold">School Management System</h1>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-b-xl bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="identifier"
                placeholder="Email or Username"
                value={formData.identifier}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 012.557-5.372A9.97 9.97 0 0112 5c3.104 0 5.808 1.605 7.912 4.192a10.05 10.05 0 011.523 10.625z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="mb-4 text-right">
              <Link to={'/forgot'} className="text-sm text-gray-500 hover:text-blue-600">
                Forgot password?{' '}
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-500 px-4 py-3 font-medium text-white transition duration-200 hover:bg-green-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login2;
