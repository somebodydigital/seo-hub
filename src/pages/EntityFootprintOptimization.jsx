import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Globe, Users, TrendingUp, CheckCircle, Database, Search, FileText, Rocket } from 'lucide-react';

const EntityFootprintOptimization = () => {
  const features = [
    {
      icon: Database,
      title: 'Knowledge Graph Optimization',
      description: 'Strategic optimization of your presence in Google Knowledge Graph and other knowledge bases.'
    },
    {
      icon: Network,
      title: 'Entity Relationship Mapping',
      description: 'Comprehensive mapping and optimization of entity relationships across the digital ecosystem.'
    },
    {
      icon: Globe,
      title: 'Cross-Platform Entity Consistency',
      description: 'Ensure consistent entity recognition across all major platforms and search engines.'
    },
    {
      icon: Users,
      title: 'Authority Entity Development',
      description: 'Build and strengthen your brand as a recognized authority entity in your industry.'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Entity Audit & Analysis',
      description: 'Comprehensive analysis of your current entity footprint across all major platforms and knowledge bases.'
    },
    {
      number: '02',
      title: 'Knowledge Graph Strategy',
      description: 'Strategic development of your knowledge graph presence with optimized entity relationships.'
    },
    {
      number: '03',
      title: 'Cross-Platform Implementation',
      description: 'Implementation of consistent entity signals across all relevant platforms and directories.'
    },
    {
      number: '04',
      title: 'Authority Monitoring',
      description: 'Ongoing monitoring and optimization of entity recognition and authority signals.'
    }
  ];

  const benefits = [
    'Enhanced recognition by AI systems and search engines',
    'Improved knowledge panel and rich snippet appearances',
    'Stronger brand authority and industry positioning',
    'Increased likelihood of entity-based search results',
    'Better performance in voice and conversational search'
  ];

  const integrations = [
    {
      service: 'Technical SEO',
      description: 'Structured data and schema markup support entity recognition'
    },
    {
      service: 'Digital PR',
      description: 'Media mentions and citations strengthen entity authority'
    },
    {
      service: 'Content Strategy',
      description: 'Expert content reinforces entity expertise and relationships'
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
                <span className="text-gray-900">Entity Footprint Optimization</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Network className="h-16 w-16 text-cyan-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Entity Footprint Optimization</h1>
              <p className="text-xl text-cyan-200">Comprehensive Entity Recognition</p>
            </div>
          </div>
          
          <p className="text-xl mb-8 max-w-3xl">
            Build comprehensive entity recognition across the digital ecosystem. Our entity optimization strategies ensure your brand is recognized, understood, and trusted by AI systems and search engines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Optimize Entity Footprint
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-3 text-lg">
              Entity Analysis Report
            </Button>
          </div>
        </div>
      </section>

      {/* Why Entity Optimization Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Entity Footprint Optimization Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Search engines and AI systems increasingly rely on entity recognition to understand and categorize content. Your entity footprint determines how these systems perceive your brand's authority, expertise, and relationships.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                A strong entity footprint ensures consistent recognition across platforms, improved knowledge panel appearances, and enhanced performance in entity-based search results and AI responses.
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
            
            <div className="bg-cyan-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Entity Optimization Components</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-cyan-100 rounded-lg p-3 mr-4">
                      <feature.icon className="h-6 w-6 text-cyan-600" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Entity Optimization Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building and optimizing your entity presence across the digital ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="bg-cyan-100 text-cyan-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Graph Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Knowledge Graph Mastery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic optimization of your presence in knowledge graphs and entity databases that power modern search.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Database className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Knowledge Graph</h3>
              <p className="text-gray-600">Optimize your presence in Google's knowledge graph for enhanced search visibility and knowledge panels.</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Entity Relationships</h3>
              <p className="text-gray-600">Build strategic entity relationships that reinforce your authority and expertise in your industry.</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Platform Consistency</h3>
              <p className="text-gray-600">Ensure consistent entity recognition across all major platforms and knowledge bases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated Entity Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entity optimization works synergistically with our other services to create a comprehensive authority presence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{integration.service}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Entity Recognition Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our entity optimization strategies deliver measurable improvements in recognition and authority signals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-cyan-600 mb-2">350%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Knowledge Panel Appearances</div>
              <div className="text-gray-600">Increase in knowledge panel and rich snippet visibility</div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-cyan-600 mb-2">90%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Entity Recognition Rate</div>
              <div className="text-gray-600">Consistent entity recognition across major platforms</div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold text-cyan-600 mb-2">180%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Voice Search Performance</div>
              <div className="text-gray-600">Improvement in voice and conversational search results</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Entity Authority?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Establish comprehensive entity recognition that positions your brand as the definitive authority in your industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Start Entity Optimization
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              Get Entity Audit
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntityFootprintOptimization;

