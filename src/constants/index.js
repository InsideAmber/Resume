import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillMediumSquare } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';

export const skillsData = [
  {
    id: 1,
    title: 'Reactjs',
    level: 'Advanced',
  },
  {
    id: 2,
    title: 'Redux',
    level: 'Advanced',
  },
  {
    id: 3,
    title: 'React Native',
    level: 'Intermediate',
  },
  {
    id: 4,
    title: 'HTML,CSS',
    level: 'Advanced',
  },
  {
    id: 5,
    title: 'Nextjs',
    level: 'Advanced',
  },
  {
    id: 6,
    title: 'Nodejs',
    level: 'Intermediate',
  },
  {
    id: 7,
    title: 'Javascript',
    level: 'Intermediate',
  },
  {
    id: 8,
    title: 'MongoDB',
    level: 'Intermediate',
  },
  {
    id: 9,
    title: 'GraphQL',
    level: 'Intermediate',
  },
  {
    id: 10,
    title: 'Typescript',
    level: 'Intermediate',
  },
];

export const experienceOneCardData = {
  title: 'Associate Reactjs Developer @Celebal Technologies',
  location: 'Jaipur, India',
  description: `
  Contributing as a specialized frontend developer focused on ReactJS within Celebal Technologies, 
  I consistently design and implement captivating user interfaces. 
  Leveraging cross-functional teamwork, I ensure the seamless delivery of responsive web applications that marry design aesthetics with optimal functionality, enhancing user experiences. 
  My commitment to clean coding practices and ongoing skill development underscores my role in delivering high-quality frontend solutions.
    `,
  list: [
    {
      id: 1,
      text: 'Led successful Proof of Concepts (POCs) and client projects on the frontend side using ReactJS, ensuring high-quality code and delivering exceptional user interfaces.',
    },
    {
      id: 2,
      text: 'Developed and maintained cross-platform mobile applications using React Native, ensuring seamless user experiences and efficient codebase.',
    },
    {
      id: 3,
      text: 'Developed sleek and intuitive user interfaces using cutting-edge ReactJS libraries to enhance the user experience and visual appeal.',
    },
    {
      id: 4,
      text: 'Utilized Microsoft ReactJS libraries to seamlessly design Teams tab and Chatbot TaskModule user interfaces, contributing to a cohesive and efficient collaboration environment.',
    },
    {
      id: 5,
      text: 'Designed and developed an interactive and modern ReactJS dashboard for clients, integrating diverse charts and graphs to provide insightful data visualization and enhance decision-making capabilities.',
    },
    {
      id: 6,
      text: 'Implemented responsive design principles, ensuring seamless user experiences across various devices and screen sizes, and enhancing accessibility and usability.',
    },
    {
      id: 7,
      text: 'Leveraged state management tools to construct robust and resilient ReactJS web applications, optimizing data flow and maintaining application stability.',
    },
  ],
  techStack: [
    {
      id: 1,
      label: 'Javascript',
    },
    {
      id: 2,
      label: 'Reactjs',
    },
    {
      id: 3,
      label: 'Redux/Redux toolkit',
    },
    {
      id: 4,
      label: 'React Native',
    },
    {
      id: 5,
      label: 'Nodejs',
    },
    {
      id: 6,
      label: 'Apollo Client',
    },
    {
      id: 7,
      label: 'NPM',
    },
    {
      id: 8,
      label: 'Azure',
    },
    {
      id: 9,
      label: 'Github',
    },
  ],
};

export const experienceTwoCardData = {
  title: 'Frontend developer Intern @Celebal Technologies',
  location: 'Jaipur, India',
  description: `
  Executed a comprehensive tech stack to craft captivating and modern user interfaces, 
  employing best practices for optimized code. Proficiently acquired skills in 
  HTML, CSS, JavaScript, and ReactJS, coupled with responsive design expertise, 
  while leveraging various React libraries to deliver client-desired, in-demand frontends.
    `,
  list: [
    {
      id: 1,
      text: 'Acquired proficiency in the complete frontend tech stack, encompassing HTML, CSS, JavaScript, ReactJS, and Redux.',
    },
    {
      id: 2,
      text: 'Explored and successfully integrated Microsoft Fluent UI libraries and Material UI components, enhancing user interface aesthetics and functionality.',
    },
    {
      id: 3,
      text: 'Collaborated on developing a responsive Microsoft Teams tab using ReactJS, ensuring optimal user experiences across various devices and screen sizes.',
    },
    {
      id: 4,
      text: "Contributed to the creation of responsive web applications tailored to clients' needs, delivering seamless user experiences across diverse devices and platforms",
    },
  ],
  techStack: [
    {
      id: 1,
      label: 'HTML',
    },
    {
      id: 2,
      label: 'CSS',
    },
    {
      id: 3,
      label: 'Javascript',
    },
    {
      id: 4,
      label: 'Reactjs',
    },
    {
      id: 5,
      label: 'Fluent UI',
    },
    {
      id: 6,
      label: 'Material UI',
    },
  ],
};

