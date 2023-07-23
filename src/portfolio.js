const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'SM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sai Maneesh Chidirala',
  role: 'Front End Developer',
  description:
    'I am an experienced front-end developer with a passion for creating engaging user interfaces.My strong problem-solving abilities, communication skills, and dedication to staying updated with the latest web technologies make me an asset in delivering exceptional user experiences.',
  resume: 'https://drive.google.com/file/d/1usrA2ZCW5a_WZW7_SHUwyrb_Tkc5l4dZ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/saimaneeshlovel/',
    github: 'https://github.com/saimanishlovel',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ConverseAI ',
    description:
      'Allows users to communicate naturally to the AI through the website.',
    stack: ['Python', 'JavaScript', 'Node'],
    sourceCode: '#',
    livePreview: '#',
  },
  {
    name: 'V2X Technology',
    description:
      'The main objective is to improve road safety by enabling vehicles and infrastructure to share important information, such as speed, location, acceleration, and traffic conditions',
    stack: ['Python', 'Ml', 'protocals'],
    sourceCode: '#',
    livePreview: '#',
  },
  {
    name: 'Music Streaming',
    description:
      'Provides online functionality of streaming your favorite songs for free.',
    stack: ['Shazam', 'python', 'React'],
    sourceCode: '#',
    livePreview: '#',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'C/C++',
  'Python',
  'Data Structures',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'saimanishlovel@mail.com',
}

export { header, about, projects, skills, contact }
