'use client';

import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Sign in attempt:', { email, password });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NFIS</span>
            </div>
            <div className="text-left hidden sm:block">
              <p className="font-bold text-gray-900 text-sm">NFIS</p>
              <p className="text-xs text-gray-600">National Franchise India Summit</p>
            </div>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your NFIS account to explore opportunities</p>
        </div>

        {/* Sign In Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900">
                  Password
                </label>
                <Link href="/forgot-password" className="text-sm text-red-600 hover:text-red-700 font-medium">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all text-gray-900 placeholder-gray-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-red-600 cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700 cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-6"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-600">Or continue as</span>
          </div>
        </div>

        {/* Social Sign In Options */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button type="button" className="py-2.5 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-gray-900 font-medium text-sm">
            Google
          </button>
          <button type="button" className="py-2.5 border-2 border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all text-gray-900 font-medium text-sm">
            LinkedIn
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <Link href="/register" className="text-red-600 hover:text-red-700 font-semibold">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center mb-4">Join 50,000+ entrepreneurs and franchisors</p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-xs text-gray-600">Secure & Private</span>
            </div>
            <div className="text-gray-300">•</div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-xs text-gray-600">Verified Users</span>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center text-xs text-gray-500 space-y-1">
          <p>
            <Link href="/privacy" className="hover:text-gray-700 underline">
              Privacy Policy
            </Link>
            {' • '}
            <Link href="/terms" className="hover:text-gray-700 underline">
              Terms of Service
            </Link>
          </p>
          <p>Need help? Contact support@nfis.com</p>
        </div>
      </div>
    </div>
  );
}
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NFIS</span>
            </div>
            <div className="text-left hidden sm:block">
              <p className="font-bold text-gray-900 text-sm">NFIS</p>
              <p className="text-xs text-gray-600">National Franchise India Summit</p>
            </div>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your NFIS account to explore opportunities</p>
        </div>

        {/* Sign In Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
          <form className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900">
                  Password
                </label>
                <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-900 placeholder-gray-500"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700 cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-6"
            >
              <span>Sign In</span>
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-600">Or continue as</span>
          </div>
        </div>

        {/* Social Sign In Options */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="py-2.5 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-gray-900 font-medium text-sm">
            Google
          </button>
          <button className="py-2.5 border-2 border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all text-gray-900 font-medium text-sm">
            LinkedIn
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center mb-4">Join 50,000+ entrepreneurs and franchisors</p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-xs text-gray-600">Secure & Private</span>
            </div>
            <div className="text-gray-300">•</div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-xs text-gray-600">Verified Users</span>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center text-xs text-gray-500 space-y-1">
          <p>
            <Link href="/privacy" className="hover:text-gray-700 underline">
              Privacy Policy
            </Link>
            {' • '}
            <Link href="/terms" className="hover:text-gray-700 underline">
              Terms of Service
            </Link>
          </p>
          <p>Need help? Contact support@nfis.com</p>
        </div>
      </div>
    </div>
  );
}
