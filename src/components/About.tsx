
   import React from 'react';

   const About: React.FC = () => {
     const founders = [
       {
         name: "U R Bhat",
         image: "https://res.cloudinary.com/dvurpflmb/image/upload/v1746687120/ChatGPT_Image_May_8_2025_12_18_34_PM_auv1d4.png",
         description: "Mr. U.R.Bhat , is one of India’s well-known investment advisors and has been managing institutional money for more than two decades. He is presently a Director on various financial institutions.",
       },
       {
         name: "Adesh K Gupta",
         image: "https://res.cloudinary.com/dvurpflmb/image/upload/v1746687120/ChatGPT_Image_May_8_2025_11_57_50_AM_axna9t.png",
         description: "He is currently a member of the Board of Directors at Aditya Birla Insulators Limited, Samruddhi Cement Limited, Grasim Industries Ltd, Zee Entertainment Enterprises Limited, Probizadvisor & Insolvency Professionals LLP, Care Ratings Limited, Vinati Organics Limited, Krazybee Services Private Limited, India Pesticides Limited.Anand Rathi etc.",
       },
       {
         name: "Prakash Ahuja",
         image: "https://res.cloudinary.com/dvurpflmb/image/upload/v1746687120/ChatGPT_Image_May_8_2025_12_14_33_PM_uvgss7.png",
         description: "Innovative and competent professional manager with 40+years of experience in marketing and business development globally.",
       },
       {
         name: "M Jayaram",
         image: "https://res.cloudinary.com/dvurpflmb/image/upload/v1746687121/ChatGPT_Image_May_8_2025_12_00_45_PM_b2llzi.png",
         description: "Extensive experience of over 40 years, starting as a Senior Management Trainee, in a leading engineering firm to being a Managing Director of an associated Financial Services Company.",
       },
       {
         name: "Dimcy Chopra",
         image: "https://res.cloudinary.com/dvurpflmb/image/upload/v1748864910/ChatGPT_Image_Jun_2_2025_05_17_54_PM_iltflw.png",
         description: "With over 10 years of experience in Investment Banking and Consulting, Dimcy has a strong domain expertise in deal negotiations and her legal background along with her business acumen adds value in expediting negotiations.",
       },
       {
         name: "Sumeet Singh",
         image: "https://res.cloudinary.com/dvurpflmb/image/upload/v1746687456/ChatGPT_Image_May_8_2025_12_27_26_PM_nmtjgj.png",
         description: "A seasoned business strategist, Sumeet brings a wealth of experience from the realms of consulting, venture capital, and entrepreneurship.",
       },
       {
         name: "Uthsav Ahuja",
         image: "https://res.cloudinary.com/dvurpflmb/image/upload/v1746688259/ChatGPT_Image_May_8_2025_12_16_31_PM_fdsjp2.png",
         description: "Digital Executive with experiences in building and growing digital companies.",
       },
       {
        name: "Sameehanay",
        image: "https://res.cloudinary.com/dvurpflmb/image/upload/v1746688211/ChatGPT_Image_May_8_2025_11_53_16_AM_wlyhwn.png",
        description: "Sameehanay has built product and tech across fintech, education, and GenAI. He designs systems that are simple, scalable, and built to last..",
      },
     ];

     return (
       <>
         <section id="about" className="py-16 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
               <div className="relative">
                 <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                   <img
                     src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                     alt="Team meeting"
                     className="w-full h-full object-center object-cover"
                   />
                 </div>
                 <div className="absolute -bottom-8 -right-8 bg-[#29abe2] text-white p-8 rounded-lg shadow-lg max-w-xs hidden md:block">
                   <p className="text-lg font-semibold">We are a bunch of problem solvers. A one-stop solution for all your financial troubles (Debt related, of course).</p>
                 </div>
               </div>
               
               <div className="mt-10 lg:mt-0">
                 <h2 className="text-base font-semibold text-[#327fd1] tracking-wide uppercase">About Dhanmitra</h2>
                 <p className="mt-2 text-3xl font-bold text-gray-900">Your Trusted Financial Partner</p>
                 <div className="mt-6 text-gray-700 space-y-6">
                   <p>
                   With decades of experience our partners have the capabilities and expertise to take your venture to the next level of growth.  We combine our insights and skills in business and the banking system to understand the company. Dhan Mitra is  focused on debt funds  from 50 lakhs to 20 crores.
                   </p>
                 </div>
                 
                 <div className="mt-8">
                   <a href="#contact" className="text-[#327fd1] font-medium flex items-center hover:text-blue-500 transition-colors duration-300">
                     Contact our team <span className="text-xl ml-1">→</span>
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </section>

         <section id="founders" className="py-16 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-base font-semibold text-[#327fd1] tracking-wide uppercase text-center">Meet The Founders</h2>
             <p className="mt-2 text-3xl font-bold text-gray-900 text-center">Our Visionary Leaders</p>
             <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {founders.map((founder, index) => (
                 <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-blue-100">
                   <div className="aspect-w-1 aspect-h-1">
                     <img
                       src={founder.image}
                       alt={founder.name}
                       className="w-full h-full object-cover object-center"
                     />
                   </div>
                   <div className="p-6">
                     <h3 className="text-lg font-semibold text-gray-900">{founder.name}</h3>
                     <p className="mt-2 text-gray-600 text-sm">{founder.description}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </section>
       </>
     );
   };

   export default About;
