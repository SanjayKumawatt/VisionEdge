import React from 'react';
import { Link } from 'react-router-dom';
import { ScanEye, Mail, MapPin, Phone } from 'lucide-react';
import logo from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1121] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
          
          {/* COLUMN 1: COMPANY INFO */}
          <div className="space-y-6">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group">
             <img src={logo} className='h-10' alt="" />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              VISIONEDGE TECH SOLUTIONS PRIVATE LIMITED is dedicated to crafting exceptional, result-driven web solutions including E-commerce, Logo Design, and Content Management Systems globally.
            </p>
          </div>

          {/* COLUMN 2: IMPORTANT LINKS */}
          <div className="md:pl-10">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">
              Important Links
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1">
                  <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Email Support</h4>
                  <a href="mailto:support@visionedge.in" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                    support@visionedge.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1">
                  <MapPin className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Office Address</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Plot No. 12, Durgesh Nagar, Jagatpura, Pratap Nagar Housing Board, <br className="hidden lg:block" />
                    Jaipur, Rajasthan, India, 302033.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR: COPYRIGHT */}
        <div className="border-t border-slate-800 pt-8 mt-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} VISIONEDGE TECH SOLUTIONS PRIVATE LIMITED. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;