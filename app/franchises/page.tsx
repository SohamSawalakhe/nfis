'use client';

import { useState } from 'react';
import { FranchiseCard } from '@/components/franchise-card';
import { mockFranchises } from '@/lib/mock-data';
import { Search } from 'lucide-react';

export default function FranchisesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minInvestment, setMinInvestment] = useState(0);
  const [maxInvestment, setMaxInvestment] = useState(1000000);

  const categories = Array.from(new Set(mockFranchises.map((f) => f.category)));

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const filtered = mockFranchises.filter((franchise) => {
    const matchesSearch =
      franchise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      franchise.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(franchise.category);

    const matchesInvestment =
      franchise.investmentRange.min >= minInvestment &&
      franchise.investmentRange.max <= maxInvestment;

    return matchesSearch && matchesCategory && matchesInvestment;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Franchise Opportunities</h1>
          <p className="text-gray-600 text-lg">
            Discover {mockFranchises.length} vetted franchise opportunities across multiple industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Fixed Sticky Filter */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24 h-fit">
              <h3 className="text-lg font-bold mb-6 text-gray-900">Filters</h3>

              {/* Search */}
              <div className="mb-6">
                <label htmlFor="search" className="text-sm font-medium mb-2 block text-gray-900">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    id="search"
                    placeholder="Search franchises..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-gray-900">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={category}
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 border border-gray-300 rounded cursor-pointer accent-red-600"
                      />
                      <label htmlFor={category} className="ml-3 text-sm text-gray-700 cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investment Range */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-gray-900">Investment Range</h4>
                <div className="space-y-3">
                  <div>
                    <label htmlFor="min-investment" className="text-xs font-medium text-gray-700 block mb-2">
                      Min: ${(minInvestment / 1000).toFixed(0)}K
                    </label>
                    <input
                      id="min-investment"
                      type="range"
                      min="0"
                      max="1000000"
                      step="50000"
                      value={minInvestment}
                      onChange={(e) => setMinInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="max-investment" className="text-xs font-medium text-gray-700 block mb-2">
                      Max: ${(maxInvestment / 1000).toFixed(0)}K
                    </label>
                    <input
                      id="max-investment"
                      type="range"
                      min="0"
                      max="1000000"
                      step="50000"
                      value={maxInvestment}
                      onChange={(e) => setMaxInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategories([]);
                  setMinInvestment(0);
                  setMaxInvestment(1000000);
                }}
                className="w-full px-4 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filtered.length}</span> of{' '}
                <span className="font-semibold">{mockFranchises.length}</span> franchises
              </p>
            </div>

            {/* Results */}
            {filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filtered.map((franchise) => (
                  <FranchiseCard key={franchise.id} franchise={franchise} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-600 text-lg">No franchises match your filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategories([]);
                    setMinInvestment(0);
                    setMaxInvestment(1000000);
                  }}
                  className="mt-4 px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
