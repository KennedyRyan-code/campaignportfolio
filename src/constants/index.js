import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  fbicon,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  simbalogo,
  globalschoollogo,
  taskforcelogo,
  upwork,
  kuhustlelogo,
  instagramicon,
  tiktokicone,
  githubicon,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Blog",
    url: "#blog",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  simbalogo,
  globalschoollogo,
  taskforcelogo,
  upwork,
  kuhustlelogo,
];

export const brainwaveServices = [
  "Graphics Designs & Media Branding",
  "School & Appointment systems",
  "Cloud & Server Services",
  "Social Media Campaigns",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Media Branding",
    text: "Your brand deserves to shine! From captivating logos to sleek, modern graphics, we craft designs that leave lasting impressions. Let us transform your ideas into visuals that captivate your audience and amplify your message.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "School & Appointment Systems",
    text: "Say goodbye to chaos and hello to organization! Our school and appointment systems are tailored to enhance efficiency, reduce paperwork, and ensure smooth scheduling.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "At CosmicTech, collaboration is at the heart of everything we do. By combining your unique vision with our expertise, we deliver solutions that go beyond expectations. Whether you're looking to enhance your digital presence, streamline operations, or drive engagement, we’ve got you covered..";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "From stunning, user-friendly websites to connecting systems for optimized workflows, we ensure every element works in harmony.",
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Future-Proof Solution",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: fbicon,
    width: 54,
    height: 56,
  },
  {
    id: "2",
    title: "Discord",
    icon: tiktokicone,
    width: 56,
    height: 58,
  },
  {
    id: "3",
    title: "instagram",
    icon: instagramicon,
    width: 54,
    height: 55,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: githubicon,
    width: 46,
    height: 44,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Designs that Speak, Brands that Resonate",
    text: "Your brand deserves to shine! From captivating logos to sleek, modern graphics, we craft designs that leave lasting impressions. Let us transform your ideas into visuals that captivate your audience and amplify your message.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Engage, Inspire, and Convert",
    text: "Your audience is online, and we know how to get their attention. With innovative strategies and creative content, our social media campaigns build connections that drive engagement and deliver results. Let’s tell your story and grow your brand online!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Empowering Your Digital World",
    text: "Take your business to the next level with our reliable cloud and server solutions. Whether it's secure storage, scalable hosting, or seamless backups, we ensure your operations are always online, efficient, and safeguarded.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Crafting Websites, Connecting Worlds",
    text: "Elevate your digital presence with stunning websites designed for impact and performance. Our expertise in API integration ensures your platform communicates effortlessly with third-party tools, streamlining processes and enhancing user experiences. From custom designs to robust functionality, we bring your vision to life—seamlessly.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Streamline Your Operations, Simplify Lives",
    text: "Say goodbye to chaos and hello to organization! Our school and appointment systems are tailored to enhance efficiency, reduce paperwork, and ensure smooth scheduling. Manage your time, data, and communication with ease—it's innovation for your success.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Payments Made Simple, Secure, and Swift",
    text: "Our digital payment solutions are designed to offer your customers a smooth, secure, and intuitive transaction experience. Whether it's mobile payments, online checkouts, or subscription management, we make every transaction a breeze, empowering your business to grow without boundaries.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
