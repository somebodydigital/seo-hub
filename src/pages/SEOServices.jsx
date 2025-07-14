import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Settings, FileText, Target, Rocket, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const SEOServices = () => {
  const coreServices = [
    {
      icon: Settings,
      title: 'AI-Optimized Technical Foundation',
      description: 'Advanced structured data, entity markup, and technical signals that help AI systems understand and trust your content.',
      path: '/services/seo/technical-optimization',
      color: 'text-blue-600'
    },
    {
      icon: FileText,
      title: 'Contextual Content Strategy',
      description: 'Expert-level content that demonstrates authority and gets cited by AI systems rather than just targeting keywords.',
      path: '/services/seo/content-strategy',
      color: 'text-green-600'
    },
    {
      icon: Target,
      title: 'Digital PR for AI Attribution',
      description: 'Strategic development of expertise signals and media relationships that AI systems recognize and cite.',
      path: '/services/seo/digital-pr',
      color: 'text-orange-600'
    },
    {
      icon: Rocket,
      title: 'Future-Ready Optimization',
      description: 'Anticipatory strategies that adapt to AI evolution and position for emerging search technologies.',
      path: '/services/seo/future-ready-optimization',
      color: 'text-purple-600'
    }
  ];

  const stats = [
    { number: '58%', label: 'of searches now end without clicks' },
    { number: '18', label: 'months of AI search research' },
    { number: '95%', label: 'client retention rate' }
  ];

  const transformationStats = [
    { number: '58%', label: 'Zero-Click Growth', description: 'of searches end without clicks (up from 34% in 2020)' },
    { number: '65%', label: 'AI Preference', description: 'of users prefer AI-generated answers' },
    { number: '3x', label: 'Authority Premium', description: 'AI systems favor recognized experts and authoritative sources' }
  ];

  const evolutionPoints = [
    { title: 'Research Investment', description: '18 months of intensive AI search analysis' },
    { title: 'Service Innovation', description: 'Five new AI-era services launched' },
    { title: 'Partnership Model', description: 'Strategic partner approach evolution' },
    { title: 'Anticipatory Strategy', description: 'Proactive optimization approach' }
  ];

  const ecosystemBenefits = [
    {
      icon: TrendingUp,
      title: 'Integrated Optimization',
      description: 'Technical foundations support content authority, which amplifies Digital PR impact, creating a self-reinforcing cycle of expertise recognition across all AI platforms.'
    },
    {
      icon: Award,
      title: 'Sustainable Results',
      description: 'Authority-based strategies remain effective through algorithm changes because they align with AI systems\' fundamental need to identify and cite trusted expert sources.'
    },
    {
      icon: Users,
      title: 'Competitive Advantage',
      description: 'Our integrated approach requires deep expertise across multiple disciplines, creating barriers to entry that protect your market position long-term.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Enhanced SEO Strategies That Prepare Your Brand for the Future of Search
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Organic Visibility Built for the AI Era
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-4xl mx-auto">
              We don't just adapt to search algorithm changes—we anticipate them. SomebodyDigital has evolved beyond traditional SEO to become your strategic partner in navigating the AI-driven transformation of search. Our comprehensive approach combines proven optimization fundamentals with cutting-edge AI-era strategies.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Discover Your AI-Readiness Score
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                Explore Our AI-Enhanced Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Build Search Visibility That Scales™
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <Play className="h-16 w-16 text-gray-600" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Understanding the AI-Era SEO Transformation
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Watch our 3-minute overview of how search behavior has evolved and why traditional SEO strategies are becoming obsolete in the AI era.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="font-semibold text-gray-900 mb-3">This educational overview demonstrates:</p>
                <p className="text-gray-700 mb-4">
                  The fundamental shift from keyword-focused optimization to authority-based AI discovery across multiple platforms and touchpoints, and how Digital PR serves as the cornerstone of modern authority building.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Why AI systems prioritize authority signals over traditional SEO metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">How Digital PR creates lasting competitive advantages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">The strategic framework for AI-era optimization success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Landscape Change */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Search Landscape Has Fundamentally Changed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The rise of AI-powered search has created a new paradigm where traditional SEO strategies are becoming obsolete. Brands that adapt now will dominate their markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {transformationStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              From SEO Provider to AI-Native Strategic Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over the past 18 months, SomebodyDigital has transformed from a traditional SEO agency into an AI-native strategic partner, investing heavily in research and developing new methodologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {evolutionPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Enhanced SEO Ecosystem */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The AI-Enhanced SEO Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Replacing the Traditional "4 Pillars" with Integrated AI-Native Optimization
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our AI-Enhanced SEO Ecosystem represents a complete reimagining of search optimization for the AI era. Instead of siloed optimization approaches, we use an integrated framework where every element reinforces every other element.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-50 ${service.color}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link to={service.path}>
                      <Button variant="outline">
                        Learn More About {service.title.split(' ')[0]} →
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ecosystem Benefits */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Our Integrated Ecosystem Delivers Superior Results
            </h3>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Unlike traditional SEO approaches that treat each element separately, our AI-Enhanced SEO Ecosystem creates synergistic effects where every component amplifies the others, delivering compound benefits that are difficult for competitors to replicate.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {ecosystemBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore the Complete Framework →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive SEO Services for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services span from foundational SEO excellence to cutting-edge AI-era specializations, ensuring comprehensive coverage of your search optimization needs.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Essential optimization services that form the foundation of search success
            </p>
            <Link to="/">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Future-Proof Your Search Strategy?
          </h2>
          <p className="text-xl mb-8">
            Discover how our AI-enhanced SEO ecosystem can prepare your brand for the future of search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Get Your AI-Readiness Assessment
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
              Schedule Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;

