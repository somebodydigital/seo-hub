import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Newspaper, Award, CheckCircle, Settings, FileText, Rocket } from 'lucide-react';

const DigitalPR = () => {
  const features = [
    {
      icon: Users,
      title: 'Media Relationship Development',
      description: 'Strategic cultivation of relationships with journalists and industry publications that AI systems recognize as authoritative.'
    },
    {
      icon: Award,
      title: 'Expert Positioning Strategy',
      description: 'Position your team as industry thought leaders through strategic media placements and expert commentary.'
    },
    {
      icon: Newspaper,
      title: 'AI-Era Authority Building',
      description: 'Build the type of authority signals that AI systems recognize and cite in their responses.'
    }
  ];

  const benefits = [
    'Increased media mentions and industry recognition',
    'Enhanced authority signals for AI systems',
    'Improved likelihood of AI citations',
    'Stronger brand credibility and trust',
    'Sustainable competitive advantage through expertise'
  ];

  const process = [
    {
      step: '01',
      title: 'Authority Audit',
      description: 'Assess current media presence and identify opportunities for expert positioning.'
    },
    {
      step: '02',
      title: 'Media Strategy Development',
      description: 'Create targeted outreach strategies for relevant publications and journalists.'
    },
    {
      step: '03',
      title: 'Expert Content Creation',
      description: 'Develop thought leadership content and expert commentary for media placement.'
    },
    {
      step: '04',
      title: 'Relationship Cultivation',
      description: 'Build and maintain long-term relationships with key media contacts and industry influencers.'
    }
  ];

  const results = [
    {
      metric: '300%',
      description: 'Average increase in AI citations'
    },
    {
      metric: '85%',
      description: 'Inclusion rate in AI overviews'
    },
    {
      metric: '200%',
      description: 'Improvement in authority signal strength'
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
            <span className="text-gray-900">Digital PR</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Target className="h-12 w-12 text-orange-300 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Digital PR
                </h1>
                <p className="text-xl text-orange-200">
                  AI Attribution & Authority Building
                </p>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Build the media relationships and authority signals that AI systems recognize and cite. Our Digital PR strategy positions your brand as the definitive expert in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100">
                Start Digital PR Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results in the AI Era
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Digital PR strategies deliver measurable improvements in AI visibility and authority recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-8">
                <div className="text-4xl md:text-5xl font-bold text-sb-orange mb-2">
                  {result.metric}
                </div>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital PR Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Digital PR is Essential for AI-Era Authority
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AI systems prioritize content from recognized experts and authoritative sources. Traditional link building is being replaced by relationship-driven authority development that AI systems can recognize and trust.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our Digital PR approach focuses on building the type of media relationships and expert positioning that creates lasting authority signals in the AI era.
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
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Digital PR Strategy Components</h3>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-orange-100 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6 text-orange-600" />
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital PR Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building media relationships and authority signals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-sb-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital PR Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Digital PR strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Technology Company</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Citations Increase</span>
                  <span className="font-bold text-sb-orange">400%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lead Growth</span>
                  <span className="font-bold text-sb-orange">250%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Industry Expert Status</span>
                  <span className="font-bold text-sb-green">Achieved</span>
                </div>
              </div>
              <p className="text-gray-600">
                Through strategic media relationships and expert positioning, this client became the go-to source for industry commentary, resulting in significant increases in AI citations and lead generation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Services Firm</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Speaking Opportunities</span>
                  <span className="font-bold text-sb-orange">300%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Client Inquiries</span>
                  <span className="font-bold text-sb-orange">200%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Authority Recognition</span>
                  <span className="font-bold text-sb-green">Established</span>
                </div>
              </div>
              <p className="text-gray-600">
                Our Digital PR strategy positioned this firm's partners as industry thought leaders, leading to increased speaking opportunities and client inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital PR Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Digital PR works best when integrated with our other AI-era services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical SEO</h3>
              <p className="text-gray-600 mb-4">Technical foundations ensure media coverage is properly indexed and understood by AI systems.</p>
              <Link to="/services/seo/technical-optimization">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Strategy</h3>
              <p className="text-gray-600 mb-4">Expert content supports media relationships and provides material for thought leadership positioning.</p>
              <Link to="/services/seo/content-strategy">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Ready Optimization</h3>
              <p className="text-gray-600 mb-4">Authority signals that adapt to emerging AI technologies and search behaviors.</p>
              <Link to="/services/seo/future-ready-optimization">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sb-orange text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build AI-Era Authority Through Digital PR?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Develop the media relationships and expert positioning that AI systems recognize and cite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100">
              Start Digital PR Strategy
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-900">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalPR;

