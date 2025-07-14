import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Database, Code, Search, CheckCircle, TrendingUp, FileText, Target, Rocket } from 'lucide-react';

const TechnicalSEO = () => {
  const features = [
    {
      icon: Database,
      title: 'Advanced Structured Data',
      description: 'Comprehensive schema markup implementation optimized for AI consumption and understanding.'
    },
    {
      icon: Code,
      title: 'Entity Markup Optimization',
      description: 'Strategic entity markup that helps AI systems understand your brand relationships and expertise.'
    },
    {
      icon: Search,
      title: 'AI-Optimized Technical Signals',
      description: 'Technical foundations that communicate trust and authority to AI-powered search engines.'
    }
  ];

  const benefits = [
    'Enhanced AI system understanding of your content',
    'Improved crawlability and indexation efficiency',
    'Stronger technical foundation for all SEO efforts',
    'Better performance in AI-powered search results',
    'Increased likelihood of AI citations and mentions'
  ];

  const process = [
    {
      step: '01',
      title: 'Technical Audit & Analysis',
      description: 'Comprehensive evaluation of current technical infrastructure and AI-readiness assessment.'
    },
    {
      step: '02',
      title: 'Schema & Entity Implementation',
      description: 'Strategic implementation of structured data and entity markup for AI comprehension.'
    },
    {
      step: '03',
      title: 'Performance Optimization',
      description: 'Technical performance enhancements that support both user experience and AI crawling.'
    },
    {
      step: '04',
      title: 'Monitoring & Refinement',
      description: 'Ongoing monitoring and optimization to maintain technical excellence and AI compatibility.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-sb-blue-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/" className="hover:text-sb-blue-primary">SEO Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Technical SEO</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Settings className="h-12 w-12 text-blue-300 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Technical SEO
                </h1>
                <p className="text-xl text-blue-200">
                  AI-Optimized Technical Foundation
                </p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Build the technical foundation that AI systems trust. Our advanced technical SEO ensures your content is not just crawlable, but comprehensible to AI-powered search engines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sb-orange hover:bg-orange-600 text-white">
                Get Technical Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                View Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Technical SEO Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Technical SEO Matters in the AI Era
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AI-powered search engines require more than basic technical optimization. They need structured, semantic signals that communicate your content's meaning, authority, and relationships.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our technical SEO approach goes beyond traditional optimization to create the foundation that AI systems need to understand, trust, and cite your content.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sb-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Technical Components</h3>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-blue-100 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-sb-blue-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technical SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building AI-optimized technical foundations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-sb-blue-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrated with Our AI-Enhanced Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical SEO works best when integrated with our other AI-era services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Strategy</h3>
              <p className="text-gray-600 mb-4">Technical foundations support authority-focused content that AI systems cite.</p>
              <Link to="/services/seo/content-strategy">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital PR</h3>
              <p className="text-gray-600 mb-4">Technical signals amplify the impact of media coverage and expert positioning.</p>
              <Link to="/services/seo/digital-pr">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Ready Optimization</h3>
              <p className="text-gray-600 mb-4">Technical infrastructure that adapts to emerging AI technologies.</p>
              <Link to="/services/seo/future-ready-optimization">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sb-blue-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your AI-Optimized Technical Foundation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a comprehensive technical audit and discover how to optimize your infrastructure for AI-powered search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sb-orange hover:bg-orange-600">
              Get Technical Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSEO;

