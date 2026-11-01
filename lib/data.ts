import {
  BulbIcon,
  CashIcon,
  ClockIcon,
  CommunicationIcon,
  ConfigIcon,
  CubeIcon,
  DecagramCheckedIcon,
  DesignIcon,
  DevelopmentIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  PeopleIcon,
  SupportAgentIcon,
  VideoIcon,
  WebIcon,
  WhatsappIcon,
  XIcon,
} from "@/components/icons";
import { StepsType } from "./types";
import {
  ContentCreationIllution3D,
  GraphicDesignIllustration3D,
  SoftwareIllustration3D,
  ThreeDDesignIllution3D,
  WebDesignIllustration3D,
} from "@/components/3dModals";

export const CONTACT_DETAILS = {
  mailId: "sales@triadz.in",
  mailLink: "mailto:sales@triadz.in",
  phoneNo: "+91-8072023384",
  whatsAppLink: "https://wa.me/918072023384",
  address: "Aruppukottai, India",
  addressLink: "https://maps.app.goo.gl/anFKS6U3xfMT7kne6",
  facebook: "",
  facebookLink: "",
  instagram: "",
  instagramLink: "",
  linkedin: "",
  linkedinLink: "",
  twitter: "",
  twitterLink: "",
};

export const PAGES = {
  HOME: { label: "Home", href: "/", value: "HOME" },
  ABOUT: { label: "About Us", href: "/about", value: "ABOUT" },
  SERVICES: { label: "Services", href: "/services", value: "SERVICES" },
  PORTFOLIO: { label: "Portfolio", href: "/portfolio", value: "PORTFOLIO" },
  CONTACT: { label: "Contact", href: "/contact", value: "CONTACT" },
};

export const SOCIAL_MEDIA = {
  FACEBOOK: {
    label: "Facebook",
    href: CONTACT_DETAILS.facebookLink,
    Icon: FacebookIcon,
    value: "FACEBOOK",
  },
  INSTAGRAM: {
    label: "Instagram",
    href: CONTACT_DETAILS.instagramLink,
    Icon: InstagramIcon,
    value: "INSTAGRAM",
  },
  LINKEDIN: {
    label: "LinkedIn",
    href: CONTACT_DETAILS.linkedinLink,
    Icon: LinkedinIcon,
    value: "LINKEDIN",
  },
  TWITTER: {
    label: "Twitter",
    href: CONTACT_DETAILS.twitterLink,
    Icon: XIcon,
    value: "TWITTER",
  },
};

