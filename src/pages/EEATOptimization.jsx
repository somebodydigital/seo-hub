import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, User, BookOpen, Shield, CheckCircle, Star, Users, FileText, Rocket } from 'lucide-react';

const EEATOptimization = () => {
  const features = [
    {
      icon: User,
      title: 'Experience Demonstration',
      description: 'Showcase real-world experience and practical knowledge through comprehensive content and case studies.'
    },
    {
      icon: BookOpen,
      title: 'Expertise Development',
      description: 'Build and demonstrate deep subject matter expertise through authoritative content and thought leadership.'
    },
    {
      icon: Award,
      title: 'Authoritativeness Building',
      description: 'Establish industry authority through strategic positioning, recognition, and expert validation.'
    },
    {
      icon: Shield,
      title: 'Trustworthiness Enhancement',
      description: 'Build comprehensive trust signals through transparency, credibility markers, and user validation.'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'E-E-A-T Assessment',
      description: 'Comprehensive evaluation of your current Experience, Expertise, Authoritativeness, and Trustworthiness signals.'
    },
    {
      number: '02',
      title: 'Authority Strategy Development',
      description: 'Strategic development of E-E-A-T enhancement plan tailored to your industry and audience.'
    },
    {
      number: '03',
      title: 'Content & Signal Implementation',
      description: 'Implementation of E-E-A-T signals through content, author profiles, and credibility markers.'
    },
    {
      number: '04',
      title: 'Trust Signal Monitoring',
      description: 'Ongoing monitoring and optimization of E-E-A-T signals and authority recognition.'
    }
  ];

  const benefits = [
    'Enhanced Google E-E-A-T compliance and recognition',
    'Improved search rankings for competitive keywords',
    'Increased user trust and credibility',
    'Better performance in YMYL (Your Money Your Life) topics',
    'Stronger resistance to algorithm updates'
  ];

  const eatComponents = [
    {
      title: 'Experience',
      description: 'Demonstrate real-world experience through case studies, testimonials, and practical examples.',
      icon: User,
      color: 'text-emerald-600'
    },
    {
      title: 'Expertise',
      description: 'Showcase deep knowledge through comprehensive content, research, and thought leadership.',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      title: 'Authoritativeness',
      description: 'Build industry recognition through media mentions, expert citations, and peer validation.',
      icon: Award,
      color: 'text-purple-600'
    },
    {
      title: 'Trustworthiness',
      description: 'Establish trust through transparency, security, accuracy, and user validation.',
      icon: Shield,
      color: 'text-orange-600'
    }
  ];

  const integrations = [
    {
      service: 'Content Strategy',
      description: 'Expert content development that demonstrates E-E-A-T principles'
    },
    {
      service: 'Digital PR',
      description: 'Media relationships and citations that build authoritativeness'
    },
    {
      service: 'Technical SEO',
      description: 'Technical trust signals and security implementations'
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
                <span className="text-gray-900">E-E-A-T Enhancement</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Award className="h-16 w-16 text-emerald-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">E-E-A-T Enhancement</h1>
              <p className="text-xl text-emerald-200">Experience, Expertise, Authority, Trust</p>
            </div>
          </div>
          
          <p className="text-xl mb-8 max-w-3xl">
            Demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness at scale. Our comprehensive E-E-A-T optimization ensures your content meets Google's highest quality standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Enhance E-E-A-T Signals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 text-lg">
              Get E-E-A-T Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Why E-E-A-T Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why E-E-A-T Enhancement Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, Trustworthiness) are fundamental to search quality evaluation. These signals determine how search engines assess content quality and authority.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Strong E-E-A-T signals are essential for ranking in competitive markets, especially for YMYL (Your Money Your Life) topics. Our comprehensive approach ensures your content demonstrates the highest quality standards.
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
            
            <div className="bg-emerald-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">E-E-A-T Components</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                      <feature.icon className="h-6 w-6 text-emerald-600" />
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

      {/* E-E-A-T Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The E-E-A-T Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to building and demonstrating the four pillars of content quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eatComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className={`bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <component.icon className={`h-8 w-8 ${component.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our E-E-A-T Enhancement Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building comprehensive E-E-A-T signals across your digital presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-emerald-100 text-emerald-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Trust Signal Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the credibility markers and trust signals that search engines and users recognize.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Author Authority</h3>
              <p className="text-gray-600">Comprehensive author profiles, credentials, and expertise demonstration across all content.</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Quality</h3>
              <p className="text-gray-600">High-quality, well-researched content that demonstrates expertise and provides genuine value.</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Credibility</h3>
              <p className="text-gray-600">Technical trust signals, security implementations, and transparency markers that build user confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated E-E-A-T Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              E-E-A-T enhancement works synergistically with our other services to create comprehensive authority.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven E-E-A-T Enhancement Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our E-E-A-T optimization strategies deliver measurable improvements in search performance and user trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-emerald-600 mb-2">275%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">YMYL Keyword Rankings</div>
              <div className="text-gray-600">Improvement in Your Money Your Life topic rankings</div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Content Quality Score</div>
              <div className="text-gray-600">Content meeting highest E-E-A-T quality standards</div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-emerald-600 mb-2">160%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">User Trust Metrics</div>
              <div className="text-gray-600">Improvement in user engagement and trust signals</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Unshakeable Authority?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Establish comprehensive E-E-A-T signals that position your brand as the most trusted authority in your industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Start E-E-A-T Enhancement
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              Download E-E-A-T Guide
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EEATOptimization;

