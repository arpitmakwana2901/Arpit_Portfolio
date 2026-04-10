// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import logo from "./assets/education_logo/logo.webp";

// Project Section Logo's
import WeatherAPI from "./assets/work_logo/Weather App (API Based).png";
import Calculator from "./assets/work_logo/Calculator.png";
import KFC from "./assets/work_logo/KFC.png";
import NOTES from "./assets/work_logo/Notes.png";
import Quiz from "./assets/work_logo/Quiz.png";
import ToDoList from "./assets/work_logo/To-Do List.png";
import Apple from "./assets/work_logo/Apple.png";
import Skechers from "./assets/work_logo/skechers.png";
import Slider from "./assets/work_logo/slider.png";
import CRUD from "./assets/work_logo/crud.png";
import StudentManagement from "./assets/work_logo/student_management.png";
import BookStore from "./assets/work_logo/book_store.png";
import Recipe from "./assets/work_logo/recipe.png";
import RestAPI from "./assets/tech_logo/restapi1.jpg";
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      // { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  // {
  //   title: "Languages",
  //   skills: [
  //     { name: "C", logo: cLogo },
  //     { name: "C++", logo: cppLogo },
  //     { name: "JavaScript", logo: javascriptLogo },
  //     { name: "TypeScript", logo: typescriptLogo },
  //   ],
  // },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "RestAPI", logo: RestAPI },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    // img: logo,
    school: "Surendranagar University",
    date: "Pursuing",

    desc: "I am pursuing my Master of Science in Information Technology (MSC.IT) with a focus on software development, web technologies, and computer science fundamentals. Throughout my course, I am gaining strong technical knowledge, practical project experience, and problem-solving skills that prepare me for a professional career in the IT industry.",
    degree: "Master of Science in Information Technology - MSC.IT",
  },
  {
    id: 1,
    // img: logo,
    school: "Lokmanya College, Ahmedabad",
    date: "Sept 2021 - July 2024",
    desc: "have successfully completed my Bachelor of Computer Applications (BCA), gaining strong knowledge in programming, web development, databases, and computer systems. Throughout my course, I worked on multiple practical projects, improving my technical skills and problem-solving abilities.",
    degree: "Bachelor of Computer Applications - BCA",
  },
];

export const projects = [
  {
    id: 0,
    title: "Skechers",
    description:
      "Developed a responsive Skechers website clone using HTML and CSS, focusing on clean UI design and user-friendly layout. The project showcases product listings, modern styling, and smooth navigation, highlighting front-end development skills and attention to detail.",
    image: Skechers,
    tags: ["HTML", "CSS"],
    github: "https://github.com/arpitmakwana2901/Skechers_website",
    webapp: "https://skecherswebsite.vercel.app/",
  },
  {
    id: 1,
    title: "KFC Burger",
    description:
      "Built a responsive and visually appealing KFC-style burger website with dynamic menu sections and interactive features using HTML, CSS, and JavaScript, focusing on user experience and clean design.",
    image: KFC,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/arpitmakwana2901/KFC_Burger_Website",
    webapp: "https://kfc-burger-website.vercel.app/",
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "Created a Notes App using modern development tools to manage notes effectively, supporting CRUD operations with a responsive and user-friendly interface.",
    image: NOTES,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/arpitmakwana2901/Notes_App",
    webapp: "https://notesapp-bay.vercel.app/",
  },
  {
    id: 3,
    title: "Slider",
    description:
      "Built a responsive image slider using HTML, CSS, and JavaScript with smooth transitions and user-friendly controls.",
    image: Slider,
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/arpitmakwana2901/javascript/blob/master/preatic__/slider.html",
    webapp:
      "https://github.com/arpitmakwana2901/javascript/blob/master/preatic__/slider.html",
  },
  {
    id: 4,
    title: "Quiz App",
    description:
      "Quiz App – Designed and developed a quiz application with multiple questions, timer-based gameplay, score tracking, and responsive user interface using modern app development concepts.",
    image: Quiz,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/arpitmakwana2901/Quiz-App",
    webapp: "https://github.com/arpitmakwana2901/Quiz-App",
  },
  {
    id: 5,
    title: "CRUD",
    description:
      "Developed a CRUD application using HTML, CSS, JavaScript and React that allows users to Create, Read, Update, and Delete records efficiently. Implemented real-time updates, user-friendly UI, and toast notifications for better user experience.",
    image: CRUD,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/arpitmakwana2901/CRUD_APP",
    webapp: "https://crud-app-orcin-xi.vercel.app/",
  },
  {
    id: 6,
    title: "To-Do List",
    description:
      "Developed a To-Do List application using HTML, CSS, and JavaScript that allows users to add, edit, and delete tasks efficiently. Implemented real-time task updates, user-friendly UI, and toast notifications for actions like add and delete to enhance user experience.",
    image: ToDoList,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/arpitmakwana2901/Todo-List-App",
    webapp: "https://todo-list-app-eight-iota.vercel.app/",
  },
  {
    id: 7,
    title: "Student Management",
    description:
      "Built a Student Management System using React with CRUD operations and a responsive, user-friendly interface.",
    image: StudentManagement,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/arpitmakwana2901/Student_Management",
    webapp: "https://github.com/arpitmakwana2901/Student_Management",
  },
  {
    id: 8,
    title: "Book Store",
    description:
      "Built a full-stack Book Store app using React, Node.js, and MongoDB with CRUD functionality and responsive UI.",
    image: BookStore,
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    github:
      "https://github.com/arpitmakwana2901/node-js/tree/master/project/BOOK%20STORE%20DETAILS",
    webapp:
      "https://github.com/arpitmakwana2901/node-js/tree/master/project/BOOK%20STORE%20DETAILS",
  },
  {
    id: 9,
    title: "Recipe",
    description:
      "Built a full-stack Recipe app using React, Node.js, and MongoDB with CRUD functionality and a responsive interface.",
    image: Recipe,
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/arpitmakwana2901/RECIPE",
    webapp: "https://github.com/arpitmakwana2901/RECIPE",
  },
];