export const SERVICES = {
  SOFTWARE_DEVELOPMENT: {
    label: "Software Development",
    href: "/services",
    color: "red",
    Icon: DevelopmentIcon,
    ThreeD: SoftwareIllustration3D,
    value: "SOFTWARE_DEVELOPMENT",
    description:
      "Custom web and mobile applications built for performance, scalability, and real business impact.",
    title: "Custom software built for your exact needs",
    body: "We design and develop robust, scalable software solutions — from web applications and mobile apps to APIs and enterprise systems. Our development process is agile, transparent, and focused on delivering real business value.",
    includes: [
      {
        label: "Web Application Development",
        description:
          "Full-stack web apps built with modern frameworks like React, Node.js, and more.",
      },
      {
        label: "Mobile App Development",
        description:
          "Cross-platform and native mobile apps for iOS and Android.",
      },
      {
        label: "API Development & Integration",
        description:
          "RESTful and GraphQL APIs, third-party integrations, and backend services.",
      },
      {
        label: "E-Commerce Solutions",
        description:
          "Custom online stores, payment integrations, and inventory management systems.",
      },
      {
        label: "CMS & Admin Dashboards",
        description:
          "Content management systems and admin panels tailored to your workflow.",
      },
      {
        label: "Maintenance & Support",
        description:
          "Ongoing support, bug fixes, performance optimisation, and feature updates.",
      },
    ],
    process: [
      {
        label: "Discovery",
        description:
          "We understand your requirements, goals, and technical constraints.",
      },
      {
        label: "Architecture",
        description:
          "We plan the system architecture, tech stack, and project roadmap.",
      },
      {
        label: "Development",
        description:
          "Agile development with regular updates and milestone reviews.",
      },
      {
        label: "Delivery",
        description:
          "Testing, deployment, and handover with full documentation.",
      },
    ],
  },
  WEBSITE_DEVELOPMENT: {
    label: "Website Design & Development",
    href: "/services",
    color: "purple",
    Icon: WebIcon,
    ThreeD: WebDesignIllustration3D,
    value: "WEBSITE_DEVELOPMENT",
    description:
      "Stunning, responsive websites that convert visitors into customers with exceptional UI/UX.",
    title: "Beautiful, fast websites that convert visitors",
    body: "We create visually stunning, high-performance websites that not only look great but also drive results. Every website we build is mobile-first, SEO-optimised, and crafted to reflect your brand identity.",
    includes: [
      {
        label: "Business Websites",
        description:
          "Professional multi-page websites for companies, agencies, and service providers.",
      },
      {
        label: "Landing Pages",
        description:
          "High-converting landing pages for campaigns, products, and lead generation.",
      },
      {
        label: "Portfolio Websites",
        description:
          "Elegant portfolio sites for creatives, photographers, and freelancers.",
      },
      {
        label: "WordPress Development",
        description:
          "Custom WordPress themes and plugins for flexible content management.",
      },
      {
        label: "Website Redesign",
        description:
          "Modernise your existing website with a fresh design and improved performance.",
      },
      {
        label: "SEO & Performance",
        description:
          "Speed optimisation, on-page SEO, and Core Web Vitals improvements.",
      },
    ],
    process: [
      {
        label: "Brief & Research",
        description: "Understanding your brand, audience, and competitors.",
      },
      {
        label: "Wireframing",
        description:
          "Laying out the structure and user flow before design begins.",
      },
      {
        label: "Design & Build",
        description: "Crafting the visual design and developing the site.",
      },
      {
        label: "Launch",
        description: "Testing, optimising, and going live.",
      },
    ],
  },
  GRAPHIC_DESIGN: {
    label: "Graphic Design & Photoshop",
    href: "/services",
    color: "pink",
    Icon: DesignIcon,
    ThreeD: GraphicDesignIllustration3D,
    value: "GRAPHIC_DESIGN",
    description:
      "Powerful brand identities, marketing materials, and visual content that make you stand out.",
    title: "Visual identity that makes you unforgettable",
    body: "Great design communicates before words do. We create compelling visual identities, marketing materials, and digital assets that capture your brand's essence and leave a lasting impression.",
    includes: [
      {
        label: "Logo & Brand Identity",
        description:
          "Logos, colour palettes, typography, and brand guidelines.",
      },
      {
        label: "Social Media Graphics",
        description:
          "Posts, stories, banners, and templates for all major platforms.",
      },
      {
        label: "Marketing Materials",
        description:
          "Brochures, flyers, posters, business cards, and print-ready designs.",
      },
      {
        label: "Photoshop Editing",
        description:
          "Photo retouching, compositing, background removal, and manipulation.",
      },
      {
        label: "UI/UX Design",
        description: "App and website interface design with Figma or Adobe XD.",
      },
      {
        label: "Packaging Design",
        description: "Product packaging, labels, and mockup designs.",
      },
    ],
    process: [
      {
        label: "Creative Brief",
        description:
          "Defining your brand personality, target audience, and design direction.",
      },
      {
        label: "Concept Design",
        description: "Initial concepts and mood boards for your review.",
      },
      {
        label: "Refinement",
        description: "Iterating based on your feedback until it's perfect.",
      },
      {
        label: "Final Delivery",
        description: "Delivering all files in required formats.",
      },
    ],
  },
  PHOTO_VIDEO_EDITING: {
    label: "Photo & Video Editing",
    href: "/services",
    color: "blue",
    Icon: VideoIcon,
    ThreeD: ContentCreationIllution3D,
    value: "PHOTO_VIDEO_EDITING",
    description:
      "Professional post-production that transforms raw footage and photos into polished content.",
    title: "Polished visuals that tell your story",
    body: "Whether it's product photography, corporate videos, or social media content, we edit and enhance your visuals to a professional standard that elevates your brand and engages your audience.",
    includes: [
      {
        label: "Photo Retouching & Enhancement",
        description:
          "Colour correction, skin retouching, exposure fixes, and professional finishing.",
      },
      {
        label: "Product Photography Editing",
        description:
          "Clean, polished product images ready for e-commerce and marketing.",
      },
      {
        label: "Video Editing",
        description:
          "Cutting, transitions, colour grading, and audio sync for any type of video.",
      },
      {
        label: "Reels & Short-Form Content",
        description:
          "Engaging Instagram Reels, YouTube Shorts, and TikTok videos.",
      },
      {
        label: "Corporate & Event Videos",
        description:
          "Professional editing for corporate presentations, events, and promos.",
      },
      {
        label: "Motion Graphics",
        description:
          "Animated text, lower thirds, intros, and outros for video content.",
      },
    ],
    process: [
      {
        label: "Asset Collection",
        description: "Receiving your raw photos or footage.",
      },
      {
        label: "Editing",
        description: "Professional editing with attention to every detail.",
      },
      {
        label: "Review",
        description: "Sharing a preview for your feedback and revisions.",
      },
      {
        label: "Export & Delivery",
        description: "Delivering in your required formats and resolutions.",
      },
    ],
  },
  THREE_D_DESIGN: {
    label: "3D Design & Visualization",
    href: "/services",
    color: "green",
    Icon: CubeIcon,
    ThreeD: ThreeDDesignIllution3D,
    value: "THREE_D_DESIGN",
    description:
      "Photorealistic 3D models, renders, and animations that bring products and spaces to life.",
    title: "Bring your ideas to life in three dimensions",
    body: "We create photorealistic 3D models, product visualisations, architectural renders, and animations that help you showcase your products and concepts before they even exist in the real world.",
    includes: [
      {
        label: "3D Product Modeling",
        description:
          "Detailed 3D models of products for marketing, e-commerce, and presentations.",
      },
      {
        label: "Architectural Visualization",
        description:
          "Photorealistic renders of buildings, interiors, and spaces.",
      },
      {
        label: "3D Animation",
        description:
          "Product animations, explainer videos, and motion sequences.",
      },
      {
        label: "Character & Asset Design",
        description:
          "3D characters, props, and assets for games, films, and media.",
      },
      {
        label: "Logo Animation in 3D",
        description: "Animated 3D logo reveals and brand motion graphics.",
      },
      {
        label: "Mockup & Packaging 3D",
        description:
          "Realistic 3D mockups for packaging, labels, and product presentations.",
      },
    ],
    process: [
      {
        label: "Reference & Brief",
        description: "Gathering references, dimensions, and design direction.",
      },
      {
        label: "Modeling",
        description: "Building the 3D model with precision and detail.",
      },
      {
        label: "Texturing & Lighting",
        description:
          "Applying materials, textures, and setting up realistic lighting.",
      },
      {
        label: "Render & Deliver",
        description: "Final rendering and delivery in your required format.",
      },
    ],
  },
};

