
// +--------------+
// | ADD A FOOTER |
// +--------------+

const myName = "Howard Jiang";
let today = new Date();
let thisYear = today.getFullYear();
const footer = document.createElement('footer');
const copyright = document.createElement("p");

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


// +----------------------------+
// | HANDLE MESSAGE FORM SUBMIT |
// +----------------------------+

const messageForm = document.querySelector('form[name="leave_message"]');

//console.log('messageForm: ', messageForm);

messageForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  const removeButton = document.createElement('button');

  console.log('Name: ', name);
  console.log('Email: ', email);
  console.log('Message: ', message);

  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span>`;

  removeButton.innerText = 'Remove';
  removeButton.setAttribute('type', 'button');
  removeButton.style.width = '75px';
  removeButton.style.height = '30px';
  removeButton.style.fontSize = '17px';
  removeButton.addEventListener('click', function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  event.target.reset();
});
