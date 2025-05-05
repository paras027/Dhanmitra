import React from 'react';
import build from "../assets/build.svg";
import lock from "../assets/lock.svg";
import nodes from "../assets/nodes.svg";
import spark from "../assets/spark.svg";
import deal from "../assets/deal.svg";
import digi from "../assets/digital-ecosystem.svg";
import discount from "../assets/discount.svg";
import finance from "../assets/finance.svg";
import fund from "../assets/fund.svg";
import hospital from "../assets/hospital.svg";
import loan from "../assets/loan.svg";
import money from "../assets/money.svg";
import real from "../assets/real-estate.svg";
import funding from "../assets/funding.svg";


interface ServiceCardProps {
  icon: React.ReactNode | string; // Allow string for SVG imports
  title: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, delay }) => {
  return (
    <div
      className=" bg-white rounded-lg border border-[#327fd1] p-6 transition-all duration-500 hover:[transform:translateY(-0.5rem)_rotate(12deg)] flex flex-col items-center"
      style={{ animationDelay: delay }}
    >
      <div className="w-[150px] h-[150px] flex items-center justify-center text-[#327fd1] transition-transform duration-500 hover:[transform:rotate(12deg)]">
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} className="w-[100px] h-[100px] object-contain" />
        ) : (
          icon
        )}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 pb-7">{title}</h3>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-base font-semibold text-[#327fd1] tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Debt organised  for You</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          We get you the best debt solution from Banks / NBFC at the lowest costs feasible
          .
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={deal}
            title="DealPartner"
            delay="0.2s"
          />
          <ServiceCard 
            icon={fund}
            title="QuickFund"
            delay="0.4s"
          />
          <ServiceCard 
            icon={hospital}
            title="Working Capital Facility"
            delay="0.6s"
          />
          <ServiceCard 
            icon={digi}
            title="Extensive Ecosystem"
            delay="0.8s"
          />
          <ServiceCard 
            icon={money}
            title="Overdraft"
            delay="0.8s"
          />
          <ServiceCard 
            icon={loan}
            title="Working Capital Loan"
            delay="0.8s"
          />
          <ServiceCard 
            icon={funding}
            title="Sales based funding"
            delay="0.8s"
          />
          <ServiceCard 
            icon={discount}
            title="Invoice discounting"
            delay="0.8s"
          />
          <ServiceCard 
            icon={real}
            title="Loan against property"
            delay="0.8s"
          />
          <ServiceCard 
            icon={finance}
            title="Cash Flow financing"
            delay="0.8s"
          />
        </div>
        
        <div className="mt-16 text-center animate-slide-up">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#327fd1] hover:bg-blue-900 hover:transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;