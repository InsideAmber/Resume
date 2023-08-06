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
            Implementing microsoft reactjs libraries to create microsoft teams
            tab and building the user interface of microsoft teams chatbot
            taskmodule. Also Creating responsive web design for all devices.
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
      text: 'Building Modern user interface using latest Reactjs library',
    },
    {
      id: 4,
      text: 'Implementing Microsoft Reactjs libraries to create teams tab and chatbot taskmodule UI',
    },
    {
      id: 5,
      text: 'Building interactive modern reactjs dashboard for the clients using different kind of chart and graph',
    },
    {
      id: 6,
      text: 'Creating responsive design for all type of devices',
    },
    {
      id: 7,
      text: 'Using state management tools to build strong and robust reactjs web applications',
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
      label: 'Redux',
    },
    {
      id: 4,
      label: 'Apollo Client',
    },
    {
      id: 5,
      label: 'NPM',
    },
    {
      id: 6,
      label: 'Azure',
    },
    {
      id: 7,
      label: 'Github',
    },
  ],
};

export const experienceTwoCardData = {
  title: 'Frontend developer Intern @Celebal Technologies',
  location: 'Jaipur, India',
  description: `
            Implemented every tech stack that is responsible to create a beautiful UI
            with modern and optimized code practices. Learned HTML, CSS, Javascript, Reactjs, and
            responsive design all the way long. implemented lots of react libraries to create in demand 
            frontend by clients.
    `,
  list: [
    {
      id: 1,
      text: 'Learned Frontend tech stack Including HTML, CSS, Javascript, Reactjs,Redux',
    },
    {
      id: 2,
      text: 'Explored and implement microsoft fluent UI libraries and material UI',
    },
    {
      id: 3,
      text: 'Worked to create responsive microsoft teams tab using reactjs',
    },
    {
      id: 4,
      text: 'Created responsive web applications for clients',
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
  subTitle: 'It is a social media application to share and download the Images',
  description: `Social Media application to share and download the picture. more like a
                pinterest It was made by using Google Auth, Reactjs, and Sanity Io`,
  featureTitle: 'Some of the Important features -',
  featureLists: [
    {
      id: 1,
      text: 'Login and Logout using google auth',
    },
    {
      id: 2,
      text: 'Upload the Picture by different Categories',
    },
    {
      id: 3,
      text: 'Search and Download the pictures',
    },
    {
      id: 4,
      text: 'Comment on the Pictures',
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
    'This is a Nextjs website to rent and buy an apartment, villas and hotel in dubai.',
  description: `Realtor is nextjs website developed by using rapid api to buy and rent an apartment, villas and hotel in dubai`,
  featureTitle: 'Some of the Important features -',
  featureLists: [
    {
      id: 1,
      text: 'Get all the details about all of the properties',
    },
    {
      id: 2,
      text: 'Some cool animation and loading Features',
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
  subTitle: 'This is a MERN application to create memories.',
  description: `
  Memories App is built by using MERN(MongoDB, Express, Rectjs, Nodejs) stack which is more like social media app 
  based on CRUD(Create, Read, Update, Delete) functionalities 
  `,
  featureTitle: 'Some of the Important features -',
  featureLists: [
    {
      id: 1,
      text: 'User can signin, signup and signout. also login by google',
    },
    {
      id: 2,
      text: 'User can create, read, update and delete post',
    },
    {
      id: 3,
      text: 'User can like and comment on the post',
    },
    {
      id: 4,
      text: 'User can search and filter the post',
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
  subTitle: 'This is a MERN application to manage project.',
  description: `
  Project manager is built by using MERN stack based on GraphQL Api 
  within CRUD(Create, Read, Update, Delete) functionalities. In frontend I have used Apollo client to manage state 
  and bootstrap for UI design.
  `,
  featureTitle: 'Some of the Important features -',
  featureLists: [
    {
      id: 1,
      text: 'We can add and delete client',
    },
    {
      id: 2,
      text: 'We can add, read, update and delete the project',
    },
    {
      id: 3,
      text: 'We can get the details of project',
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
