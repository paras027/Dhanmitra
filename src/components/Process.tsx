import React from 'react';
import { PhoneCall, FileText, TrendingUp, CheckCircle } from 'lucide-react';


interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description:string

}

const ProcessCard: React.FC<ProcessStepProps> = ({ icon, title, description}) => {
  return (
    <div
      className={`w-[300px] animate-fade-in bg-white rounded-lg border border-[#29abe2] p-6 transition-all duration-500  hover:-translate-y-2 hover:rotate-6  flex flex-col items-center ${
        title === "Personalisation" || title === "Non-Dilutive Capital" ? "mt-24" : "mb-24"
      }`}
     
    >
      <div className={`flex items-center justify-center text-[#29abe2] transform transition-transform duration-500 hover:rotate-12 `}  >
        {typeof icon === 'string' ? (
          <img src={icon} alt={title}  className="w-[100px] h-[100px] object-contain"/>
        ) : (
          icon
        )}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 pb-7">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className=" font-semibold text-gray-800 text-3xl tracking-wide uppercase">How <span className='text-[#327fd1]'>Dhanmitra</span> Works</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          Through alternate finance, we'll identify the pain points and help raise capital without diluting y(our) business.
          </p>
        </div>
        
        <div className="mt-12  flex flex-row space-x-9">
          <ProcessCard 
            icon={<PhoneCall size={24} />}
            
            title="Rapid"
            description="Tired of endless pitch meetings and negotiations? We'll ensure that the funds are transferred in a couple of days."
          />
          
          <ProcessCard 
            icon={<FileText size={24} />}
           
            title="Personalisation"
            description="One size doesn't fit all. We'll figure out what the business needs. We'll always come up with a solution that's best suited for y(our) business."
          />
          
          <ProcessCard 
            icon={<TrendingUp size={24} />}
           
            title="Flexibility"
            description="We find ways to unlock value tied up in your business that traditional funding methods can't. How? The answer is alternate financing.
"
          />
          
          <ProcessCard 
            icon={<CheckCircle size={24} />}
         
            title="Non-Dilutive Capital"
            description="Retain control of the company's operations and direction. With our easy financing solutions, you can ensure the business doesn't compromise on its values."
          />
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#327fd1] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;