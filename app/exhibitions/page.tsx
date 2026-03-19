'use client';

import { ExhibitionCard } from '@/components/exhibition-card';
import { mockExhibitions } from '@/lib/mock-data';

import { Search, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function ExhibitionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filtered = mockExhibitions.filter((exhibition) => {
    const matchesSearch =
      exhibition.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exhibition.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exhibition.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFeatured = !featuredOnly || exhibition.featured;

    return matchesSearch && matchesFeatured;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Franchise Exhibitions & Events</h1>
          <p className="text-lg text-gray-600">
            Connect with franchisors and industry leaders at our premier franchise exhibitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-20">
              <h3 className="text-lg font-bold mb-4 text-foreground">Filters</h3>

              {/* Search */}
              <div className="mb-6">
                <label htmlFor="search" className="text-sm font-medium mb-2 block text-foreground">
                  Search Events
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    id="search"
                    placeholder="Search exhibitions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                  />
                </div>
              </div>

              {/* Featured Filter */}
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={featuredOnly}
                    onChange={(e) => setFeaturedOnly(e.target.checked)}
                    className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-primary accent-primary"
                  />
                  <label htmlFor="featured" className="ml-2 text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">
                    Featured Only
                  </label>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFeaturedOnly(false);
                }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-zinc-100 hover:text-accent-foreground h-10 px-4 py-2 w-full mt-6"
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
                <span className="font-semibold">{mockExhibitions.length}</span> exhibitions
              </p>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filtered.map((exhibition) => (
                  <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <Calendar className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-600 text-lg">No exhibitions match your filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFeaturedOnly(false);
                  }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-zinc-100 hover:text-accent-foreground h-10 px-4 py-2 mt-4"
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
