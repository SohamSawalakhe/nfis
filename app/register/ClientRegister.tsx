'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Building2, DollarSign, Phone, MapPin, Check, Search, ChevronDown, X } from 'lucide-react';

export const PRODUCT_CATEGORIES_BY_INDUSTRY: Record<string, string[]> = {
  'Food & QSR': ['Fast Food', 'Fine Dining', 'Cafe/Bakery', 'Cloud Kitchen', 'Ice Cream & Desserts', 'Beverages', 'Other Food'],
  'Health, Fitness & Wellness': ['Gym/Health Club', 'Yoga/Pilates', 'Wellness Center', 'Sports Coaching', 'Skin Care Clinic', 'Other Fitness'],
  'Education & Training': ['Pre-school/K-12', 'Tutoring/Coaching', 'Vocational Training', 'Language School', 'Other Education'],
  'Retail & Lifestyle': ['Apparel & Fashion', 'Supermarket/Grocery', 'Electronics', 'Home & Lifestyle', 'Cosmetics Store', 'Other Retail'],
  'Hospitality & Stay': ['Hotels/B&B', 'Resorts', 'Travel Agency', 'Other Hospitality'],
  'Kids & Entertainment': ['Play Centers', 'Themed Parks', 'Gaming Zones', 'Other Entertainment'],
  'Automobile & EV': ['EV Showrooms', 'Service Centers', 'Automobile Accessories', 'Charging Stations'],
  'Business Services': ['Cleaning/Maintenance', 'Consulting/B2B', 'Logistics/Courier', 'Healthcare Services', 'Other Services'],
  'Home Services & Real Estate Allied': ['Interior Design', 'Pest Control', 'Facilities Management', 'Real Estate Brokerage', 'Other Home Services']
};

