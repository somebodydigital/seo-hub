import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, FileText, Target, Rocket, Bot, Network, Award, BarChart3 } from 'lucide-react';

const Home = () => {
  const coreServices = [
    {
      icon: Settings,
      title: 'Technical SEO',
      subtitle: 'AI-Optimized Technical Foundation',
      description: 'Advanced structured data, entity markup, and technical signals that help AI systems understand and trust your content.',
      path: '/services/seo/technical-optimization',
      color: 'text-blue-600'
    },
    {
      icon: FileText,
      title: 'Content Strategy',
      subtitle: 'Contextual Content Strategy',
      description: 'Expert-level content that demonstrates authority and gets cited by AI systems rather than just targeting keywords.',
      path: '/services/seo/content-strategy',
      color: 'text-green-600'
    },
    {
      icon: Target,
      title: 'Digital PR',
      subtitle: 'AI Attribution & Authority Building',
      description: 'Strategic development of expertise signals and media relationships that AI systems recognize and cite.',
      path: '/services/seo/digital-pr',
      color: 'text-orange-600',
      highlighted: true
    },
    {
      icon: Rocket,
      title: 'Future-Ready Optimization',
      subtitle: 'Anticipatory AI-Era Strategies',
      description: 'Anticipatory strategies that adapt to AI evolution and position for emerging search technologies.',
      path: '/services/seo/future-ready-optimization',
      color: 'text-purple-600'
    }
  ];

  const aiEraServices = [
    {
      icon: Bot,
      title: 'Generative Engine Optimization',
      subtitle: 'AI-Powered Search Result Optimization',
      description: 'Optimize for AI-powered answer engines and generative search results. Ensure your content is cited by ChatGPT, Bard, and other AI systems.',
      path: '/services/seo/generative-engine-optimization',
      color: 'text-indigo-600'
    },
    {
      icon: Network,
      title: 'Entity Footprint Optimization',
      subtitle: 'Comprehensive Entity Recognition',
      description: 'Build comprehensive entity recognition across the digital ecosystem with knowledge graph optimization and authority development.',
      path: '/services/seo/entity-footprint-optimization',
      color: 'text-cyan-600'
    },
    {
      icon: Award,
      title: 'E-E-A-T Enhancement',
      subtitle: 'Experience, Expertise, Authority, Trust',
      description: 'Demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness at scale with comprehensive E-E-A-T optimization.',
      path: '/services/seo/eeat-optimization',
      color: 'text-emerald-600'
    },
    {
      icon: BarChart3,
      title: 'AI-Era Measurement',
      subtitle: 'Modern KPI Framework',
      description: 'Measure what matters in the AI-powered search landscape with advanced analytics and authority signal tracking.',
      path: '/services/seo/ai-era-measurement',
      color: 'text-rose-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Enhanced SEO Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive SEO services designed for the AI era. From technical foundations to advanced specializations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sb-orange hover:bg-orange-600 text-white">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Get AI-Readiness Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential optimization services that form the foundation of search success in the AI era
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg border-2 p-8 hover:shadow-lg transition-all duration-300 ${
                    service.highlighted ? 'border-sb-orange shadow-md' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${service.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className={`text-lg font-medium mb-3 ${service.highlighted ? 'text-sb-orange' : 'text-gray-600'}`}>
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <Link to={service.path}>
                        <Button 
                          variant={service.highlighted ? "default" : "outline"}
                          className={service.highlighted ? "bg-sb-orange hover:bg-orange-600" : ""}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Era Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI-Era Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized optimization services for businesses ready to lead in the AI-powered search landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiEraServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg border-2 border-gray-200 p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${service.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg font-medium text-gray-600 mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <Link to={service.path}>
                        <Button variant="outline">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your SEO Strategy?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how our AI-enhanced SEO services can prepare your brand for the future of search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sb-blue-primary hover:bg-blue-800">
              Get Your Free Assessment
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

