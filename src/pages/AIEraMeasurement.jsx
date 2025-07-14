import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, TrendingUp, Target, Eye, CheckCircle, Activity, Brain, FileText, Rocket } from 'lucide-react';

const AIEraMeasurement = () => {
  const features = [
    {
      icon: Eye,
      title: 'AI Visibility Tracking',
      description: 'Monitor your brand\'s visibility and citations across AI-powered search engines and answer systems.'
    },
    {
      icon: Activity,
      title: 'Authority Signal Measurement',
      description: 'Track the strength and growth of your authority signals across digital platforms and knowledge bases.'
    },
    {
      icon: Brain,
      title: 'AI Citation Analytics',
      description: 'Comprehensive analysis of how AI systems reference and cite your content in their responses.'
    },
    {
      icon: Target,
      title: 'Future-Ready KPI Framework',
      description: 'Modern measurement framework designed for AI-era search performance and business impact.'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Current State Analysis',
      description: 'Comprehensive audit of existing metrics and identification of AI-era measurement gaps.'
    },
    {
      number: '02',
      title: 'KPI Framework Design',
      description: 'Development of custom measurement framework aligned with AI-era search and business objectives.'
    },
    {
      number: '03',
      title: 'Tracking Implementation',
      description: 'Implementation of advanced tracking systems for AI visibility, citations, and authority signals.'
    },
    {
      number: '04',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring, reporting, and optimization based on AI-era performance insights.'
    }
  ];

  const metrics = [
    {
      category: 'AI Visibility',
      metrics: [
        'AI search engine citations',
        'Generative answer inclusions',
        'Voice search performance',
        'Conversational query rankings'
      ]
    },
    {
      category: 'Authority Signals',
      metrics: [
        'Entity recognition strength',
        'Knowledge graph presence',
        'Expert mention frequency',
        'Industry authority score'
      ]
    },
    {
      category: 'Content Performance',
      metrics: [
        'AI citation rate',
        'Content authority score',
        'Expertise demonstration',
        'Trust signal strength'
      ]
    },
    {
      category: 'Business Impact',
      metrics: [
        'Qualified lead generation',
        'Brand authority growth',
        'Competitive positioning',
        'Revenue attribution'
      ]
    }
  ];

  const benefits = [
    'Clear visibility into AI-era search performance',
    'Data-driven optimization decisions',
    'Measurable ROI from SEO investments',
    'Competitive advantage through advanced insights',
    'Future-ready measurement capabilities'
  ];

  const integrations = [
    {
      service: 'All SEO Services',
      description: 'Comprehensive measurement across all optimization efforts and strategies'
    },
    {
      service: 'Digital PR',
      description: 'Authority signal tracking and media mention impact measurement'
    },
    {
      service: 'Content Strategy',
      description: 'Content performance and AI citation tracking across all content'
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
                <span className="text-gray-900">AI-Era Measurement</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <BarChart3 className="h-16 w-16 text-rose-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">AI-Era Measurement</h1>
              <p className="text-xl text-rose-200">Modern KPI Framework</p>
            </div>
          </div>
          
          <p className="text-xl mb-8 max-w-3xl">
            Measure what matters in the AI-powered search landscape. Our advanced analytics and modern KPI framework provide the insights you need to optimize for the future of search.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Implement AI Measurement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-900 px-8 py-3 text-lg">
              View Sample Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Why AI-Era Measurement Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why AI-Era Measurement Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Traditional SEO metrics tell only part of the story in the AI era. Rankings and traffic are important, but they don't capture AI citations, authority signals, or the new ways people discover and consume content.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our modern measurement framework tracks what actually drives business results in the AI-powered search landscape, giving you the insights needed to optimize for sustainable growth.
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
            
            <div className="bg-rose-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Measurement Components</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-rose-100 rounded-lg p-3 mr-4">
                      <feature.icon className="h-6 w-6 text-rose-600" />
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

      {/* Modern KPI Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modern KPI Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive metrics that capture the full spectrum of AI-era search performance and business impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Measurement Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to implementing comprehensive AI-era measurement and analytics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-rose-100 text-rose-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Analytics Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge analytics that provide deep insights into AI-era search performance and optimization opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="bg-rose-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-10 w-10 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Visibility Dashboard</h3>
              <p className="text-gray-600">Real-time tracking of your visibility across AI-powered search engines and answer systems.</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="bg-rose-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Authority Growth Tracking</h3>
              <p className="text-gray-600">Monitor the development and strength of your authority signals across digital platforms.</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="bg-rose-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ROI Attribution</h3>
              <p className="text-gray-600">Clear attribution of business results to specific AI-era SEO strategies and investments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated Measurement Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive measurement that spans all SEO services and provides unified insights into performance.
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurement-Driven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced measurement capabilities enable data-driven optimization that delivers superior results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-rose-600 mb-2">450%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Optimization Efficiency</div>
              <div className="text-gray-600">Improvement in optimization decision accuracy</div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-rose-600 mb-2">85%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">ROI Visibility</div>
              <div className="text-gray-600">Clear attribution of business results to SEO efforts</div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-rose-600 mb-2">320%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Strategic Insights</div>
              <div className="text-gray-600">Increase in actionable optimization insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Measure What Matters?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Implement advanced AI-era measurement that provides the insights you need to optimize for sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Start AI Measurement
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              Download KPI Framework
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEraMeasurement;