export const projectOneCardData = {
  techStack: [
    {
      id: 1,
      label: 'Reactjs',
    },
    {
      id: 2,
      label: 'Google Auth',
    },
    {
      id: 3,
      label: 'Sanity Io',
    },
  ],
  title: 'Share Me Social Media Application',
  subTitle:
    'Developed a social media platform facilitating image sharing and downloading, fostering interactive content engagement.',
  description: `Designed and built a captivating Social Media platform resembling Pinterest, allowing seamless image sharing and downloading. Leveraged Google Auth for secure user authentication, implemented with ReactJS, and utilized Sanity.io for efficient content management, showcasing a blend of modern technologies and user-centered design.`,
  featureTitle: 'Some of the Important features -',
  featureLists: [
    {
      id: 1,
      text: 'Implemented secure and convenient login and logout functionality utilizing Google Auth, enhancing user accessibility and data protection within the project.',
    },
    {
      id: 2,
      text: 'Enabled users to upload images sorted by diverse categories, enhancing content organization and user experience within the project.',
    },
    {
      id: 3,
      text: "Implemented efficient search functionality and seamless image downloading, optimizing user exploration and interaction with the project's visual content.",
    },
    {
      id: 4,
      text: "Facilitated user engagement by incorporating a seamless picture commenting feature, fostering interactive discussions and enhancing the project's social interaction aspect",
    },
  ],
  exploreBtn: [
    {
      id: 1,
      name: 'Visit Website',
      icon: <TbWorld />,
      url: 'https://insidea-share-me.netlify.app/',
    },
    {
      id: 2,
      name: 'Source Code',
      icon: <BsGithub />,
      url: 'https://github.com/InsideAmber/Share_Me_Social-media',
    },
  ],
};

export const projectTwoCardData = {
  techStack: [
    {
      id: 1,
      label: 'Reactjs',
    },
    {
      id: 2,
      label: 'Rapid API',
    },
    {
      id: 3,
      label: 'Chakra UI',
    },
    {
      id: 4,
      label: 'Framer Motion',
    },
  ],
  title: 'Realtor',
  subTitle:
    'Created a Next.js website offering property rentals and purchases for apartments, villas, and hotels in Dubai, streamlining the real estate search experience.',
  description: `Designed and developed the Realtor website using Next.js, seamlessly integrating with Rapid API, enabling efficient browsing and selection of apartments, villas, and hotels available for purchase and rent in Dubai. Showcased expertise in frontend development, API integration, and real estate domain knowledge to deliver a user-friendly property listing platform.`,
  featureTitle: 'Some of the Important features -',
  featureLists: [
    {
      id: 1,
      text: 'Empowered users with comprehensive property insights by implementing a feature to access detailed information about all listed properties, enhancing informed decision-making within the Realtor project.',
    },
    {
      id: 2,
      text: 'Enhanced user experience through captivating animations and seamless loading features, elevating the visual appeal and performance of the project.',
    },
  ],
  exploreBtn: [
    {
      id: 1,
      name: 'Visit Website',
      icon: <TbWorld />,
      url: 'https://insidea-realestate.vercel.app/',
    },
    {
      id: 2,
      name: 'Source Code',
      icon: <BsGithub />,
      url: 'https://github.com/InsideAmber/insidea_realestate',
    },
  ],
};

export const projectThreeCardData = {
  techStack: [
    {
      id: 1,
      label: 'Reactjs',
    },
    {
      id: 2,
      label: 'Nodejs',
    },
    {
      id: 3,
      label: 'Express',
    },
    {
      id: 4,
      label: 'MongoDB',
    },
    {
      id: 5,
      label: 'Redux',
    },
    {
      id: 6,
      label: 'Material UI',
    },
  ],
  title: 'Memories App',
  subTitle:
    'Crafted a MERN application dedicated to capturing and cherishing moments, providing a platform to create and store memories.',
  description: `
  Developed a dynamic Memories App utilizing the MERN stack, featuring a social media-inspired platform with robust CRUD capabilities (Create, Read, Update, Delete), showcasing adeptness in full-stack development and user-centric design. 
  `,
  featureTitle: 'Some of the Important features -',
  featureLists: [
    {
      id: 1,
      text: "Implemented comprehensive user authentication features, including sign-in, sign-up, sign-out functionality, and seamless Google login, enhancing the project's user accessibility and security measures.",
    },
    {
      id: 2,
      text: 'Designed and implemented full CRUD (Create, Read, Update, Delete) functionality for user-generated posts, elevating user engagement and interaction within the project.',
    },
    {
      id: 3,
      text: 'Implemented interactive features allowing users to like and comment on posts, fostering dynamic user engagement and fostering a sense of community within the project.',
    },
    {
      id: 4,
      text: 'Developed robust search and filtering capabilities for posts, empowering users to efficiently locate and access relevant content within the project.',
    },
  ],
  exploreBtn: [
    {
      id: 1,
      name: 'Visit Website',
      icon: <TbWorld />,
      url: '',
    },
    {
      id: 2,
      name: 'Source Code',
      icon: <BsGithub />,
      url: 'https://github.com/InsideAmber/Memories-Project',
    },
  ],
};