export default function RegisterPage() {
  const [userType, setUserType] = useState<'franchisee' | 'franchisor' | 'investor' | null>(null);

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-block transition-transform hover:scale-110 mb-8">
              <div className="relative w-24 h-24 bg-white rounded-full p-2 shadow-xl border border-blue-100/50 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/logo.png"
                    alt="NFIS Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Join the National Franchise Investment Summit
            </h1>
            <p className="text-xl text-gray-600 text-balance">
              Choose your role and start your franchise journey today
            </p>
          </div>

          {/* User Type Selection */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Franchisee Card */}
            <button
              onClick={() => setUserType('franchisee')}
              className="group bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-red-500 hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Franchisee</h3>
              <p className="text-gray-600 mb-4">
                I want to own and operate a franchise business
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-red-600" />
                  Find opportunities
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-red-600" />
                  Get support
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-red-600" />
                  Connect with partners
                </li>
              </ul>
            </button>

            {/* Franchisor Card */}
            <button
              onClick={() => setUserType('franchisor')}
              className="group bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <DollarSign size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Franchisor</h3>
              <p className="text-gray-600 mb-4">
                I want to expand my business through franchising
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-blue-600" />
                  Recruit franchisees
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-blue-600" />
                  Manage network
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-blue-600" />
                  Scale operations
                </li>
              </ul>
            </button>

            {/* Investor Card */}
            <button
              onClick={() => setUserType('investor')}
              className="group bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-green-600 hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                <DollarSign size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Investor</h3>
              <p className="text-gray-600 mb-4">
                I want to invest in franchise opportunities
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  Browse investments
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  Analyze returns
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  Network with partners
                </li>
              </ul>
            </button>
          </div>

          {/* Already registered */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-red-600 hover:text-red-700 font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (userType === 'franchisee') {
    return <FranchiseeRegistration />;
  }

  if (userType === 'franchisor') {
    return <FranchisorRegistration />;
  }

  return <InvestorRegistration />;
}

function FranchiseeRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investmentBudget: '',
    industry: '',
    category: '',
    experience: '',
    location: '',
    brands: [] as string[],
  });

  const [brandsList, setBrandsList] = useState<string[]>([]);
  const [isBrandsLoading, setIsBrandsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [brandSearch, setBrandSearch] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBrands = async () => {
      setIsBrandsLoading(true);
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
        const res = await fetch(`${API_URL}/api/exhibitor-registrations/`);
        if (res.ok) {
          const data = await res.json();
          const results = data.results || data;
          const names = Array.isArray(results)
            ? results.map((r: any) => r.company_name).filter(Boolean)
            : [];
          setBrandsList(Array.from(new Set(names)));
        }
      } catch (err) {
        console.error('Failed to fetch brands:', err);
      } finally {
        setIsBrandsLoading(false);
      }
    };
    fetchBrands();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.investmentBudget) newErrors.investmentBudget = 'Investment budget is required';
    if (!formData.industry) newErrors.industry = 'Preferred industry is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      console.log('Sending registration request to:', `${API_URL}/api/register/`);
      const response = await fetch(`${API_URL}/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account_type: 'franchisee',
          email: formData.email,
          username: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          contact_number: formData.phone,
          investment_budget: formData.investmentBudget,
          industry: formData.industry,
          product_category: formData.category,
          experience: formData.experience,
          location: formData.location,
          interested_brands: formData.brands.join(', '),
          source_platform: 'NFIS',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        const errorMsg = Object.entries(errorData)
          .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(', ') : val}`)
          .join('\n');
        alert(errorMsg || 'Registration failed. Please ensure all details are correct.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Network error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for applying. Our team will review your application and contact you soon.
          </p>
          <Link
            href="/franchises"
            className="inline-block px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
          >
            Browse Franchises
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Franchisee Registration</h1>
          <p className="text-gray-600 mb-8">
            Begin your journey to franchise ownership. Fill in your details to get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="John"
                  />
                </div>
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="Doe"
                  />
                </div>
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Investment Budget and Location */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="investmentBudget" className="block text-sm font-medium text-gray-900 mb-2">
                  Investment Budget
                </label>
                <select
                  name="investmentBudget"
                  id="investmentBudget"
                  value={formData.investmentBudget}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${errors.investmentBudget ? 'border-red-500' : 'border-gray-300'
                    }`}
                >
                  <option value="">Select your budget range</option>
                  <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                  <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                  <option value="₹1 Crore - ₹2.5 Crores">₹1 Crore - ₹2.5 Crores</option>
                  <option value="₹2.5 Crores - ₹5 Crores">₹2.5 Crores - ₹5 Crores</option>
                  <option value="₹5 Crores+">₹5 Crores+</option>
                </select>
                {errors.investmentBudget && <p className="text-red-500 text-sm mt-1">{errors.investmentBudget}</p>}
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-2">
                  Preferred Location
                </label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="City, State"
                  />
                </div>
              </div>
            </div>

            {/* Industry and Experience */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-900 mb-2">
                  Preferred Industry
                </label>
                <select
                  name="industry"
                  id="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all ${errors.industry ? 'border-red-500' : 'border-gray-300'
                    }`}
                >
                  <option value="">Select an industry</option>
                  {Object.keys(PRODUCT_CATEGORIES_BY_INDUSTRY).map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
                {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-2">
                  Preferred Category
                </label>
                <select
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                >
                  <option value="">Select a category</option>
                  {(PRODUCT_CATEGORIES_BY_INDUSTRY[formData.industry] || []).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-900 mb-2">
                  Business Experience
                </label>
                <select
                  name="experience"
                  id="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                >
                  <option value="">Select your experience level</option>
                  <option value="none">No experience</option>
                  <option value="some">1-5 years</option>
                  <option value="experienced">5+ years</option>
                </select>
              </div>
            </div>

            {/* Brands Multi-Select Dropdown */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-2 font-bold text-red-600">Interested Brands (Select one or more)</label>
              <div className="relative">
                <div
                  className="min-h-[50px] w-full px-5 py-3 border-2 border-gray-100 rounded-2xl focus-within:ring-4 focus-within:ring-red-500/10 focus-within:border-red-500 cursor-pointer bg-white flex flex-wrap gap-2 items-center transition-all shadow-sm"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {(formData.brands || []).length === 0 ? (
                    <span className="text-gray-400 font-medium italic">Search for brands you're interested in...</span>
                  ) : (
                    (formData.brands || []).map(brand => (
                      <span key={brand} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 text-xs font-black rounded-xl border border-red-100 shadow-sm">
                        {brand}
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setFormData({ ...formData, brands: (formData.brands || []).filter(b => b !== brand) }); }}
                          className="hover:text-red-950 transition-colors p-0.5 rounded-full hover:bg-red-100"
                        >
                          <X size={12} strokeWidth={3} />
                        </button>
                      </span>
                    ))
                  )}
                  <ChevronDown className={`ml-auto text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-red-600' : ''}`} size={20} />
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-50 w-full mt-3 bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in slide-in-from-top-2 duration-300">
                    <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                      <div className="relative group">
                        <Search className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-red-600 transition-colors" size={18} />
                        <input
                          type="text"
                          placeholder="Type brand name to search..."
                          className="w-full pl-11 pr-5 py-3.5 text-sm border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition-all font-semibold"
                          value={brandSearch}
                          onChange={(e) => setBrandSearch(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          autoFocus
                        />
                      </div>
                    </div>
                    <div className="max-h-72 overflow-y-auto custom-scrollbar p-2">
                      {isBrandsLoading ? (
                        <div className="p-10 text-center text-gray-400 text-sm font-black uppercase tracking-widest flex flex-col items-center gap-4">
                          <div className="w-8 h-8 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin"></div>
                          Gathering Brands...
                        </div>
                      ) : (brandsList || []).filter(b => b.toLowerCase().includes(brandSearch.toLowerCase())).length === 0 ? (
                        <div className="p-10 text-center text-gray-500 text-sm font-bold italic">No brands found matching "{brandSearch}"</div>
                      ) : (
                        (brandsList || [])
                          .filter(b => b.toLowerCase().includes(brandSearch.toLowerCase()))
                          .map(brand => (
                            <div
                              key={brand}
                              className={`px-5 py-4 text-sm cursor-pointer hover:bg-gray-50 rounded-2xl transition-all flex items-center justify-between mb-1 last:mb-0 ${formData.brands.includes(brand) ? 'bg-red-50 font-black text-red-700' : 'text-gray-700 font-semibold'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                const newBrands = formData.brands.includes(brand)
                                  ? formData.brands.filter(b => b !== brand)
                                  : [...formData.brands, brand];
                                setFormData({ ...formData, brands: newBrands });
                              }}
                            >
                              <div className="flex items-center gap-4">
                                <div className={`w-3 h-3 rounded-full border-2 transition-all ${formData.brands.includes(brand) ? 'bg-red-600 border-red-600' : 'bg-transparent border-gray-200'}`}></div>
                                {brand}
                              </div>
                              {formData.brands.includes(brand) && <Check size={20} strokeWidth={3} className="text-red-600" />}
                            </div>
                          ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Submit Franchisee Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function FranchisorRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPersonName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors: Record<string, string> = {};

    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.contactPersonName) newErrors.contactPersonName = 'Contact person name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${API_URL}/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account_type: 'franchisor',
          email: formData.email,
          username: formData.email,
          password: formData.password,
          company_name: formData.companyName,
          contact_person_name: formData.contactPersonName,
          contact_number: formData.phone,
          source_platform: 'NFIS',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.access) localStorage.setItem('access_token', data.access);
        if (data.refresh) localStorage.setItem('refresh_token', data.refresh);
        if (formData.email) localStorage.setItem('user_email', formData.email);
        
        const role = data.user?.role || data.role || 'franchisor';
        localStorage.setItem('user_role', role);
        localStorage.setItem('user_name', formData.contactPersonName);
        localStorage.setItem('company_name', formData.companyName);

        window.dispatchEvent(new Event('auth-change'));
        router.push('/dashboard/franchisor');
        return;
      } else {
        const errorData = await response.json();
        const errorMsg = Object.entries(errorData)
          .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(', ') : val}`)
          .join('\n');
        alert(errorMsg || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Welcome to NFIS. Our team will verify your business details and you'll be able to start recruiting franchisees soon.
          </p>
          <Link
            href="/exhibitions"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            View Exhibitions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Franchisor Registration</h1>
          <p className="text-gray-600 mb-8">
            Register your franchise company and reach potential franchisees worldwide.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Info */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-900 mb-2">
                Company Name
              </label>
              <div className="relative">
                <Building2 size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Your Company Ltd."
                />
              </div>
              {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
            </div>

            {/* Contact Person */}
            <div>
              <label htmlFor="contactPersonName" className="block text-sm font-medium text-gray-900 mb-2">
                Contact Person Name
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="contactPersonName"
                  id="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${errors.contactPersonName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Jane Smith"
                />
              </div>
              {errors.contactPersonName && <p className="text-red-500 text-sm mt-1">{errors.contactPersonName}</p>}
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Business Email
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="jane@company.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>



            {/* Passwords */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </>
              ) : 'Create Franchisor Account'}
            </button>

            {/* Sign In Link */}
            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function InvestorRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPersonName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors: Record<string, string> = {};

    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.contactPersonName) newErrors.contactPersonName = 'Contact person name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${API_URL}/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          account_type: 'investor',
          email: formData.email,
          username: formData.email,
          password: formData.password,
          company_name: formData.companyName,
          full_name: formData.contactPersonName,
          phone_number: formData.phone,
          source_platform: 'NFIS',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.access) localStorage.setItem('access_token', data.access);
        if (data.refresh) localStorage.setItem('refresh_token', data.refresh);
        if (formData.email) localStorage.setItem('user_email', formData.email);
        
        const role = data.user?.role || data.role || 'investor';
        localStorage.setItem('user_role', role);
        localStorage.setItem('user_name', formData.contactPersonName);
        localStorage.setItem('company_name', formData.companyName);

        window.dispatchEvent(new Event('auth-change'));
        router.push('/dashboard/investor');
        return;
      } else {
        const errorData = await response.json();
        const errorMsg = Object.entries(errorData)
          .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(', ') : val}`)
          .join('\n');
        alert(errorMsg || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Welcome to NFIS. Start exploring franchise investment opportunities that match your goals.
          </p>
          <Link
            href="/franchises"
            className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
          >
            Browse Opportunities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Investor Registration</h1>
          <p className="text-gray-600 mb-8">
            Join our community of investors and discover franchise opportunities.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Info */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-900 mb-2">
                Company Name
              </label>
              <div className="relative">
                <Building2 size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all ${errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Your Company/Firm Name"
                />
              </div>
              {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
            </div>

            {/* Contact Person */}
            <div>
              <label htmlFor="contactPersonName" className="block text-sm font-medium text-gray-900 mb-2">
                Contact Person Name
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="contactPersonName"
                  id="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all ${errors.contactPersonName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Jane Smith"
                />
              </div>
              {errors.contactPersonName && <p className="text-red-500 text-sm mt-1">{errors.contactPersonName}</p>}
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="jane@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Passwords */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </>
              ) : 'Create Investor Account'}
            </button>

            {/* Sign In Link */}
            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-green-600 hover:text-green-700 font-semibold">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
