import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, TrendingUp, Brain, Zap, CheckCircle, Settings, FileText, Target } from 'lucide-react';

const FutureReady = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Evolution Adaptation',
      description: 'Strategies that adapt to the rapid evolution of AI-powered search engines and emerging technologies.'
    },
    {
      icon: TrendingUp,
      title: 'Emerging Technology Preparation',
      description: 'Position your brand for success with voice search, conversational AI, and next-generation search interfaces.'
    },
    {
      icon: Zap,
      title: 'Anticipatory Optimization',
      description: 'Proactive optimization approaches that prepare for changes before they become mainstream.'
    }
  ];

  const benefits = [
    'Competitive advantage through early adoption',
    'Reduced risk from algorithm changes',
    'Sustainable long-term search visibility',
    'Adaptability to emerging search behaviors',
    'Future-proof optimization strategies'
  ];

  const process = [
    {
      step: '01',
      title: 'Future Landscape Analysis',
      description: 'Research and analyze emerging trends in AI and search technology to identify opportunities.'
    },
    {
      step: '02',
      title: 'Adaptive Strategy Development',
      description: 'Create flexible optimization strategies that can evolve with changing search landscapes.'
    },
    {
      step: '03',
      title: 'Implementation & Testing',
      description: 'Deploy future-ready optimizations and test their effectiveness across emerging platforms.'
    },
    {
      step: '04',
      title: 'Continuous Evolution',
      description: 'Monitor technological developments and continuously adapt strategies for optimal performance.'
    }
  ];

  const technologies = [
    {
      title: 'Voice Search Optimization',
      description: 'Prepare for the growing adoption of voice-activated search and conversational queries.',
      icon: '🎤'
    },
    {
      title: 'Conversational AI Interfaces',
      description: 'Optimize for chatbots, virtual assistants, and AI-powered customer service platforms.',
      icon: '💬'
    },
    {
      title: 'Visual Search Technology',
      description: 'Position your content for image-based search and visual discovery platforms.',
      icon: '👁️'
    },
    {
      title: 'Augmented Reality Search',
      description: 'Prepare for AR-enhanced search experiences and spatial computing interfaces.',
      icon: '🥽'
    },
    {
      title: 'Multimodal AI Systems',
      description: 'Optimize for AI systems that process text, images, audio, and video simultaneously.',
      icon: '🔄'
    },
    {
      title: 'Personalized AI Assistants',
      description: 'Ensure visibility in personalized AI recommendations and custom assistant responses.',
      icon: '🤖'
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
            <span className="text-gray-900">Future-Ready Optimization</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Rocket className="h-12 w-12 text-purple-300 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Future-Ready Optimization
                </h1>
                <p className="text-xl text-purple-200">
                  Anticipatory AI-Era Strategies
                </p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
              Stay ahead of the curve with optimization strategies designed for tomorrow's search landscape. Our anticipatory approach ensures your brand remains visible as AI and search technology evolve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sb-orange hover:bg-orange-600 text-white">
                Explore Future Strategies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Get Future-Readiness Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Future-Ready Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Future-Ready Optimization Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The pace of change in AI and search technology is accelerating. Organizations that wait for changes to become mainstream risk losing competitive advantage and search visibility.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our future-ready approach identifies emerging trends early and implements adaptive strategies that position your brand for success in tomorrow's search landscape.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Future-Ready Components</h3>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-purple-100 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-purple-600" />
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

      {/* Emerging Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emerging Technologies We Optimize For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with optimization for next-generation search and AI technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Future-Ready Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to anticipatory optimization and future-proofing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Future-Ready Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations that adopt future-ready strategies gain significant competitive advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Adopter Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sb-green mr-2 mt-0.5 flex-shrink-0" />
                  First-mover advantage in emerging search channels
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sb-green mr-2 mt-0.5 flex-shrink-0" />
                  Reduced competition in new optimization areas
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sb-green mr-2 mt-0.5 flex-shrink-0" />
                  Enhanced brand perception as innovation leader
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sb-green mr-2 mt-0.5 flex-shrink-0" />
                  Better preparation for algorithm changes
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-Term Protection</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sb-green mr-2 mt-0.5 flex-shrink-0" />
                  Reduced risk from sudden algorithm changes
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sb-green mr-2 mt-0.5 flex-shrink-0" />
                  Sustainable competitive advantage
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sb-green mr-2 mt-0.5 flex-shrink-0" />
                  Adaptable optimization infrastructure
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sb-green mr-2 mt-0.5 flex-shrink-0" />
                  Future-proof investment in SEO
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Future-Ready Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Future-ready optimization builds upon our core AI-era services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical SEO</h3>
              <p className="text-gray-600 mb-4">Future-ready technical infrastructure that adapts to emerging AI technologies.</p>
              <Link to="/services/seo/technical-optimization">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Strategy</h3>
              <p className="text-gray-600 mb-4">Content frameworks that evolve with changing search behaviors and AI capabilities.</p>
              <Link to="/services/seo/content-strategy">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital PR</h3>
              <p className="text-gray-600 mb-4">Authority building strategies that remain effective across emerging AI platforms.</p>
              <Link to="/services/seo/digital-pr">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Future-Proof Your SEO Strategy?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get ahead of the competition with optimization strategies designed for tomorrow's search landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sb-orange hover:bg-orange-600">
              Get Future-Readiness Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureReady;

