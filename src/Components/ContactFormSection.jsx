import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle, ArrowLeft } from 'lucide-react';

const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // Success state add kiya

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fake API Call Simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true); // Alert ki jagah state true kar di
      e.target.reset();
    }, 2000);
  };

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* === LEFT CARD: CONTACT INFO === */}
          <div className="bg-white rounded-xl shadow-lg p-8 h-fit border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg mb-1">Email Support</h4>
                  <a href="mailto:support@visionedge.in" className="text-gray-600 hover:text-blue-600 transition-colors">
                    support@visionedge.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg mb-1">Office Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Plot No. 12, Durgesh Nagar,<br />
                    Jagatpura, Pratap Nagar Housing Board,<br />
                    Jaipur, Rajasthan,<br />
                    India, 302033.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-400">
                We aim to respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>

          {/* === RIGHT CARD: FORM OR SUCCESS MESSAGE === */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 border border-gray-100 min-h-[500px] flex flex-col justify-center">
            
            {/* Conditional Rendering: Agar Success hai to Message dikhao, nahi to Form */}
            {isSuccess ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
                  Thank you for contacting VisionEdge. We have received your message and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Send Us A Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input 
                        required
                        type="email" 
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      How can we help you?
                    </label>
                    <textarea 
                      required
                      id="message" 
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2
                      ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white'}
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;