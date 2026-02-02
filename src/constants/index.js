import Portfolio1 from '../assets/Portfolio1.png';
import Portfolio2 from '../assets/Portfolio2.png';
import Portfolio3 from '../assets/Portfolio3.png';
import Portfolio4 from '../assets/Portfolio4.png';

export const navbar = [
   {label:'About' , id:'about'}, 
   {label:'Portfolio', id:'portfolio'},
   {label:'Pricing', id:'pricing'},
   {label:'Contact', id:'contact'}
];

export const pricingList = [
    {
       name: "Basic",
       pricetag: "$499",
       buttontag: "Get Started",
       services: [
        "Landing Pages",
        "SEO setup",
        "2-week delivery",
        "Mobile-first design"
       ]
    },
    {
       name: "Business",
       pricetag: "$1499",
       buttontag: "Choose Business",
       services: [
        "Full E-commerce",
        "CMS integration",
        "4-week delivery",
        "Priority support",
        "Advanced Animations"
       ]
    },
    {
       name: "Custom",
       pricetag: "Contact",
       buttontag: "Enquire Now",
       services: [
        "Complex web apps",
        "API integrations",
        "Long-term support",
        "Custom Architecture"
       ]
    }
]

export const Slides = [
   { 
      id: 1, 
      color: "bg-red-400",
      image: Portfolio1,
      header: "Ngaji The Dev",
      text:"A responsive portfolio website developed using React and Tailwind CSS, designed to highlight my work as a web developer through a clean, modern UI and smooth user experience." 
   },
  {   
      id: 2, 
      color: "bg-blue-400",
      image: Portfolio2,
      header: "The Casor Magazine", 
      text: "A responsive magazine launch website created using HTML, CSS, and JavaScript. The project focuses on clean layout, visual storytelling, and smooth user interaction to effectively showcase content and announcements.",
      link: "https://isaacluka.github.io/TCM/" 
   },
  { 
      id: 3, 
      color: "bg-green-400",
      image: Portfolio3,
      header: "Apple Website Clone", 
      text: "A modern clone of the Apple website built with React, featuring smooth, high-performance animations powered by GSAP. This project demonstrates attention to detail, component-based architecture, and advanced front-end animation techniques.",
      link: "https://theiphonewebsiteclone.netlify.app/"
   },
   { 
      id: 4, 
      color: "bg-green-400",
      header: "Google Gemini Clone",
      image: Portfolio4, 
      text: "A functional clone of Google Gemini built with React, leveraging the Context API for state management and the Gemini API for real-time AI responses. The project highlights API integration, scalable state handling, and interactive UI design.",
      link: "https://thegeminiclone.netlify.app/" 
   }
];

export const sendWhatsAppMessage = (project = "") => {
  const phoneNumber = "2349044646303"; // country code, no +

  const projectType = project
    ? `a *${project}* web project`
    : `a web project`;

  const message =
    `Hello Ngaji, I came across your portfolio and I’m interested in working with you on ${projectType}. Can we talk about requirements and pricing?`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};