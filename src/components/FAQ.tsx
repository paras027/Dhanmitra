import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the debt settlement process work?",
    answer: "Debt settlement involves negotiating with creditors to accept a lump-sum payment that's less than the total amount you owe. At Dhanmitra, we assess your financial situation, develop a personalized plan, negotiate with creditors on your behalf, and manage the settlement process from start to finish."
  },
  {
    question: "How long does it take to see results?",
    answer: "The timeline varies based on your specific situation, including the amount of debt, number of creditors, and your financial capacity. Typically, clients start seeing results within 3-6 months, with complete debt resolution often achieved within 24-48 months."
  },
  {
    question: "Will debt settlement affect my credit score?",
    answer: "Debt settlement may initially impact your credit score. However, as debts are settled and your overall debt burden decreases, your financial health improves. Many clients see their credit scores begin to recover within 12 months after completing the program."
  },
  {
    question: "What types of debt can you help with?",
    answer: "We specialize in unsecured debts, including credit card debt, personal loans, medical bills, private student loans, and certain business debts. Secured debts like mortgages and auto loans typically cannot be included in our debt settlement programs."
  },
  {
    question: "How much does your service cost?",
    answer: "Our fees are performance-based and only charged after we successfully negotiate a settlement. Typically, our fee ranges from 15-25% of the debt enrolled, depending on the complexity of your case and the total debt amount. We offer free initial consultations and there are no upfront costs."
  },
  {
    question: "Is debt settlement the right option for me?",
    answer: "Debt settlement is most suitable for individuals experiencing significant financial hardship who cannot meet their current debt obligations. During our free consultation, we'll assess your situation and recommend the most appropriate solution, which might include debt settlement, credit counseling, debt consolidation, or other alternatives."
  },
];

const FAQItem: React.FC<{ item: FAQItem, isOpen: boolean, toggleOpen: () => void }> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-gray-900">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-800" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-800" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 pr-12">
          <p className="text-base text-gray-600">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-blue-800 tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Get answers to common questions about our debt relief services and process.
          </p>
        </div>
        
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-700">Still have questions?</p>
          <a
            href="#contact"
            className="mt-3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;