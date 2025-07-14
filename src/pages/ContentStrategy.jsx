import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Users, Brain, Lightbulb, CheckCircle, Target, Settings, Rocket } from 'lucide-react';

const ContentStrategy = () => {
  const features = [
    {
      icon: Brain,
      title: 'Authority-Focused Content',
      description: 'Content that demonstrates expertise and gets cited by AI systems rather than just targeting keywords.'
    },
    {
      icon: Users,
      title: 'Expert-Level Insights',
      description: 'Content that showcases unique knowledge and experience that only your organization can provide.'
    },
    {
      icon: Lightbulb,
      title: 'AI Citation Optimization',
      description: 'Structured content designed to be easily understood and cited by AI-powered search engines.'
    }
  ];

  const benefits = [
    'Increased likelihood of AI citations and mentions',
    'Enhanced authority signals for search engines',
    'Content that converts prospects into customers',
    'Thought leadership positioning in your industry',
    'Sustainable competitive advantage through expertise'
  ];

  const process = [
    {
      step: '01',
      title: 'Authority Assessment',
      description: 'Evaluate current content authority and identify unique expertise opportunities.'
    },
    {
      step: '02',
      title: 'Content Architecture',
      description: 'Design content frameworks that demonstrate expertise and support AI understanding.'
    },
    {
      step: '03',
      title: 'Expert Content Creation',
      description: 'Develop authoritative content that showcases unique insights and industry knowledge.'
    },
    {
      step: '04',
      title: 'Performance & Optimization',
      description: 'Monitor AI citations and optimize content for maximum authority impact.'
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
            <span className="text-gray-900">Content Strategy</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <FileText className="h-12 w-12 text-green-300 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Content Strategy
                </h1>
                <p className="text-xl text-green-200">
                  Contextual Content Strategy
                </p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              Create content that AI systems cite and trust. Our authority-focused content strategy positions your brand as the definitive source in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sb-orange hover:bg-orange-600 text-white">
                Develop Content Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
                View Content Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Content Strategy Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Content That AI Systems Cite and Trust
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The AI era demands a fundamental shift from keyword-focused content to authority-based content that demonstrates genuine expertise and provides unique value.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our content strategy focuses on creating the type of expert-level content that AI systems recognize as authoritative and cite in their responses.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Strategy Components</h3>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-green-100 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-green-600" />
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

      {/* Content Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Authority-First Content Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to creating content that establishes and reinforces your expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Content That Builds Authority
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic content types designed to demonstrate expertise and earn AI citations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research & Data Studies</h3>
              <p className="text-gray-600 mb-4">
                Original research and data analysis that provides unique insights your industry can't find elsewhere.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Industry benchmarking studies</li>
                <li>• Original survey research</li>
                <li>• Data-driven trend analysis</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Commentary</h3>
              <p className="text-gray-600 mb-4">
                Thought leadership content that positions your team as the go-to experts in your field.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Industry trend analysis</li>
                <li>• Expert predictions and insights</li>
                <li>• Commentary on market changes</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Guides</h3>
              <p className="text-gray-600 mb-4">
                In-depth resources that become the definitive reference for complex topics in your industry.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Technical implementation guides</li>
                <li>• Best practice frameworks</li>
                <li>• Strategic planning resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Content Strategy Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Content strategy works best when integrated with our other AI-era services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical SEO</h3>
              <p className="text-gray-600 mb-4">Technical foundations ensure your authoritative content is properly understood by AI systems.</p>
              <Link to="/services/seo/technical-optimization">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital PR</h3>
              <p className="text-gray-600 mb-4">Expert content supports media relationships and amplifies your authority signals.</p>
              <Link to="/services/seo/digital-pr">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Ready Optimization</h3>
              <p className="text-gray-600 mb-4">Content frameworks that adapt to emerging AI technologies and search behaviors.</p>
              <Link to="/services/seo/future-ready-optimization">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Authority Through Content?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Develop a content strategy that positions your brand as the definitive authority in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sb-orange hover:bg-orange-600">
              Develop Content Strategy
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentStrategy;