export const projectFourCardData = {
  techStack: [
    {
      id: 1,
      label: 'Reactjs',
    },
    {
      id: 2,
      label: 'Nodejs',
    },
    {
      id: 3,
      label: 'Express',
    },
    {
      id: 4,
      label: 'MongoDB',
    },
    {
      id: 5,
      label: 'GraphQL',
    },
    {
      id: 6,
      label: 'Apollo Client',
    },
    {
      id: 7,
      label: 'Bootstrap',
    },
  ],
  title: 'Project Manager',
  subTitle:
    'Designed a MERNG application for efficient project management, combining MongoDB, Express, React, Node.js, and GraphQL to streamline project coordination and oversight.',
  description: `
  Engineered a robust Project Management solution using the MERNG stack, 
  enabling seamless client addition and deletion, 
  alongside comprehensive project management capabilities 
  including creation, deletion, and updates. Leveraged GraphQL APIs to efficiently retrieve project details, 
  showcasing proficiency in data manipulation and enhancing project coordination.
  `,
  featureTitle: 'Some of the Important features -',
  featureLists: [
    {
      id: 1,
      text: 'Implemented user-friendly functionality to effortlessly add and remove clients within the project, enhancing organizational efficiency and client management.',
    },
    {
      id: 2,
      text: 'Developed a versatile project management feature allowing seamless addition, retrieval, modification, and removal of projects, optimizing workflow and project lifecycle management.',
    },
    {
      id: 3,
      text: 'Implemented a streamlined feature enabling users to retrieve comprehensive project details, enhancing decision-making and facilitating efficient project assessment.',
    },
  ],
  exploreBtn: [
    {
      id: 1,
      name: 'Visit Website',
      icon: <TbWorld />,
      url: '',
    },
    {
      id: 2,
      name: 'Source Code',
      icon: <BsGithub />,
      url: 'https://github.com/InsideAmber/Project-Management',
    },
  ],
};

export const projectFiveCardData = {
  techStack: [
    {
      id: 1,
      label: 'Reactjs',
    },
    {
      id: 2,
      label: 'Solidity',
    },
    {
      id: 3,
      label: 'Smart Contracts',
    },
    {
      id: 4,
      label: 'thirdweb',
    },
    {
      id: 5,
      label: 'Metamask',
    },
    {
      id: 6,
      label: 'tailwind css',
    },
  ],
  title: 'Crowdfunding Web3.0 Applications',
  subTitle:
    'Web3.0 application to raise the fund for different types of events.',
  description: `
  Crowdfunding application is built by using solidity smart contracts with beautiful UI using tailwind
  css where users can raise the fund in ethereum by creating their global events. 
  `,
  featureTitle: 'Some of the Important features -',
  featureLists: [
    {
      id: 1,
      text: 'Users can create the campaigns to raise fund',
    },
    {
      id: 2,
      text: 'User can donate to the fund using metamask ethereum wallet',
    },
    {
      id: 3,
      text: 'We can also get the details of the fund',
    },
  ],
  exploreBtn: [
    {
      id: 1,
      name: 'Visit Website',
      icon: <TbWorld />,
      url: 'https://insidea-crowdfunding-web3.netlify.app',
    },
    {
      id: 2,
      name: 'Source Code',
      icon: <BsGithub />,
      url: 'https://github.com/InsideAmber/Crowdfunding-Web3.0',
    },
  ],
};

export const contacts = [
  {
    id: 2,
    name: 'Github',
    icon: <BsGithub />,
    url: 'https://github.com/InsideAmber',
  },
  {
    id: 3,
    name: 'Linkedin',
    icon: <BsLinkedin />,
    url: 'https://www.linkedin.com/in/amber-khan-4947051b3/',
  },
  {
    id: 4,
    name: 'Medium',
    icon: <AiFillMediumSquare />,
    url: 'https://medium.com/@lostinthoughtshard',
  },
];
