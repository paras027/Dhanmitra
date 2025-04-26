import React from 'react';
import { CreditCard, BarChart3, ShieldCheck, LineChart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="animate-fade-in bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-blue-50"
      style={{ animationDelay: delay }}
    >
      <div className="bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center text-blue-800 transform transition-transform duration-500 hover:rotate-12">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4">
        <a href="#contact" className="text-blue-700 font-medium flex items-center hover:text-blue-500 transition-all duration-300 group">
          Learn more 
          <span className="text-xl ml-1 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-base font-semibold text-blue-800 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Financial Solutions Tailored for You</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            We offer comprehensive debt management services to help you achieve financial freedom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={<CreditCard size={32} />}
            title="Debt Settlement"
            description="Negotiate with creditors to reduce your total debt balance and create an affordable repayment plan."
            delay="0.2s"
          />
          <ServiceCard 
            icon={<BarChart3 size={32} />}
            title="Credit Counseling"
            description="Professional guidance to help you manage debt, create budgets, and improve financial habits."
            delay="0.4s"
          />
          <ServiceCard 
            icon={<ShieldCheck size={32} />}
            title="Legal Protection"
            description="Shield yourself from creditor harassment with our legal expertise and representation."
            delay="0.6s"
          />
          <ServiceCard 
            icon={<LineChart size={32} />}
            title="Financial Planning"
            description="Develop a strategic roadmap to rebuild your credit and achieve long-term financial goals."
            delay="0.8s"
          />
        </div>
        
        <div className="mt-16 text-center animate-slide-up">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 hover:transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;