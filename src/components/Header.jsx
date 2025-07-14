import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const coreServices = [
    { name: 'Technical SEO', path: '/services/seo/technical-optimization', description: 'AI-Optimized Technical Foundation' },
    { name: 'Content Strategy', path: '/services/seo/content-strategy', description: 'Contextual Content Strategy' },
    { name: 'Digital PR', path: '/services/seo/digital-pr', description: 'AI Attribution & Authority Building' },
    { name: 'Future-Ready Optimization', path: '/services/seo/future-ready-optimization', description: 'Anticipatory AI-Era Strategies' },
  ];

  const aiEraServices = [
    { name: 'Generative Engine Optimization', path: '/services/seo/generative-engine-optimization', description: 'AI-Powered Search Result Optimization' },
    { name: 'Entity Footprint Optimization', path: '/services/seo/entity-footprint-optimization', description: 'Comprehensive Entity Recognition' },
    { name: 'E-E-A-T Enhancement', path: '/services/seo/eeat-optimization', description: 'Experience, Expertise, Authority, Trust' },
    { name: 'AI-Era Measurement', path: '/services/seo/ai-era-measurement', description: 'Modern KPI Framework' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-sb-blue-primary">
              SomebodyDigital
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sb-blue-primary transition-colors">
              What We Do
            </Link>
            
            {/* SEO Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link 
                to="/services/seo"
                className="flex items-center text-gray-700 hover:text-sb-blue-primary transition-colors"
              >
                SEO Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {/* SEO Hub Link */}
                  <Link to="/services/seo" className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100">
                    <div className="font-medium text-gray-900">View All SEO Services</div>
                    <div className="text-sm text-gray-600">Complete AI-Enhanced SEO Hub</div>
                  </Link>
                  
                  {/* Core SEO Services */}
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="font-semibold text-gray-900 text-sm">Core SEO Services</div>
                  </div>
                  {coreServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-600">{service.description}</div>
                    </Link>
                  ))}
                  
                  {/* AI-Era Services */}
                  <div className="px-4 py-2 border-b border-gray-100 mt-2">
                    <div className="font-semibold text-gray-900 text-sm">AI-Era Services</div>
                  </div>
                  {aiEraServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-600">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/" className="text-gray-700 hover:text-sb-blue-primary transition-colors">
              Paid Media
            </Link>
            <Link to="/" className="text-gray-700 hover:text-sb-blue-primary transition-colors">
              Analytics
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-sb-blue-primary transition-colors">
              About Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-sb-orange hover:bg-orange-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-sb-blue-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-sb-blue-primary">
                What We Do
              </Link>
              
              <div className="space-y-2">
                <Link 
                  to="/services/seo"
                  className="block font-medium text-gray-900 hover:text-sb-blue-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SEO Services
                </Link>
                
                <div className="pl-2">
                  <div className="font-medium text-gray-700 text-sm mb-1">Core SEO Services</div>
                  {coreServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block pl-4 py-1 text-gray-600 hover:text-sb-blue-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                
                <div className="pl-2 mt-2">
                  <div className="font-medium text-gray-700 text-sm mb-1">AI-Era Services</div>
                  {aiEraServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block pl-4 py-1 text-gray-600 hover:text-sb-blue-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/" className="block text-gray-700 hover:text-sb-blue-primary">
                Paid Media
              </Link>
              <Link to="/" className="block text-gray-700 hover:text-sb-blue-primary">
                Analytics
              </Link>
              <Link to="/about-us" className="block text-gray-700 hover:text-sb-blue-primary">
                About Us
              </Link>
              
              <Button className="w-full bg-sb-orange hover:bg-orange-600 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

