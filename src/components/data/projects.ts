export type Project = {
  name: string;
  year: string,
  description: string;
  details: string;
  company: string,
  image: string,
  url: string,
}

const projects: Project[] = [
  {
    name: "ChomCHOB Platforms",
    year: '2024',
    image: 'projects/cc-platform.png',
    company: 'ChomCHOB',
    url: '/projects/cc-platform',
    description: `Direct and supervise for develop whole company's products`,
    details: `At its core, ChomCHOB focuses on loyalty technology and FinTech products. The ChomCHOB Platforms
initiative is a strategic expansion that builds upon these core offerings to enhance other technology sectors,
including HRTech, MarTech, and EdTech.

The concept extends beyond marketing; loyalty is essential across various segments. In HRTech,
organizations should foster loyalty with their employees. In MarTech, businesses should cultivate loyalty with
their customers. In EdTech, schools should build loyalty with their students and parents.

As a Tech Lead, I conducted research and gathered data to design this product strategy and idea for
discussion with executives. I also supervised the development of products in alignment with this plan.`
  },
  {
    name: "ChomCHOB Tunnel",
    year: '2022',
    image: '/projects/cc-tunnel-1.png',
    company: 'ChomCHOB',
    url: '/projects/cc-tunnel',
    description: `Blockchain product for converting between cryptocurrencies and loyalty point in real world`,
    details: `ChomCHOB Tunnel is the first smart contract products of ChomCHOB. This product gives users to convert
between their cryptocurrencies on blockchain and CCP (ChomCHOB point), two-way conversion. This
product solve pain point of people who have cryptocurrencies on blockchain but hard to use in real-life and
also make benefit to origin ChomCHOB business.

In this project, I design project concepts, project management, and implement smart contracts.`
  },
  {
    name: "ChomCHOB Backend Framwork",
    year: '2021',
    image: '/projects/cc-framework.png',
    company: 'ChomCHOB',
    url: '/projects/cc-backend-framework',
    description: `Building own Typescript framework for microservice`,
    details: `Developed a custom backend framework to enhance team collaboration by establishing a unified and
consistent development environment. This framework was built upon the team's existing structure,
considering CI/CD constraints, and included transitioning the team’s primary programming language from
JavaScript to TypeScript.

The framework extended beyond project architecture to incorporate shared tools, such as CLI tools for
project scaffolding, API creation, and function development, along with helper libraries to simplify common
tasks.

Additionally, the framework was designed to support more than just API development, featuring a
microservices architecture that accommodates various processing capabilities, such as queue processing,
job handling, pub/sub systems, and more.`
  },
  {
    name: "HR Tech 2024",
    year: '2024',
    image: '/projects/HR Tech.jpg',
    company: 'ChomCHOB',
    url: '/projects/hr-tech-2024',
    description: `Speaker in ChomCHOB's Tech Stage in HR Tech 2024 event`,
    details: ``
  },
  {
    name: "Gachapon and Stamp System",
    year: '2019-2024',
    image: '/projects/HR Tech.jpg',
    company: 'ChomCHOB',
    url: '/projects/cc-gachapon-stamp',
    description: '',
    details: '',
  },
  {
    name: "ChomWallet",
    year: '2023',
    image: '/projects/HR Tech.jpg',
    company: 'ChomCHOB',
    url: '/projects/chom-wallet',
    description: '',
    details: '',
  },
  {
    name: "TimeBit",
    year: '2023',
    image: '/projects/HR Tech.jpg',
    company: 'ChomCHOB',
    url: '/projects/time-bit',
    description: '',
    details: '',
  },
  {
    name: "Harvest Point and Rocket Point",
    year: '2020 - 2023',
    image: '/projects/HR Tech.jpg',
    company: 'ChomCHOB',
    url: '/projects/harvest-point',
    description: '',
    details: '',
  },
  {
    name: "Referral Platforms",
    year: '2020',
    image: '/projects/HR Tech.jpg',
    company: 'ChomCHOB',
    url: '/projects/referral-platform',
    description: '',
    details: '',
  },
  {
    name: "Morefans - NFT Ticket",
    year: '2022',
    image: '/projects/HR Tech.jpg',
    company: 'ChomCHOB',
    url: '/projects/morefans',
    description: '',
    details: '',
  },
  {
    name: "Data Analytics",
    year: '2020',
    image: '/projects/HR Tech.jpg',
    company: 'ChomCHOB',
    url: '/projects/cc-data-analytics',
    description: '',
    details: '',
  },
  {
    name: "Google Next '23",
    year: '2023',
    image: '/projects/gg-next-23/cover.jpeg',
    company: 'ChomCHOB',
    url: '/projects/google-next-23',
    description: 'Attended Google Cloud Next \'23 in San Francisco to explore the latest innovations in cloud technology and AI, including the launch of DUET AI for Google Workspace.',
    details: '',
  },
]
export default projects