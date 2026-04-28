// All site content lives here — separating data from UI makes the components reusable
// and makes it trivial to update content without touching JSX.

export const MARQUEE_ITEMS = [
  "React Native",
  "TypeScript",
  "GraphQL",
  "Webflow",
  "Node.js",
  "MongoDB",
  "Redux",
  "Firebase",
];

export const CAPABILITIES = [
  {
    title: "Cross-platform mobile",
    desc: "iOS + Android from one React Native codebase — production-grade, not just MVPs.",
  },
  {
    title: "Smooth animations",
    desc: "60fps interactions with Reanimated, Gesture Handler, and Lottie.",
  },
  {
    title: "API integration",
    desc: "REST & GraphQL — auth flows, real-time data, offline cache, error states handled.",
  },
  {
    title: "App store delivery",
    desc: "Expo + EAS pipelines, signed APKs, and production releases on Google Play.",
  },
];

export const STATS = [
  { number: "01+", label: "Years building" },
  { number: "10+", label: "Projects shipped" },
  { number: "∞", label: "Coffee consumed" },
];

export const JOBS = [
  {
    role: "Webflow Developer",
    company: "Dashboard Doctor",
    period: "Sep 2025 — Present",
    tags: ["Webflow CMS", "SEO", "UI/UX"],
    points: [
      "Designed responsive school websites with Webflow CMS for NY-based institutions",
      "Customized layouts, components, and interactions per client briefs",
      "Optimized SEO, performance, and mobile responsiveness end-to-end",
    ],
  },
  {
    role: "React Native Developer",
    company: "PincodeKart Pvt Ltd",
    period: "Feb 2025 — Aug 2025",
    tags: ["React Native", "Expo", "GraphQL", "TypeScript"],
    points: [
      "Built scalable, reusable mobile UI components with React Native + Expo",
      "Integrated REST & GraphQL APIs for banners, filters, user data, listings",
      "Optimized APK build pipeline with focus on UI performance & animation",
    ],
  },
];

// Icon names are stored as strings — we resolve them in the component
// so we don't pull lucide imports into the data layer.
export const PROJECTS = [
  {
    no: "01",
    title: "PincodeKart",
    type: "E-Commerce Mobile App",
    desc: "Full-featured shopping experience with filters, cart, wishlist & search. Built with React Native CLI, TypeScript, GraphQL, Zustand.",
    stack: ["React Native", "TypeScript", "GraphQL", "Zustand"],
    iconName: "Smartphone",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.pincodekart.customerapp2025",
      },
    ],
  },
  {
    no: "02",
    title: "Myrris CRM",
    type: "Lead & Client Management",
    desc: "Responsive CRM platform with lead tracking, follow-ups, dashboards, and secure auth. MERN stack with Material UI.",
    stack: ["React", "MongoDB", "Express", "Material UI"],
    iconName: "Database",
    links: [{ label: "myrris.com", url: "https://myrris.com/" }],
  },
  {
    no: "03",
    title: "Food Delivery",
    type: "Mobile Application",
    desc: "Cross-platform food delivery app with smooth ordering flow, order tracking, and clean component architecture.",
    stack: ["React Native", "Redux", "REST API"],
    iconName: "Zap",
  },
  {
    no: "04",
    title: "NYC School Sites",
    type: "Webflow Development",
    desc: "Responsive school websites for New York-based educational institutions — designed and maintained on Webflow CMS.",
    stack: ["Webflow", "CMS", "SEO"],
    iconName: "Globe",
    links: [
      { label: "P.S. 094 Henry Longfellow", url: "https://www.ps94k.org/" },
      { label: "Dr. Jacqueline Peek-Davis Elementary", url: "https://www.ps12.org/" },
      { label: "P.S. 399 Stanley Eugene Clark", url: "https://www.ps399k.org/" },
      { label: "NYC Community Schools", url: "https://nycocs.webflow.io/" },
      { label: "M.S. 662 Liberty Avenue", url: "https://ms662-liberty-avenue.webflow.io/" },
    ],
  },
];

export const SKILLS = [
  { name: "React Native", level: 90, cat: "Mobile" },
  { name: "TypeScript", level: 85, cat: "Language" },
  { name: "JavaScript", level: 90, cat: "Language" },
  { name: "GraphQL", level: 80, cat: "API" },
  { name: "Webflow", level: 88, cat: "Platform" },
  { name: "React", level: 85, cat: "Web" },
  { name: "Redux", level: 82, cat: "State" },
  { name: "Node.js", level: 75, cat: "Backend" },
  { name: "MongoDB", level: 75, cat: "DB" },
  { name: "Firebase", level: 78, cat: "BaaS" },
  { name: "REST APIs", level: 88, cat: "API" },
  { name: "Git", level: 85, cat: "Tools" },
];

export const CONTACTS = [
  {
    iconName: "Mail",
    label: "Email",
    value: "Sarthakvj07@gmail.com",
    href: "mailto:Sarthakvj07@gmail.com",
    primary: true,
  },
  {
    iconName: "Phone",
    label: "Phone",
    value: "+91 70144 61153",
    href: "tel:+917014461153",
  },
  {
    iconName: "Linkedin",
    label: "LinkedIn",
    value: "/in/sarthakvijayvargiya",
    href: "https://www.linkedin.com/in/sarthakvijayvargiya",
  },
  {
    iconName: "MapPin",
    label: "Based in",
    value: "Jaipur, Rajasthan · IN",
    href: "#",
    disabled: true,
  },
];
