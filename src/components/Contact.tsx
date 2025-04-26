import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  debtAmount: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  debtAmount: '',
  message: '',
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData(initialFormState);
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-blue-800 tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Get Your Free Consultation</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Take the first step towards financial freedom. Fill out the form below or reach out directly.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center justify-center h-full">
                <div className="bg-green-100 rounded-full p-3">
                  <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Thank You!</h3>
                <p className="mt-2 text-center text-gray-600">
                  Your message has been received. One of our financial advisors will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="debtAmount" className="block text-sm font-medium text-gray-700">
                      Approximate Debt Amount
                    </label>
                    <select
                      name="debtAmount"
                      id="debtAmount"
                      required
                      value={formData.debtAmount}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select amount</option>
                      <option value="Below ₹2 lakhs">Below ₹2 lakhs</option>
                      <option value="₹2 lakhs - ₹5 lakhs">₹2 lakhs - ₹5 lakhs</option>
                      <option value="₹5 lakhs - ₹10 lakhs">₹5 lakhs - ₹10 lakhs</option>
                      <option value="₹10 lakhs - ₹25 lakhs">₹10 lakhs - ₹25 lakhs</option>
                      <option value="Above ₹25 lakhs">Above ₹25 lakhs</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Brief Description of Your Situation
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Request Free Consultation
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="bg-blue-800 text-white rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="mt-1">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="mt-1">info@dhanmitra.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mt-1 mr-4" />
                <div>
                  <p className="font-medium">Office</p>
                  <p className="mt-1">
                    504, Pinnacle Business Park<br />
                    Bandra Kurla Complex<br />
                    Mumbai, Maharashtra 400051
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium mb-3">Office Hours</h4>
              <p className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-blue-100">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-blue-100">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;