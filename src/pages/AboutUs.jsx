import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Target, TrendingUp, Brain, Lightbulb, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutUs = () => {
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const awards = [
    { name: 'Marketing Excellence Award', year: '2024' },
    { name: 'Digital Innovation Award', year: '2023' },
    { name: 'Best SEO Agency', year: '2023' },
    { name: 'Growth Marketing Award', year: '2022' },
    { name: 'Client Satisfaction Award', year: '2022' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/200/200',
      expertise: 'AI-Era Strategy & Digital Transformation',
      bio: 'Leading SomebodyDigital\'s evolution into AI-native optimization with 15+ years in digital marketing.',
      specialties: ['AI Strategy', 'Digital Transformation', 'Executive Leadership']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of AI-Enhanced SEO',
      image: '/api/placeholder/200/200',
      expertise: 'Generative Engine Optimization & Technical SEO',
      bio: 'Pioneering GEO methodologies and AI-optimized technical foundations for future-ready search.',
      specialties: ['GEO', 'Technical SEO', 'AI Systems']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Director of Digital PR',
      image: '/api/placeholder/200/200',
      expertise: 'AI Attribution & Authority Building',
      bio: 'Developing expertise signals and media relationships that AI systems recognize and cite.',
      specialties: ['Digital PR', 'Authority Building', 'Media Relations']
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Content Strategy Lead',
      image: '/api/placeholder/200/200',
      expertise: 'Contextual Content & E-E-A-T Optimization',
      bio: 'Creating expert-level content that demonstrates authority and gets cited by AI systems.',
      specialties: ['Content Strategy', 'E-E-A-T', 'AI Content']
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Analytics & Measurement',
      image: '/api/placeholder/200/200',
      expertise: 'AI-Era KPIs & Performance Tracking',
      bio: 'Developing modern measurement frameworks for AI-powered search optimization.',
      specialties: ['Analytics', 'KPI Development', 'Performance Tracking']
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Entity Optimization Specialist',
      image: '/api/placeholder/200/200',
      expertise: 'Entity Footprint & Knowledge Graph',
      bio: 'Building comprehensive entity recognition across digital ecosystems for AI understanding.',
      specialties: ['Entity SEO', 'Knowledge Graphs', 'Structured Data']
    }
  ];

  const evolutionMilestones = [
    {
      year: '2019',
      title: 'Traditional SEO Excellence',
      description: 'Established as a leading SEO agency with proven keyword-focused strategies.'
    },
    {
      year: '2021',
      title: 'AI Research Initiative',
      description: 'Began intensive research into AI-powered search and algorithm changes.'
    },
    {
      year: '2023',
      title: 'Digital PR Integration',
      description: 'Pioneered Digital PR as the cornerstone of AI-era authority building.'
    },
    {
      year: '2024',
      title: 'AI-Native Transformation',
      description: 'Complete evolution to AI-enhanced SEO ecosystem and strategic partnership model.'
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Passion Means We Won\'t Give Up',
      description: 'We believe great work comes from passion. When we\'re passionate about your success, we go the extra mile to get you the results you want.'
    },
    {
      icon: Users,
      title: 'In-House Insights with Agency Diversity',
      description: 'Access to a diverse team of experts with varied backgrounds and specializations, providing comprehensive solutions.'
    },
    {
      icon: Globe,
      title: 'Lean, Flexible and Accessible',
      description: 'Our agile approach means faster decisions, direct access to senior team members, and strategies that evolve with your needs.'
    }
  ];

  const brands = [
    'Acura', 'Deltek', 'Lannox', 'APRIA', 'Lofta', 'Moment'
  ];

  const toggleCardFlip = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const nextAward = () => {
    setCurrentAwardIndex((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setCurrentAwardIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                ABOUT US
              </h1>
              <p className="text-xl mb-6">
                In short? We'll do the heavy lifting. You enjoy the results.
              </p>
              <p className="text-lg mb-8 opacity-90">
                SomebodyDigital has evolved from a traditional SEO agency into an AI-native strategic partner. We don't just adapt to search algorithm changes—we anticipate them, positioning your brand for the future of AI-powered search.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Discover Our Evolution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              {/* Pug mascot placeholder - would need actual image */}
              <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <div className="text-6xl">🐶</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-blue-600/20"></div>
      </section>

      {/* Vendor to Partner Transformation */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              From Vendor to Strategic Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The AI era demands more than traditional agency relationships. We've evolved beyond service delivery to become your strategic partner in navigating the future of search.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  Traditional Vendor Model
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Reactive to algorithm changes and market shifts
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Siloed service delivery with limited integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Focus on tactical execution over strategic vision
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Limited insight into competitive landscape
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Traditional metrics that miss AI-era opportunities
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  Strategic Partnership Model
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Anticipatory strategies that prepare for AI evolution
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Integrated ecosystem approach across all touchpoints
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Strategic vision aligned with business objectives
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Deep competitive intelligence and market positioning
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    AI-era KPIs that measure future-ready performance
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What Strategic Partnership Means for Your Business
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proactive Innovation</h4>
                <p className="text-gray-600 text-sm">We don't wait for changes—we anticipate them and position your brand ahead of the curve.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Integrated Growth</h4>
                <p className="text-gray-600 text-sm">Every strategy connects to drive holistic business growth, not just individual metrics.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">True Collaboration</h4>
                <p className="text-gray-600 text-sm">We become an extension of your team, deeply understanding your business and market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Evolution in the AI Era
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional SEO excellence to AI-native strategic partnership - our journey of transformation and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {evolutionMilestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
                <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              As one of marketing that we can get you awards where you deserve it.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-center space-x-8">
              <button 
                onClick={prevAward}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 flex-1 max-w-4xl">
                {awards.map((award, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-lg p-6 shadow-lg text-center transition-all duration-300 ${
                      index === currentAwardIndex ? 'scale-105 border-2 border-blue-500' : 'opacity-70'
                    }`}
                  >
                    <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{award.name}</h3>
                    <p className="text-gray-600">{award.year}</p>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={nextAward}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Flip Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our AI-Era Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines traditional marketing expertise with cutting-edge AI-era specializations to deliver future-ready strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="relative h-80 perspective-1000">
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    flippedCards[member.id] ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleCardFlip(member.id)}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.expertise}</p>
                      <div className="mt-4 text-center">
                        <span className="text-xs text-gray-500">Click to learn more</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg shadow-lg text-white p-6">
                    <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                    <p className="text-blue-100 text-sm mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="bg-white/20 px-2 py-1 rounded text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-xs text-blue-100">Click to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Bring to the Ring */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Bring to the Ring
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg inline-block mb-6">
                <h2 className="text-2xl font-bold">Why Us?</h2>
              </div>
              <p className="text-lg mb-6">
                As a hybrid competitive intelligence and digital marketing services expert, we're uniquely positioned to understand both your market landscape and the AI-powered search evolution.
              </p>
              <p className="text-lg mb-6">
                Our award-winning approach means deep insight into the competitive forces that shape your market, combined with cutting-edge AI-era optimization strategies that position you ahead of algorithm changes.
              </p>
              <p className="text-lg">
                We're not just another agency—we're your strategic partner in navigating the AI transformation of search.
              </p>
            </div>
            <div className="relative">
              {/* Team photo placeholder */}
              <div className="bg-white/20 rounded-lg p-8 text-center">
                <Users className="h-24 w-24 mx-auto mb-4 text-white/80" />
                <p className="text-white/80">Team Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We've Optimized */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Brands We've Optimized
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-gray-600 font-semibold">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-400 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* Flying pug mascot placeholder */}
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-4xl">🐶✨</div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Global Digital Marketing Services
          </h2>
          <p className="text-xl mb-8">
            Ready to transform your search strategy for the AI era? Let's discuss how our evolved approach can prepare your brand for the future of search.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg font-semibold">
            Book a Free Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

