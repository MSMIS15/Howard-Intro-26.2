
// +--------------+
// | ADD A FOOTER |
// +--------------+

let myName = "Howard Jiang";

let today = new Date();

let thisYear = today.getFullYear(today);

const footer = document.createElement('footer');

const copyright = document.createElement("p");

// Tutorials say innerHTML is not secure but assignment says to use innerHTML
copyright.innerHTML = `&copy; ${thisYear} ${myName}`;

document.body.appendChild(footer);

footer.appendChild(copyright);

// +-------------------------------+
// | DEFINE AND ADD LIST OF SKILLS |
// +-------------------------------+

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Kornshell", "Linux"];

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