export const CONTACT_INFO = [
  {
    label: CONTACT_DETAILS.mailId,
    href: CONTACT_DETAILS.mailLink,
    Icon: MailIcon,
  },
  {
    label: CONTACT_DETAILS.phoneNo,
    href: CONTACT_DETAILS.whatsAppLink,
    Icon: WhatsappIcon,
  },
  {
    label: CONTACT_DETAILS.address,
    href: CONTACT_DETAILS.addressLink,
    Icon: LocationIcon,
  },
];

export const SKILLS = {
  CUSTOMIZED_SOLUTIONS: {
    label: "Customized Solutions",
    Icon: ConfigIcon,
    value: "CUSTOMIZED_SOLUTIONS",
  },
  CREATIVE_APPROACH: {
    label: "Creative Approach",
    Icon: BulbIcon,
    value: "CREATIVE_APPROACH",
  },
  QUALITY_FOCUSED: {
    label: "Quality Focused",
    Icon: DecagramCheckedIcon,
    value: "QUALITY_FOCUSED",
  },
  TRANSPERANT_COMMUNICATION: {
    label: "Transparent Communication",
    Icon: CommunicationIcon,
    value: "TRANSPERANT_COMMUNICATION",
  },
  AFFORDABLE_PRICING: {
    label: "Affordable Pricing",
    Icon: CashIcon,
    value: "AFFORDABLE_PRICING",
  },
  ON_TIME_DELIVERY: {
    label: "On-Time Delivery",
    Icon: ClockIcon,
    value: "ON_TIME_DELIVERY",
  },
  ONGOING_SUPPORT: {
    label: "Ongoing Support",
    Icon: SupportAgentIcon,
    value: "ONGOING_SUPPORT",
  },
  EXPERT_TEAM: {
    label: "Expert Team",
    Icon: PeopleIcon,
    value: "EXPERT_TEAM",
  },
};

