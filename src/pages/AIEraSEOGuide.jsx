import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Download, Search, TrendingUp, Brain, Users, Target, CheckCircle, Star, Play, ExternalLink, Filter, Calendar, Tag } from 'lucide-react';

const AIEraSEOGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const guideChapters = [
    {
      id: 1,
      title: 'Understanding AI-Powered Search',
      description: 'How AI is transforming search algorithms and user behavior',
      duration: '15 min read',
      difficulty: 'Beginner',
      topics: ['AI Algorithms', 'Search Evolution', 'User Intent']
    },
    {
      id: 2,
      title: 'Generative Engine Optimization (GEO)',
      description: 'Optimizing for AI-generated search results and citations',
      duration: '25 min read',
      difficulty: 'Advanced',
      topics: ['GEO Strategy', 'AI Citations', 'Content Optimization']
    },
    {
      id: 3,
      title: 'Entity-First SEO Strategy',
      description: 'Building comprehensive entity footprints for AI recognition',
      duration: '20 min read',
      difficulty: 'Intermediate',
      topics: ['Entity SEO', 'Knowledge Graphs', 'Structured Data']
    },
    {
      id: 4,
      title: 'E-E-A-T in the AI Era',
      description: 'Demonstrating expertise, experience, authority, and trust to AI systems',
      duration: '18 min read',
      difficulty: 'Intermediate',
      topics: ['E-E-A-T', 'Authority Building', 'Trust Signals']
    },
    {
      id: 5,
      title: 'AI-Era Content Strategy',
      description: 'Creating content that resonates with both AI and human audiences',
      duration: '22 min read',
      difficulty: 'Intermediate',
      topics: ['Content Strategy', 'AI Content', 'User Experience']
    },
    {
      id: 6,
      title: 'Future-Ready Technical SEO',
      description: 'Technical foundations that prepare for AI algorithm evolution',
      duration: '30 min read',
      difficulty: 'Advanced',
      topics: ['Technical SEO', 'AI Optimization', 'Performance']
    }
  ];

  const keyInsights = [
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'Strategies designed specifically for AI-powered search algorithms and generative engines.'
    },
    {
      icon: Target,
      title: 'Actionable Framework',
      description: 'Step-by-step implementation guides with real-world examples and case studies.'
    },
    {
      icon: TrendingUp,
      title: 'Future-Proof Methods',
      description: 'Techniques that adapt and evolve with advancing AI technology and search behavior.'
    },
    {
      icon: Users,
      title: 'Expert Insights',
      description: 'Compiled knowledge from industry leaders and AI-era optimization pioneers.'
    }
  ];

  const downloadResources = [
    {
      title: 'AI-Era SEO Checklist',
      description: 'Complete checklist for auditing and optimizing your site for AI-powered search',
      format: 'PDF',
      size: '2.1 MB',
      downloads: '12.5K'
    },
    {
      title: 'GEO Implementation Template',
      description: 'Step-by-step template for implementing Generative Engine Optimization',
      format: 'DOCX',
      size: '1.8 MB',
      downloads: '8.3K'
    },
    {
      title: 'Entity Optimization Worksheet',
      description: 'Comprehensive worksheet for building and optimizing entity footprints',
      format: 'XLSX',
      size: '950 KB',
      downloads: '6.7K'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Head of Digital Marketing',
      company: 'TechFlow Solutions',
      content: 'This guide completely transformed our approach to SEO. We saw a 40% increase in AI-generated search visibility within 3 months.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'SEO Director',
      company: 'Growth Dynamics',
      content: 'The most comprehensive resource on AI-era SEO I\'ve found. The GEO strategies alone were worth the entire guide.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Digital Strategy Lead',
      company: 'Innovation Labs',
      content: 'Practical, actionable, and future-focused. This guide helped us stay ahead of the AI search revolution.',
      rating: 5
    }
  ];

  const filteredChapters = selectedCategory === 'all' 
    ? guideChapters 
    : guideChapters.filter(chapter => 
        chapter.difficulty.toLowerCase() === selectedCategory
      );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
                <BookOpen className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Comprehensive Guide</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Complete AI-Era SEO Guide
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Master the future of search optimization with our comprehensive guide to AI-powered SEO strategies, techniques, and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Free Guide
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Overview
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Total Pages</span>
                    <span className="text-2xl font-bold">127</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Chapters</span>
                    <span className="text-2xl font-bold">6</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Case Studies</span>
                    <span className="text-2xl font-bold">15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Downloads</span>
                    <span className="text-2xl font-bold">25K+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive insights and strategies for succeeding in the AI-powered search landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  <insight.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{insight.title}</h3>
                <p className="text-gray-600">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Chapters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Guide Chapters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six comprehensive chapters covering every aspect of AI-era SEO optimization.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              {['all', 'beginner', 'intermediate', 'advanced'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredChapters.map((chapter) => (
              <div key={chapter.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                      Chapter {chapter.id}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{chapter.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{chapter.title}</h3>
                  <p className="text-gray-600 mb-4">{chapter.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-gray-400" />
                      <span className={`text-sm px-2 py-1 rounded ${
                        chapter.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                        chapter.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {chapter.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {chapter.topics.map((topic, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Read Chapter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bonus Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional templates, checklists, and worksheets to accelerate your AI-era SEO implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {downloadResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                    {resource.format}
                  </div>
                  <div className="text-sm text-gray-500">{resource.size}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Download className="h-4 w-4 mr-1" />
                    <span>{resource.downloads} downloads</span>
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Free
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Industry Leaders Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of SEO professionals and digital marketers worldwide.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master AI-Era SEO?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Download the complete guide and start transforming your search optimization strategy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Complete Guide
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Sample Chapter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEraSEOGuide;

