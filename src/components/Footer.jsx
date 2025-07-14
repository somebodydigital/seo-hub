import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              SomebodyDigital
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              AI-Enhanced SEO strategies that prepare your brand for the future of search. 
              Strategic partnership for sustainable growth.
            </p>
            <div className="text-sm text-gray-400">
              © 2024 SomebodyDigital. All rights reserved.
            </div>
          </div>

          {/* SEO Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SEO Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services/seo/technical-optimization" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Technical SEO
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/seo/content-strategy" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/seo/digital-pr" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Digital PR
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/seo/future-ready-optimization" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Future-Ready Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  AI-Readiness Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

