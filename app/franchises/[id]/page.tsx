
import { mockFranchises } from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Users, Target, Award, CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

interface FranchiseDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function FranchiseDetailPage({ params }: FranchiseDetailPageProps) {
  const { id } = await params;
  const franchise = mockFranchises.find((f) => f.id === id);

  if (!franchise) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/franchises" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft size={20} />
          Back to Franchises
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
          <div className="relative w-full h-80 overflow-hidden bg-muted">
            <Image
              src={franchise.image}
              alt={franchise.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{franchise.name}</h1>
                <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-primary text-white">{franchise.category}</span>
              </div>
            </div>
            <p className="text-lg text-gray-600">{franchise.description}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Metrics */}
            <div className="rounded-xl border bg-white text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">Key Performance Metrics</h3>
              </div>
              <div className="p-6 pt-0">
                <div className="grid grid-cols-2 gap-6 py-2">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                       <TrendingUp className="text-primary" size={24} />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{franchise.roi}%</p>
                    <p className="text-sm text-gray-600">Average ROI</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Users className="text-accent" size={24} />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{franchise.unitsOperating}</p>
                    <p className="text-sm text-gray-600">Units Operating</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                       <Award className="text-primary" size={24} />
                     </div>
                    <p className="text-2xl font-bold text-foreground">{franchise.yearsInBusiness}</p>
                    <p className="text-sm text-gray-600">Years in Business</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Target className="text-accent" size={24} />
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-foreground">{franchise.supportLevel}</p>
                    <p className="text-sm text-gray-600">Support Level</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="rounded-xl border bg-white text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">Investment Details</h3>
              </div>
              <div className="p-6 pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Total Investment Range</h4>
                  <p className="text-3xl font-bold text-primary">
                    ${(franchise.investmentRange.min / 1000).toFixed(0)}K - ${(franchise.investmentRange.max / 1000).toFixed(0)}K
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    This includes franchise fees, equipment, initial inventory, and working capital.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-xl border bg-white text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">Why Join {franchise.name}?</h3>
              </div>
              <div className="p-6 pt-0">
                <ul className="space-y-3">
                  {franchise.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Description Section */}
            <div className="rounded-xl border bg-white text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">About This Franchise</h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-700 leading-relaxed">
                   {franchise.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border bg-white text-card-foreground shadow sticky top-20">
              <div className="flex flex-col space-y-1.5 p-6">
                 <h3 className="font-semibold leading-none tracking-tight">Ready to Learn More?</h3>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2 w-full">
                  Request Information
                </button>
                <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-zinc-100 hover:text-accent-foreground h-10 px-4 py-2 w-full">
                  Contact Us
                </Link>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Quick Facts</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-600">Category</p>
                      <p className="font-semibold text-foreground">{franchise.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Support</p>
                      <p className="font-semibold text-foreground">{franchise.supportLevel}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Active Since</p>
                      <p className="font-semibold text-foreground">
                        {new Date().getFullYear() - franchise.yearsInBusiness}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}