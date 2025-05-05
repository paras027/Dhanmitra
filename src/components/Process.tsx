import React from 'react';
import { PhoneCall, FileText, TrendingUp, CheckCircle } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessStepProps> = ({ icon, title, description }) => {
  return (
    <div
      className={` bg-white rounded-lg border border-[#29abe2] p-4 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:rotate-6 flex flex-col items-center w-full max-w-sm mx-auto ${
        title === 'TailorMade' || title === 'Non-Dilutive Capital' ? 'mt-8 sm:mt-12' : 'mb-8 sm:mb-12'
      }`}
    >
      <div
        className="flex items-center justify-center text-[#29abe2] transform transition-transform duration-500 hover:rotate-12"
      >
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
        ) : (
          icon
        )}
      </div>
      <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900 pb-4 sm:pb-6">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide uppercase">
            How <span className="text-[#327fd1]">Dhanmitra</span> Works
          </h2>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-600 mx-auto">
          We understand your business and problems through discussions and meetings to develop a debt solution.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ProcessCard
            icon={<PhoneCall size={32} />}
            title="QuickConnect"
            description="Once you approve the estimate and the costs involved we will onboard you into soft underwriting system and collect all the data from you and with your consent build a loan file to be submitted to the bank with our recommendation ."
          />
          <ProcessCard
            icon={<FileText size={32} />}
            title="TailorMade"
            description="One size doesn't fit all. We'll figure out what the business needs. We'll always come up with a solution that's best suited for y(our) business."
          />
          <ProcessCard
            icon={<TrendingUp size={32} />}
            title="FlexiSolve"
            description="We find ways to unlock value tied up in your business that traditional funding methods can't. How? The answer is alternate financing."
          />
          <ProcessCard
            icon={<CheckCircle size={32} />}
            title="Non-Dilutive Capital"
            description="Retain control of the company's operations and direction. With our easy financing solutions, you can ensure the business doesn't compromise on its values."
          />

        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-[#327fd1] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;