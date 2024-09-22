// JS Object
const portfolioData = {
    name: "Muhammad Taha Abbas",
    nameUrdu: "محمد طہ عباس",
    description: "A Student at ITU",
    skills: {
        hard: ["C++", "Python", "SQL", "HTML", "CSS", "Visual Basic"],
        soft: ["Communication", "TeamWork", "Problem-Solving", "Leadership"]
    },
    videoContent: "https://www.youtube.com/embed/48h57PspBec?si=LreHmx1uT3B5xfMR",
    projects: [
        { title: "Chess", technologies: "OOP, C++", date: "Jan 2022" },
        { title: "Shogi", technologies: "OOP, C++", date: "May 2022" },
        { title: "Word Scramble", technologies: "DSA, C++", date: "Dec 2022" },
        { title: "Restaurant Management System", technologies: "SQL, HTML, CSS, PHP", date: "May 2023" }
    ],
    certificates: ["Certified Python Developer", "Data Analytics Certificate"],
    courses: ["Programming Fundamentals", "Object Oriented Programming", "Data Structures", "Database"],
    degree: {
        title: "Bachelor of Computer Science",
        institution: "Information Technology University",
        duration: "2021-2025"
    },
    socialMedia: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-taha-abbas-95bab5278/", icon: "bx bxl-linkedin-square" },
        { platform: "Instagram", url: "https://www.instagram.com/tahaabbas7/", icon: "bx bxl-instagram" },
        { platform: "GitHub", url: "https://github.com/tahaabbas7", icon: "bx bxl-github" }
    ]
};

// populating html with JS

// Intro
document.getElementById('name').textContent = portfolioData.name;
document.getElementById('name-urdu').textContent = portfolioData.nameUrdu;
document.getElementById('description').textContent = portfolioData.description;

// Skills
const hardSkillsContainer = document.getElementById('hard-skills');
portfolioData.skills.hard.forEach(skill => {
    const skillBox = document.createElement('div');
    skillBox.classList.add('box');
    skillBox.innerHTML = `<p>${skill}</p>`;
    hardSkillsContainer.appendChild(skillBox);
});

const softSkillsContainer = document.getElementById('soft-skills');
portfolioData.skills.soft.forEach(skill => {
    const skillBox = document.createElement('div');
    skillBox.classList.add('box');
    skillBox.innerHTML = `<p>${skill}</p>`;
    softSkillsContainer.appendChild(skillBox);
});

//  Video Content
document.getElementById('video-content').src = portfolioData.videoContent;

//  Projects
const projectsContainer = document.getElementById('projects-list');
portfolioData.projects.forEach(project => {
    const projectBox = document.createElement('div');
    projectBox.classList.add('box');
    projectBox.innerHTML = `<h3>${project.title}</h3><p>${project.technologies}</p><p1>${project.date}</p1>`;
    projectsContainer.appendChild(projectBox);
});

//  Certificates
const certificatesContainer = document.getElementById('certificates-list');
portfolioData.certificates.forEach(certificate => {
    const certificateBox = document.createElement('div');
    certificateBox.classList.add('box');
    certificateBox.innerHTML = `<h3>${certificate}</h3>`;
    certificatesContainer.appendChild(certificateBox);
});

//  Courses
const coursesContainer = document.getElementById('courses-list');
portfolioData.courses.forEach(course => {
    const courseBox = document.createElement('div');
    courseBox.classList.add('box');
    courseBox.innerHTML = `<h3>${course}</h3>`;
    coursesContainer.appendChild(courseBox);
});

//  Degree
const degreeContainer = document.getElementById('degree-info');
degreeContainer.innerHTML = `<div class="box"><h3>${portfolioData.degree.title}</h3><p>${portfolioData.degree.institution} ${portfolioData.degree.duration}</p></div>`;

//  Social Media
const socialMediaContainer = document.getElementById('social-media');
portfolioData.socialMedia.forEach(social => {
    const socialBox = document.createElement('div');
    socialBox.classList.add('box');
    socialBox.innerHTML = `<a href="${social.url}"><i class="${social.icon}"></i></a>`;
    socialMediaContainer.appendChild(socialBox);
});
