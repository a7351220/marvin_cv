import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Marvin Hsieh",
  initials: "BJ",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/Taipei",
  about:
    "Exploring the fascinating world of blockchain technology.",
  summary:
    "I am a proactive and adaptable individual with a solid technical foundation, strong problem-solving abilities, and excellent communication skills. I excel in analyzing challenges, developing innovative solutions, and collaborating with teams to deliver impactful results. With expertise in cutting-edge fields such as blockchain, artificial intelligence, and full-stack development, I bring a flexible and solution-oriented approach to complex technical and collaborative environments. Additionally, I am proficient in Python, JavaScript, and Java, with the capability to independently develop systems from requirement analysis to deployment, ensuring efficiency and high-quality delivery.",
  avatarUrl: "https://cdn.dorahacks.io/static/files/1928085b6d44e7a4266cb6244f79f40b.png@128h.webp",
  personalWebsiteUrl: "",
  contact: {
    email: "a0918860257@gmail.com",
    tel: "+886 918860257",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/a7351220",
        icon: GitHubIcon,
      },
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/bjarocki/",
      //   icon: LinkedInIcon,
      // },
      {
        name: "X",
        url: "https://x.com/minghua6699",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National Chung Cheng University",
      degree: "Master Program In Financial Technology",
      start: "2022",
      end: "2024",
    },
    {
      school: "National Chiayi University",
      degree: "Department of Electrical Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Cathay Blockchain",
      link: "https://www.cathayholdings.com/holdings/",
      badges: ["Full Time"],
      title: "Intern",
      logo: ConsultlyLogo,
      start: "2024/02",
      end: "11",
      description:
      "Participated in research on blockchain technologies such as DID, L2, and consortium blockchains. " +
      "Assisted in refactoring Cathay's proprietary BDK consortium blockchain deployment toolkit, contributing to the implementation of a command-driven architecture that simplifies the deployment process. " +
      "Developed a modular approach for consortium blockchain node deployment using Docker and Typescript, streamlining parameterized configuration and enhancing deployment efficiency. " +
      "Integrated support for multiple blockchain platforms, including Hyperledger Fabric, Quorum, and Besu. " +
      "Contributed to DID protocol implementation to enable decentralized identity verification and data management while ensuring privacy protection. " +
      "Explored Layer 2 solutions like Rollups and State Channels, analyzing their potential for performance optimization and enterprise application feasibility. " +
      "Technologies: Typescript, Node.js, Docker, Kubernetes, Hyperledger Fabric, Quorum, Besu".split('.').map((item) => item.trim()).filter((item) => item !== "")
    },
    {
      company: "BOBA DAO",
      link: "https://x.com/bobadao_lfg",
      badges: ["Remote"],
      title: "Contributor",
      logo: ClevertechLogo,
      start: "2024",
      end: "Present",
      description:
        "Delivered an engaging presentation on Introduction to Move Language at an Aptos Workshop, providing attendees with a foundational understanding of Move's syntax, features, and use cases. " +
        "Facilitated interactive discussions and Q&A sessions, fostering a collaborative learning environment for participants to deepen their knowledge of Move programming. ".split('. ').map((item) => item.trim()).filter((item) => item !== "")
    },
    {
      company: "CryptoPaul",
      link: "https://x.com/CryptoPaultw",
      badges: ["Remote"],
      title: "Intern",
      logo: ParabolLogo,
      start: "2024",
      end: "Present",
      description:
        "Responsible for writing daily blockchain news reports on X platform, achieving an average daily traffic of 3,000 and a peak of over 20,000, attracting numerous imitators. " +
        "Managed a community of over 400 members, facilitating interactions and sharing on-chain insights. " +
        "Participated in the production of YouTube videos explaining current events in the blockchain space. ".split('. ').map((item) => item.trim()).filter((item) => item !== "")
    },
    {
      company: "Chang Hwa Bank",
      link: "https://www.bankchb.com/frontend/index.html",
      badges: ["Full Time"],
      title: "Intern",
      logo: ClevertechLogo,
      start: "2023/07",
      end: "09",
      description:
        "Independently developed a retirement financial planning system integrated with a Taiwanese stock market machine learning-based intelligent recommendation system. " +
        "Utilized machine learning models to automatically recommend monthly investment portfolio targets and provided nine different strategy options based on user risk preferences. " +
        "Technologies: Python, React, Firebase ".split('. ').map((item) => item.trim()).filter((item) => item !== "")
    },
    {
      company: "Aptos Code Collision Hackathon",
      link: "https://dorahacks.io/buidl/17220",
      badges: ["Full Time"],
      title: "Intern",
      logo: ClevertechLogo,
      start: "2024/08",
      end: "11",
      description:
        "In 2024, I participated in the Aptos Code Collision Hackathon and won 4th place globally (MEXC Venture's Choice Award) and 2nd place in the Taipei Warm-Up Event with the project 紅包拿來. " +
        "The project leveraged Aptos Random API and zero-knowledge proof technology to design a fair and transparent red envelope distribution system, creatively blending traditional culture with innovative technology. " +
        "Technologies: Move, Aptos SDK, Next ".split('. ').map((item) => item.trim()).filter((item) => item !== "")
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Solidity",
    "Python",
    "Firebase",
    "Docker",
    "Git",
    "Linux",
  ],
  projects: [

  ],
} as const;