export const WORKS = {
  E_COMMERCE_PLATFORM: {
    label: "E-commerce Platform",
    img: "/works/e-commerce-platform.jpg",
    category: "Web & Mobile",
    description:
      "A modern e-commerce platform featuring product discovery, advanced filtering, secure checkout, order management, and a seamless shopping experience across devices.",
    technologies: "Next.js, React, Node.js, MongoDB, Stripe",
    timeline: "8-10 Weeks",
    link: "https://example.com/e-commerce-platform",
  },

  BRAND_IDENTITY_SYSTEM: {
    label: "Brand Identity System",
    img: "/works/brand-identity-system.jpg",
    category: "Graphic Designs",
    description:
      "A cohesive brand identity system designed to establish a distinctive market presence through logo design, typography, colour palettes, visual assets, and brand guidelines.",
    technologies: "Adobe Illustrator, Photoshop, Figma, Branding",
    timeline: "2-3 Weeks",
    link: "https://example.com/brand-identity",
  },

  RESTAURANT_WEBSITE: {
    label: "Restaurant Website",
    img: "/works/restaurant-website.jpg",
    category: "Website Designs",
    description:
      "A responsive restaurant website featuring an interactive menu, online reservations, location details, customer testimonials, and an engaging visual dining experience.",
    technologies: "Next.js, React, Tailwind CSS, Framer Motion",
    timeline: "3-4 Weeks",
    link: "https://example.com/restaurant",
  },

  PRODUCT_PHOTO_SERIES: {
    label: "Product Photo Series",
    img: "/works/product-photo-series.jpg",
    category: "Photo Editing",
    description:
      "A professional product photography and editing series with precise retouching, consistent colour grading, background refinement, and polished visuals for digital marketing and e-commerce.",
    technologies: "Adobe Photoshop, Lightroom, Retouching",
    timeline: "1-2 Weeks",
    link: "https://example.com/product-photography",
  },

  PRODUCT_LAUNCH_VIDEO: {
    label: "Product Launch Video",
    img: "/works/product-launch-video.jpg",
    category: "Video Editing",
    description:
      "A high-impact product launch video combining cinematic editing, motion graphics, colour grading, transitions, and sound design to communicate product value and generate audience interest.",
    technologies: "Adobe Premiere Pro, After Effects, Motion Graphics",
    timeline: "2-3 Weeks",
    link: "https://example.com/product-launch",
  },

  ARCHITECTURAL_RENDER: {
    label: "Architectural Render",
    img: "/works/architectural-render.jpg",
    category: "3D Designs",
    description:
      "Detailed architectural visualisations featuring realistic materials, lighting, environmental elements, and carefully composed camera angles to present interior and exterior design concepts.",
    technologies: "Blender, 3D Modelling, Rendering, Lighting",
    timeline: "2-4 Weeks",
    link: "https://example.com/architectural-render",
  },

  ANALYTICS_DASHBOARD: {
    label: "Analytics Dashboard",
    img: "/works/analytics-dashboard.jpg",
    category: "Web & Mobile",
    description:
      "A real-time analytics platform with interactive charts, user management, and an automated reporting pipeline.",
    technologies: "React, Node.js, Tailwind CSS, Data Visualization",
    timeline: "6-8 Weeks",
    link: "https://example.com/analytics-dashboard",
  },

  E_COMMERCE_MOBILE_APP: {
    label: "E-Commerce Mobile App",
    img: "/works/e-commerce-mobile-app.jpg",
    category: "Web & Mobile",
    description:
      "A cross-platform shopping app with product discovery, cart management, payment gateway integration, and order tracking.",
    technologies: "React Native, Node.js, MongoDB, Firebase",
    timeline: "3-4 Months",
    link: "https://example.com/mobile-app",
  },

  CORPORATE_BUSINESS_WEBSITE: {
    label: "Corporate Business Website",
    img: "/works/corporate-business-website.jpg",
    category: "Website Designs",
    description:
      "A clean, conversion-focused multi-page website for a B2B consultancy with interactive calculators, service pages, lead generation, and appointment booking.",
    technologies: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
    timeline: "4-6 Weeks",
    link: "https://example.com/corporate-website",
  },

  SOCIAL_MEDIA_CAMPAIGN: {
    label: "Social Media Campaign",
    img: "/works/social-media-campaign.jpg",
    category: "Graphic Designs",
    description:
      "A vibrant social media design system for a music streaming platform, including promotional posts, stories, campaign creatives, and reusable visual templates.",
    technologies: "Adobe Illustrator, Photoshop, Social Media Design",
    timeline: "2-3 Weeks",
    link: "https://example.com/social-media-campaign",
  },

  BRAND_IDENTITY_PACKAGE: {
    label: "Brand Identity Package",
    img: "/works/brand-identity-package.jpg",
    category: "Graphic Designs",
    description:
      "Complete brand identity for a specialty coffee brand, including logo design, colour palette, typography, packaging concepts, and comprehensive brand guidelines.",
    technologies: "Logo Design, Branding, Packaging, Adobe Illustrator",
    timeline: "3-4 Weeks",
    link: "https://example.com/brand-identity-package",
  },

  RESTAURANT_DINING_WEBSITE: {
    label: "Restaurant & Dining Website",
    img: "/works/restaurant-dining-website.jpg",
    category: "Website Designs",
    description:
      "An elegant fine-dining website featuring an interactive menu, online reservations, photo galleries, chef highlights, and a premium dining experience.",
    technologies: "Next.js, React, Tailwind CSS, Booking Integration",
    timeline: "4-5 Weeks",
    link: "https://example.com/restaurant-dining",
  },

  BEAUTY_LIFESTYLE_RETOUCHING: {
    label: "Beauty & Lifestyle Retouching",
    img: "/works/beauty-lifestyle-retouching.jpg",
    category: "Photo Editing",
    description:
      "High-end photo retouching for a beauty campaign, combining natural skin refinement, colour correction, detailed compositing, and premium commercial image finishing.",
    technologies: "Adobe Photoshop, Retouching, Colour Grading",
    timeline: "1-2 Weeks",
    link: "https://example.com/beauty-retouching",
  },

  CORPORATE_BRAND_FILM: {
    label: "Corporate Brand Film",
    img: "/works/corporate-brand-film.jpg",
    category: "Video Editing",
    description:
      "A cinematic corporate brand film communicating company values and services through professional editing, colour grading, motion graphics, and carefully crafted sound design.",
    technologies: "Adobe Premiere Pro, After Effects, Colour Grading",
    timeline: "3-4 Weeks",
    link: "https://example.com/corporate-brand-film",
  },

  PRODUCT_VISUALISATION: {
    label: "Product Visualisation",
    img: "/works/product-visualisation.jpg",
    category: "3D Designs",
    description:
      "Photorealistic 3D product renders for an electronics launch campaign, featuring detailed modelling, realistic materials, studio lighting, and multiple product perspectives.",
    technologies: "Blender, 3D Modelling, Materials, Lighting, Rendering",
    timeline: "2-3 Weeks",
    link: "https://example.com/product-visualisation",
  },
};

