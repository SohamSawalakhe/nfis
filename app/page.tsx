'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FranchiseCard } from '@/components/franchise-card';
import { ExhibitionCard } from '@/components/exhibition-card';
import { HomepageSearchBar } from '@/components/homepage-search-bar';
import { mockFranchises, mockExhibitions } from '@/lib/mock-data';
import { TrendingUp, Award, Users, Target } from 'lucide-react';

export default function Home() {
  const featuredFranchises = mockFranchises.slice(0, 3);
  const [apiExhibitions, setApiExhibitions] = useState<any[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get('/api/events-proxy');
        const data = response.data;
        
        if (data && data.results) {
          const events = data.results.map((item: any) => ({
            id: item.id.toString(),
            name: item.title,
            location: item.location || item.venue || 'TBA',
            date: item.start_date,
            description: item.description || 'No description available',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
            featured: item.is_active,
            attendees: parseInt(item.buyers_count) || undefined,
            booths: parseInt(item.exhibitors_count) || undefined,
          }));
          setApiExhibitions(events);
        }
      } catch (error) {
        console.error('Error fetching events with axios:', error);
      }
    }
    fetchEvents();
  }, []);

  const featuredExhibitions = apiExhibitions.length > 0 
    ? apiExhibitions.filter((e) => e.featured).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : mockExhibitions.filter((e) => e.featured).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-16 md:py-28 relative">
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-red-200 mb-3 uppercase tracking-wide">India's Premier Franchise Ecosystem</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-balance">
              National Franchise India Summit
            </h1>
            <p className="text-lg md:text-xl opacity-90 text-balance max-w-3xl mx-auto">
              Connect with 500+ leading franchise brands, serious investors, and ambitious entrepreneurs. Attend our premium exhibitions across major Indian cities.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8">
            <HomepageSearchBar />
          </div>
        </div>
      </section>

      {/* Featured Franchises */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Explore Franchise Brands Exhibiting
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Top franchise brands across diverse industries will be showcasing their opportunities at our summits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredFranchises.map((franchise) => (
              <FranchiseCard key={franchise.id} franchise={franchise} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/franchises"
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore All Brands
            </a>
          </div>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Upcoming Exhibitions & Events
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connect with franchisors and industry experts at premier franchise exhibitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {featuredExhibitions.map((exhibition) => (
              <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/exhibitions"
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              View All Events
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center text-balance">
            Why Attend National Franchise India Summit?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'For Franchisees',
                description: 'Meet 500+ brands in one place. Compare business models, discuss terms, and find your perfect franchise match.',
              },
              {
                title: 'For Franchisors',
                description: 'Connect with qualified franchisees, expand your network, showcase your opportunity, and accelerate growth.',
              },
              {
                title: 'For Investors',
                description: 'Discover high-potential franchise brands, meet franchisors directly, and identify investment opportunities.',
              },
              {
                title: 'Expert Consultations',
                description: 'Access franchise consultants, legal experts, and industry professionals for personalized guidance.',
              },
              {
                title: 'Networking Events',
                description: 'Participate in seminars, workshops, and networking sessions with industry leaders.',
              },
              {
                title: 'Premium Experience',
                description: 'Enjoy world-class venues, professional management, and curated networking opportunities.',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="text-blue-700" size={24} />
              </div>
              <p className="text-3xl font-bold text-gray-900">15+</p>
              <p className="text-sm text-gray-600">Summit Locations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="text-red-600" size={24} />
              </div>
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Brand Exhibitors</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="text-blue-700" size={24} />
              </div>
              <p className="text-3xl font-bold text-gray-900">50K+</p>
              <p className="text-sm text-gray-600">Annual Attendees</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="text-red-600" size={24} />
              </div>
              <p className="text-3xl font-bold text-gray-900">2000+</p>
              <p className="text-sm text-gray-600">Deals Facilitated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Franchise Journey?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto text-balance">
            Join thousands of entrepreneurs, franchisors, and investors at the National Franchise India Summit.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/register"
              className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Book Exhibition Booth
            </a>
            <a
              href="/register"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Register as Visitor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
