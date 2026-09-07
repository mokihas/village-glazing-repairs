export const siteConfig = {
  businessName: "Village Glazing Repairs",
  legalBusinessName: "Village Glazing Repairs",
  tagline: "Expert Window & Door Repairs",
  primaryCategory: "Glass & Glazing Contractor",
  secondaryCategories: ["Window Installation Service", "Glass Repair Service"],
  phone: "07708 132985",
  whatsapp: "447708132985",
  email: "info@villageglazingrepairs.co.uk",
  website: "https://www.facebook.com/villageglazingrepairs/?locale=en_GB",
  streetAddress: "Wallasey",
  city: "Wallasey",
  state: "Merseyside",
  postalCode: "",
  country: "UK",
  latitude: 53.4239,
  longitude: -3.0645,
  openingHours: [
    { day: "Monday", open: "08:00", close: "17:00" },
    { day: "Tuesday", open: "08:00", close: "17:00" },
    { day: "Wednesday", open: "08:00", close: "17:00" },
    { day: "Thursday", open: "08:00", close: "17:00" },
    { day: "Friday", open: "08:00", close: "17:00" },
    { day: "Saturday", open: "09:00", close: "13:00" },
    { day: "Sunday", open: "Closed", close: "Closed" }
  ],
  serviceAreas: [
    { name: "Wallasey", slug: "wallasey" },
    { name: "Wirral", slug: "wirral" },
    { name: "Birkenhead", slug: "birkenhead" },
    { name: "Liscard", slug: "liscard" },
    { name: "Merseyside", slug: "merseyside" }
  ],
  logo: "/logo.png",
  favicon: "/favicon.ico",
  heroImage: "/images/hero-placeholder.svg",
  aboutImage: "/images/about-placeholder.svg",
  socialProfiles: [
    { platform: "facebook", url: "https://www.facebook.com/villageglazingrepairs/?locale=en_GB" }
  ],
  reviews: {
    googleBusinessProfileUrl: "https://maps.app.goo.gl/iLpo8wipGJHzdouk6",
    aggregateRating: "5.0",
    totalReviews: "50",
    reviewWidgetEmbedCode: `<!-- Paste your Google Reviews Widget Embed Code Here -->`
  },
  trustBadges: [] as Array<{name: string, image: string}>,
  companyRegistrationNumber: "",
  yearEstablished: 2005,
  founder: "",
  description: "Expert window and door repairs in Wallasey. We fix misted double glazing, locks, hinges, and lead lites. 21 years of experience saving you money.",
  emergencyService: true,
  certifications: ["21 years experience"],
  brands: [],
  services: [
    {
      id: "double-glazing-repairs",
      name: "Double Glazing Repairs",
      slug: "double-glazing-repairs",
      shortDescription: "Replacement of misted or broken double-glazed units.",
      longDescription: "We provide professional double glazing replacement services for homes and businesses. Save hundreds repairing the windows you have instead of replacing them.",
      image: "/images/service-placeholder.svg",
      applications: ["Misted windows", "Broken glass", "Condensation inside glass"],
    },
    {
      id: "locks-hinges-mechanisms",
      name: "Locks, Hinges & Mechanisms",
      slug: "locks-hinges-mechanisms",
      shortDescription: "Repair and replacement of window and door locks, hinges, and mechanisms.",
      longDescription: "Secure your property with our hardware maintenance services. We fix and replace stiff hinges, broken locks, and faulty multi-point locking mechanisms on uPVC and other doors and windows.",
      image: "/images/commercial-glazing-placeholder.svg",
      applications: ["Door locks", "Window hinges", "UPVC mechanisms"],
    },
    {
      id: "lead-lites",
      name: "Lead Lites & Traditional Glazing",
      slug: "lead-lites",
      shortDescription: "Specialized work on lead lights and traditional glazing.",
      longDescription: "We offer bespoke traditional glazing services including the repair and restoration of beautiful lead lites, preserving the aesthetic of your property.",
      image: "/images/residential-glazing-placeholder.svg",
      applications: ["Lead lites", "Traditional glazing", "Bespoke glass"],
    },
    {
      id: "general-maintenance",
      name: "General Glazing Maintenance",
      slug: "general-maintenance",
      shortDescription: "Adjustments for drafty windows and doors, and pet flaps.",
      longDescription: "We provide general maintenance for all your glazing needs, including fixing drafty windows and doors, removing large panes for furniture access, and installing cat and dog flaps in glass.",
      image: "/images/emergency-glazing-placeholder.svg",
      applications: ["Drafty windows", "Cat/dog flaps", "Furniture access"],
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Happy Customer",
      text: "Excellent service. They repaired my misted double glazing quickly and for a fraction of the cost of a new window.",
      date: "2024-01-15",
      service: "Double Glazing Repairs"
    }
  ],
  projects: [] as Array<{id: string, title: string, type: string, location: string, service: string, description: string, image: string}>,
  faqs: [
    {
      question: "Do I need to replace the whole window if it's misted?",
      answer: "No, you can save hundreds by just replacing the double-glazed unit itself, keeping your existing window frames."
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free, no-obligation quotes. We can often provide an estimate if you send us photos of the issue via Facebook or WhatsApp."
    },
    {
      question: "Can you fix broken window hinges and locks?",
      answer: "Absolutely. We specialize in replacing and repairing locks, hinges, and mechanisms for both windows and doors."
    }
  ],
  ghl: {
    enableChatWidget: false,
    chatWidgetEmbedCode: ``,
    heroFormEmbedCode: ``,
    contactFormEmbedCode: ``
  }
};
