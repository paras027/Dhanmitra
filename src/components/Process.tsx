import React from 'react';
import { PhoneCall, FileText, TrendingUp, CheckCircle } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, step, title, description }) => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="flex-shrink-0 flex items-center justify-center bg-blue-800 text-white h-16 w-16 rounded-full text-xl font-bold mb-4 md:mb-0">
          {icon}
        </div>
        <div className="md:ml-6">
          <p className="text-sm font-medium text-blue-800">Step {step}</p>
          <h3 className="mt-1 text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
      {step < 4 && (
        <div className="hidden md:block absolute left-8 top-24 h-16 w-0.5 bg-blue-200"></div>
      )}
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-800 tracking-wide uppercase">Our Process</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Simple Steps to Financial Freedom</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Our proven 4-step process has helped hundreds of clients successfully manage their debt and regain financial control.
          </p>
        </div>
        
        <div className="mt-12 space-y-16 md:space-y-24">
          <ProcessStep 
            icon={<PhoneCall size={24} />}
            step={1}
            title="Free Initial Consultation"
            description="Schedule a free consultation where we'll discuss your financial situation, assess your debt, and explore potential solutions tailored to your needs."
          />
          
          <ProcessStep 
            icon={<FileText size={24} />}
            step={2}
            title="Personalized Plan Development"
            description="Our financial experts will create a customized debt management plan based on your unique circumstances, outlining clear steps and realistic timeframes."
          />
          
          <ProcessStep 
            icon={<TrendingUp size={24} />}
            step={3}
            title="Implementation & Negotiation"
            description="We'll implement your plan, which may include negotiating with creditors, consolidating debts, or setting up structured payment plans to reduce your financial burden."
          />
          
          <ProcessStep 
            icon={<CheckCircle size={24} />}
            step={4}
            title="Ongoing Support & Monitoring"
            description="We provide continuous support, regularly reviewing your progress, making adjustments as needed, and offering financial education to ensure long-term success."
          />
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;