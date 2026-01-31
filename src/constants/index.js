import Portfolio1 from '../assets/Portfolio1.png';
export const navbar = [
   {label:'About' , id:'about'}, 
   {label:'Portfolio', id:'portfolio'},
   {label:'Pricing', id:'pricing'},
   {label: 'Contact', id:'contact'}
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
      header: "Ngaji The Dev", 
      text: "Slide 2" 
   },
  { 
      id: 3, 
      color: "bg-green-400",
      header: "Ngaji The Dev", 
      text: "Slide 3" 
   },
];