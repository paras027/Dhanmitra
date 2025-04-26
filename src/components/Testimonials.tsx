import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Working with Dhanmitra was life-changing. In just 8 months, they helped me settle ₹5 lakhs of credit card debt for less than half the amount. Their team was professional, supportive, and genuinely cared about my financial wellbeing.",
    author: "Priya Sharma",
    role: "IT Professional",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 2,
    content: "After losing my job during the pandemic, I was drowning in debt. Dhanmitra helped me negotiate with creditors and set up a manageable payment plan. Two years later, I'm debt-free and my credit score has improved significantly.",
    author: "Rajesh Mehra",
    role: "Small Business Owner",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 3,
    content: "I was skeptical at first, but Dhanmitra exceeded my expectations. Their personalized approach and expert advice helped me tackle my ₹12 lakh personal loan debt. The financial education they provided has been invaluable for my long-term financial health.",
    author: "Ananya Patel",
    role: "Healthcare Worker",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-blue-800 tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">What Our Clients Say</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Don't just take our word for it. Hear from clients who have successfully transformed their financial situation with our help.
          </p>
        </div>
        
        <div className="relative bg-blue-50 rounded-xl p-8 md:p-12 shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100 to-transparent opacity-70"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <img
                  className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-md"
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                />
              </div>
              <div className="md:ml-8 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonials[activeIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-xl italic text-gray-800 mb-6">{testimonials[activeIndex].content}</p>
                <p className="font-semibold text-gray-900">{testimonials[activeIndex].author}</p>
                <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center md:justify-end space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronLeft size={24} className="text-blue-800" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronRight size={24} className="text-blue-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;