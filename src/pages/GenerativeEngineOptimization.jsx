import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Search, Target, TrendingUp, CheckCircle, Zap, MessageSquare, FileText, Rocket } from 'lucide-react';

const GenerativeEngineOptimization = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Answer Optimization',
      description: 'Optimize content specifically for AI-powered answer engines like ChatGPT, Bard, and Claude.'
    },
    {
      icon: Search,
      title: 'Generative Search Positioning',
      description: 'Position your content for inclusion in AI-generated search results and summaries.'
    },
    {
      icon: Target,
      title: 'Citation Optimization',
      description: 'Increase the likelihood of your content being cited and referenced by AI systems.'
    },
    {
      icon: MessageSquare,
      title: 'Conversational Query Optimization',
      description: 'Optimize for natural language queries and conversational search patterns.'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'AI Engine Analysis',
      description: 'Comprehensive analysis of how major AI engines currently process and cite content in your industry.'
    },
    {
      number: '02',
      title: 'Content Optimization',
      description: 'Strategic content restructuring for maximum AI comprehension and citation potential.'
    },
    {
      number: '03',
      title: 'Query Pattern Mapping',
      description: 'Identification and optimization for conversational query patterns and AI response triggers.'
    },
    {
      number: '04',
      title: 'Performance Monitoring',
      description: 'Ongoing tracking of AI citations, mentions, and generative search visibility.'
    }
  ];

  const benefits = [
    'Increased visibility in AI-powered search results',
    'Higher likelihood of AI citations and references',
    'Enhanced authority recognition by AI systems',
    'Improved performance in conversational search',
    'Future-ready optimization for emerging AI platforms'
  ];

  const integrations = [
    {
      service: 'Technical SEO',
      description: 'Advanced structured data supports AI content understanding'
    },
    {
      service: 'Content Strategy',
      description: 'Authority-focused content optimized for AI citation'
    },
    {
      service: 'Digital PR',
      description: 'Media mentions enhance AI recognition and trust signals'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">SEO Services</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900">Generative Engine Optimization</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Bot className="h-16 w-16 text-indigo-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Generative Engine Optimization</h1>
              <p className="text-xl text-indigo-200">AI-Powered Search Result Optimization</p>
            </div>
          </div>
          
          <p className="text-xl mb-8 max-w-3xl">
            Optimize for AI-powered answer engines and generative search results. Our GEO strategies ensure your content is discovered, understood, and cited by the next generation of search technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Start GEO Strategy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-3 text-lg">
              View AI Visibility Report
            </Button>
          </div>
        </div>
      </section>

      {/* Why GEO Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Generative Engine Optimization Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The future of search is generative. AI-powered engines like ChatGPT, Bard, and Claude are becoming primary information sources, fundamentally changing how people discover and consume content.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Traditional SEO optimizes for search engine result pages. GEO optimizes for AI-generated answers, ensuring your expertise is recognized, cited, and recommended by artificial intelligence systems.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key GEO Components</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-indigo-100 rounded-lg p-3 mr-4">
                      <feature.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our GEO Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to optimizing your content for AI-powered search engines and generative answer systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated AI-Era Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GEO works synergistically with our other services to create a comprehensive AI-optimized presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{integration.service}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results in AI Visibility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our GEO strategies deliver measurable improvements in AI-powered search visibility and citation rates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-indigo-600 mb-2">400%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Increase in AI Citations</div>
              <div className="text-gray-600">Average improvement in AI system references</div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-indigo-600 mb-2">75%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Generative Search Inclusion</div>
              <div className="text-gray-600">Content included in AI-generated responses</div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-indigo-600 mb-2">250%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Conversational Query Performance</div>
              <div className="text-gray-600">Improvement in natural language search visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize for AI-Powered Search?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get ahead of the competition with GEO strategies that position your content for the future of search.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Start Your GEO Strategy
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              Download GEO Guide
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenerativeEngineOptimization;