export const steps: StepsType[] = [
  {
    label: "Discuss",
    description:
      "We listen carefully to understand your idea, goals, and requirements before anything else.",
  },
  {
    label: "Plan",
    description:
      "We define the scope, timeline, and estimated budget so there are no surprises.",
  },
  {
    label: "Create",
    description:
      "Our team develops the application or produces the creative design with precision.",
  },
  {
    label: "Deliver",
    description:
      "We review, finalize, and deliver the completed project — ready to launch.",
  },
];

export const REVIEWS = [
  {
    clientName: "Rahul Sharma",
    rating: 5,
    product: "E-commerce App Client",
    color: "blue",
    comment:
      "Triadz delivered our e-commerce app on time and exceeded our expectations. The quality of work and communication throughout was outstanding.",
  },
  {
    clientName: "Priya Mehta",
    rating: 5,
    product: "Video Production Client",
    color: "purple",
    comment:
      "Exceptional video editing work for our product launch campaign. The final result was polished, professional, and drove real engagement.",
  },
  {
    clientName: "Arjun Patel",
    rating: 5,
    product: "Brand Identity Client",
    color: "primary",
    comment:
      "The logo and brand identity they created for us was exactly what we envisioned. They truly understood our brand and brought it to life beautifully.",
  },
];

export const STORY = [
  "Triadz was founded with a clear vision: to be the digital partner that businesses and creators can rely on for both technical and creative work — under one roof.",
  "We started as a small team of passionate developers and designers who believed that great digital products are born at the intersection of technology and creativity. Over time, we expanded our capabilities to cover software development, website design, graphic design, photo and video editing, and 3D visualization.",
  "Today, we work with clients across India and beyond — from startups launching their first product to established businesses looking to elevate their digital presence. Every project we take on gets our full attention, dedication, and creative energy.",
];
