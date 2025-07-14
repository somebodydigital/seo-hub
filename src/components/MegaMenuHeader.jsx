import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Settings, FileText, Target, Rocket, Brain, Database, Users, Award, BookOpen, Download, Lightbulb } from 'lucide-react';

const MegaMenuHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);
  const resourcesTimeoutRef = useRef(null);

  const coreServices = [
    { name: 'Technical SEO', path: '/services/seo/technical-optimization', icon: Settings, description: 'AI-Optimized Technical Foundation' },
    { name: 'Content Strategy', path: '/services/seo/content-strategy', icon: FileText, description: 'Contextual Content Strategy' },
    { name: 'Digital PR', path: '/services/seo/digital-pr', icon: Users, description: 'AI Attribution & Authority Building' },
    { name: 'Future-Ready Optimization', path: '/services/seo/future-ready-optimization', icon: Rocket, description: 'Anticipatory AI-Era Strategies' }
  ];

  const aiEraServices = [
    { name: 'Generative Engine Optimization', path: '/services/seo/generative-engine-optimization', icon: Brain, description: 'AI-Powered Search Result Optimization' },
    { name: 'Entity Footprint Optimization', path: '/services/seo/entity-footprint-optimization', icon: Database, description: 'Comprehensive Entity Recognition' },
    { name: 'E-E-A-T Enhancement', path: '/services/seo/eeat-optimization', icon: Award, description: 'Experience, Expertise, Authority, Trust' },
    { name: 'AI-Era Measurement', path: '/services/seo/ai-era-measurement', icon: Target, description: 'Modern KPI Framework' }
  ];

  const resources = [
    { name: 'AI-Era SEO Guide', path: '/resources/ai-era-seo-guide', icon: BookOpen, description: 'Complete guide to AI-powered search optimization' },
    { name: 'SEO Tools & Templates', path: '/resources/seo-tools-templates', icon: Download, description: 'Free tools and templates for SEO success' }
  ];

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
    setIsResourcesOpen(false);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
    }
    setIsResourcesOpen(true);
    setIsServicesOpen(false);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
      if (resourcesTimeoutRef.current) {
        clearTimeout(resourcesTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-lg font-bold text-lg">
                SomebodyDigital
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sb-blue-primary transition-colors">
              What We Do
            </Link>
            
            {/* SEO Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link 
                to="/services/seo" 
                className="flex items-center text-gray-700 hover:text-sb-blue-primary transition-colors"
              >
                SEO
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              
              {isServicesOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-5xl bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-8">
                    <div className="mb-6">
                      <Link 
                        to="/services/seo" 
                        className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        View SEO Hub →
                      </Link>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Core SEO Services */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                          Core SEO Services
                        </h3>
                        <div className="space-y-4">
                          {coreServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                                <service.icon className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* AI-Era Services */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                          AI-Era Services
                        </h3>
                        <div className="space-y-4">
                          {aiEraServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                                <service.icon className="h-5 w-5 text-purple-600" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* SEO Resources */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                          SEO Resources
                        </h3>
                        <div className="space-y-4">
                          {resources.map((resource) => (
                            <Link
                              key={resource.path}
                              to={resource.path}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                                <resource.icon className="h-5 w-5 text-green-600" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                                  {resource.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {resource.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-sb-blue-primary" onClick={closeMobileMenu}>
                What We Do
              </Link>
               <div className="space-y-2">
                <Link to="/services/seo" className="block font-medium text-gray-900 hover:text-sb-blue-primary" onClick={closeMobileMenu}>
                  SEO Hub
                </Link>
                
                <div className="pl-4 space-y-2">
                  <div className="text-sm font-medium text-gray-500">Core Services</div>
                  {coreServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-gray-700 hover:text-sb-blue-primary text-sm"
                      onClick={closeMobileMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                  
                  <div className="text-sm font-medium text-gray-500 mt-4">AI-Era Services</div>
                  {aiEraServices.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-gray-700 hover:text-sb-blue-primary text-sm"
                      onClick={closeMobileMenu}
                    >
                      {service.name}
                    </Link>
                  ))}
                  
                  <div className="text-sm font-medium text-gray-500 mt-4">Resources</div>
                  {resources.map((resource) => (
                    <Link
                      key={resource.path}
                      to={resource.path}
                      className="block text-gray-700 hover:text-sb-blue-primary text-sm"
                      onClick={closeMobileMenu}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/" className="block text-gray-700 hover:text-sb-blue-primary" onClick={closeMobileMenu}>
                Paid Media
              </Link>
              <Link to="/" className="block text-gray-700 hover:text-sb-blue-primary" onClick={closeMobileMenu}>
                Analytics
              </Link>
              <Link to="/about-us" className="block text-gray-700 hover:text-sb-blue-primary" onClick={closeMobileMenu}>
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

export default MegaMenuHeader;

