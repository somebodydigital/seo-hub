import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Search, Filter, Star, ExternalLink, ArrowRight, CheckCircle, Zap, Target, BarChart3, FileText, Calculator, Lightbulb, Users, Award } from 'lucide-react';

const SEOToolsTemplates = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const toolCategories = [
    { id: 'all', name: 'All Tools', count: 24 },
    { id: 'analysis', name: 'Analysis', count: 8 },
    { id: 'content', name: 'Content', count: 6 },
    { id: 'technical', name: 'Technical', count: 5 },
    { id: 'tracking', name: 'Tracking', count: 5 }
  ];

  const tools = [
    {
      id: 1,
      title: 'AI-Era SEO Audit Template',
      description: 'Comprehensive audit checklist specifically designed for AI-powered search optimization',
      category: 'analysis',
      format: 'XLSX',
      size: '2.3 MB',
      downloads: '15.2K',
      rating: 4.9,
      features: ['150+ Checkpoints', 'AI-Specific Metrics', 'Automated Scoring', 'Action Prioritization'],
      preview: '/api/placeholder/400/300',
      isPremium: false
    },
    {
      id: 2,
      title: 'GEO Content Optimization Framework',
      description: 'Step-by-step framework for optimizing content for Generative Engine Optimization',
      category: 'content',
      format: 'PDF + DOCX',
      size: '1.8 MB',
      downloads: '12.7K',
      rating: 4.8,
      features: ['Content Templates', 'Citation Strategies', 'AI Prompt Guidelines', 'Performance Metrics'],
      preview: '/api/placeholder/400/300',
      isPremium: false
    },
    {
      id: 3,
      title: 'Entity Footprint Mapping Tool',
      description: 'Interactive spreadsheet for mapping and optimizing your brand\'s entity presence',
      category: 'analysis',
      format: 'XLSX',
      size: '1.5 MB',
      downloads: '9.8K',
      rating: 4.7,
      features: ['Entity Tracking', 'Knowledge Graph Analysis', 'Competitor Mapping', 'Progress Monitoring'],
      preview: '/api/placeholder/400/300',
      isPremium: false
    },
    {
      id: 4,
      title: 'Technical SEO AI-Readiness Checker',
      description: 'Automated tool to assess your site\'s technical readiness for AI-powered search',
      category: 'technical',
      format: 'Web Tool',
      size: 'Online',
      downloads: '8.5K',
      rating: 4.9,
      features: ['Automated Scanning', 'AI-Specific Checks', 'Performance Scoring', 'Fix Recommendations'],
      preview: '/api/placeholder/400/300',
      isPremium: true
    },
    {
      id: 5,
      title: 'E-E-A-T Signal Tracker',
      description: 'Comprehensive tracking system for Experience, Expertise, Authority, and Trust signals',
      category: 'tracking',
      format: 'Google Sheets',
      size: '950 KB',
      downloads: '11.3K',
      rating: 4.6,
      features: ['Signal Monitoring', 'Competitor Analysis', 'Progress Tracking', 'Reporting Dashboard'],
      preview: '/api/placeholder/400/300',
      isPremium: false
    },
    {
      id: 6,
      title: 'AI-Era Keyword Research Template',
      description: 'Advanced keyword research framework adapted for AI-powered search behavior',
      category: 'analysis',
      format: 'XLSX',
      size: '2.1 MB',
      downloads: '14.6K',
      rating: 4.8,
      features: ['Intent Mapping', 'AI Query Analysis', 'Opportunity Scoring', 'Content Gap Analysis'],
      preview: '/api/placeholder/400/300',
      isPremium: false
    },
    {
      id: 7,
      title: 'Content Authority Builder',
      description: 'Template system for creating authoritative content that AI systems recognize and cite',
      category: 'content',
      format: 'DOCX + PDF',
      size: '1.7 MB',
      downloads: '10.2K',
      rating: 4.7,
      features: ['Authority Templates', 'Citation Frameworks', 'Expert Positioning', 'Trust Building'],
      preview: '/api/placeholder/400/300',
      isPremium: false
    },
    {
      id: 8,
      title: 'AI-Era Performance Dashboard',
      description: 'Comprehensive dashboard template for tracking AI-era SEO performance metrics',
      category: 'tracking',
      format: 'Google Sheets + Looker',
      size: '1.2 MB',
      downloads: '7.9K',
      rating: 4.9,
      features: ['AI Metrics', 'Automated Reporting', 'Trend Analysis', 'ROI Tracking'],
      preview: '/api/placeholder/400/300',
      isPremium: true
    }
  ];

  const featuredTools = [
    {
      icon: Zap,
      title: 'Quick Start Kit',
      description: 'Essential tools bundle for immediate AI-era SEO implementation',
      tools: 5,
      downloads: '25K+'
    },
    {
      icon: Target,
      title: 'Advanced Optimization Suite',
      description: 'Professional-grade tools for comprehensive AI-era optimization',
      tools: 12,
      downloads: '18K+'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Tracking Pack',
      description: 'Complete measurement framework for AI-era performance tracking',
      tools: 7,
      downloads: '22K+'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Frameworks',
      description: 'Battle-tested templates used by leading SEO professionals and agencies worldwide.'
    },
    {
      icon: Lightbulb,
      title: 'AI-Era Focused',
      description: 'Specifically designed for the evolving landscape of AI-powered search optimization.'
    },
    {
      icon: Users,
      title: 'Expert Developed',
      description: 'Created by industry experts with deep experience in AI-era SEO strategies.'
    },
    {
      icon: Award,
      title: 'Continuously Updated',
      description: 'Regular updates ensure tools stay current with the latest AI search developments.'
    }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
              <Download className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Free Tools & Templates</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              SEO Tools & Templates
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professional-grade tools, templates, and frameworks designed specifically for AI-era SEO optimization. Download, customize, and implement immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Browse All Tools
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Premium Suite
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tool Bundles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Tool Bundles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated collections of tools designed for specific AI-era SEO objectives and skill levels.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTools.map((bundle, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <bundle.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{bundle.title}</h3>
                <p className="text-gray-600 mb-6">{bundle.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-500">
                    {bundle.tools} tools included
                  </div>
                  <div className="text-sm text-gray-500">
                    {bundle.downloads} downloads
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Download Bundle
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Library */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Tools Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive collection of AI-era SEO tools and templates.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tools and templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {toolCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-gray-400" />
                  </div>
                  {tool.isPremium && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Premium
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">{tool.title}</h3>
                    <div className="flex items-center ml-4">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{tool.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span>{tool.format}</span>
                    <span>{tool.size}</span>
                    <span>{tool.downloads} downloads</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" className="px-4">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Tools?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade resources trusted by thousands of SEO experts worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your AI-Era SEO?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Download our complete toolkit and start implementing AI-era optimization strategies today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download All Tools
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              <Calculator className="mr-2 h-5 w-5" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOToolsTemplates;

