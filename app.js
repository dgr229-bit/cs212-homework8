console.log("Homework 8 JavaScript loaded.");

// ------------------------------
// Greeting + About section
// ------------------------------
let userName = "Daniel Rayos";

function showGreeting(name) {
  return "Hello, my name is " + name + ". Welcome to my portfolio!";
}

function daysUntilDeadline(deadline) {
  const today = new Date();
  const endDate = new Date(deadline);

  const diffTime = endDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

document.getElementById("greetingMsg").textContent = showGreeting(userName);

const daysLeft = daysUntilDeadline("May 10, 2026");
document.getElementById("deadlineMsg").textContent =
  "Days until semester deadline: " + daysLeft;

// ------------------------------
// Step 1: Add skills from input
// ------------------------------
let skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Cybersecurity Fundamentals"
];

const skillInput = document.getElementById("skillInput");
const addSkillBtn = document.getElementById("addSkillBtn");
const skillsList = document.getElementById("skillsList");
const skillMessage = document.getElementById("skillMessage");

function displaySkills() {
  skillsList.innerHTML = "";

  for (let i = 0; i < skills.length; i++) {
    const skillBadge = document.createElement("span");
    skillBadge.className = "badge text-bg-primary p-2 fs-6";
    skillBadge.textContent = skills[i];
    skillsList.appendChild(skillBadge);
  }
}

function addSkill() {
  const newSkill = skillInput.value.trim();

  if (newSkill === "") {
    skillMessage.textContent = "Please enter a skill before clicking Add Skill.";
    return;
  }

  if (skills.includes(newSkill)) {
    skillMessage.textContent = newSkill + " is already in your skills list.";
    skillInput.value = "";
    return;
  }

  skills.push(newSkill);
  displaySkills();

  skillMessage.textContent = newSkill + " was added successfully.";
  skillInput.value = "";
  skillInput.focus();
}

addSkillBtn.addEventListener("click", addSkill);

// Allow pressing ENTER to add skill
skillInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addSkill();
  }
});

displaySkills();

// ------------------------------
// Step 2 + 3: Projects with arrays,
// loop, and deadline comparison
// ------------------------------
const projectTitles = [
  "Portfolio Website",
  "JavaScript Homework Assignments",
  "Cybersecurity Notes Project"
];

const projectDescriptions = [
  "A responsive portfolio website built using HTML, CSS, Bootstrap, and JavaScript.",
  "Course assignments focused on DOM manipulation, layout, and interactive web design.",
  "A collection of security concepts and notes from coursework and independent study."
];

const projectDeadlines = [
  "2026-04-20",
  "2026-03-10",
  "2026-05-01"
];

const projectImages = [
  "images/project1.jpg",
  "images/project2.jpg",
  "images/project3.jpg"
];

const projectsContainer = document.getElementById("projectsContainer");

function getProjectStatus(deadline) {
  const today = new Date();
  const projectDate = new Date(deadline);

  if (projectDate >= today) {
    return "Ongoing";
  } else {
    return "Completed";
  }
}

function displayProjects() {
  projectsContainer.innerHTML = "";

  for (let i = 0; i < projectTitles.length; i++) {
    const status = getProjectStatus(projectDeadlines[i]);

    const projectCard = document.createElement("div");
    projectCard.className = "col-12 col-md-6 col-lg-4";

    projectCard.innerHTML = `
      <div class="card h-100 shadow-sm card-hover">
        <img src="${projectImages[i]}" class="card-img-top" alt="${projectTitles[i]} screenshot">
        <div class="card-body d-flex flex-column">
          <h5 class="fw-bold">${projectTitles[i]}</h5>
          <p class="mb-2">${projectDescriptions[i]}</p>
          <p class="mb-2"><strong>Deadline:</strong> ${projectDeadlines[i]}</p>
          <p class="mb-0"><strong>Status:</strong> <span class="${status === "Ongoing" ? "text-success" : "text-secondary"}">${status}</span></p>
        </div>
      </div>
    `;

    projectsContainer.appendChild(projectCard);
  }
}

// ------------------------------
// Step 4: Resume download counter
// ------------------------------
let resumeDownloadCount = 0;

const resumeBtn = document.getElementById("downloadBtn");
const resumeCountText = document.getElementById("resumeCount");

function updateResumeCount() {
  resumeCountText.textContent = "Resume downloads: " + resumeDownloadCount;
}

resumeBtn.addEventListener("click", function () {
  resumeDownloadCount++;
  updateResumeCount();
});

// ------------------------------
// Step 5: Dynamic Experience table
// ------------------------------
const experienceData = [
  ["Marine Corps Civilian Police Officer", "U.S. Marine Corps", "2018", "Present"],
  ["Administrative Specialist", "U.S. Marine Corps", "2014", "2018"]
];

const educationData = [
  ["Northern Arizona University", "B.S. Cybersecurity", "2024", "Present"]
];

const experienceTableContainer = document.getElementById("experienceTableContainer");
const educationTableContainer = document.getElementById("educationTableContainer");

function createExperienceTable() {
  let tableHTML = `
    <table class="table table-striped align-middle">
      <thead class="table-dark">
        <tr>
          <th>Job Title</th>
          <th>Company</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < experienceData.length; i++) {
    tableHTML += `
      <tr>
        <td>${experienceData[i][0]}</td>
        <td>${experienceData[i][1]}</td>
        <td>${experienceData[i][2]}</td>
        <td>${experienceData[i][3]}</td>
      </tr>
    `;
  }

  tableHTML += `
      </tbody>
    </table>
  `;

  experienceTableContainer.innerHTML = tableHTML;
}

function createEducationTable() {
  let tableHTML = `
    <table class="table table-bordered align-middle">
      <thead class="table-light">
        <tr>
          <th>School / University</th>
          <th>Degree</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < educationData.length; i++) {
    tableHTML += `
      <tr>
        <td>${educationData[i][0]}</td>
        <td>${educationData[i][1]}</td>
        <td>${educationData[i][2]}</td>
        <td>${educationData[i][3]}</td>
      </tr>
    `;
  }

  tableHTML += `
      </tbody>
    </table>
  `;

  educationTableContainer.innerHTML = tableHTML;
}

// ------------------------------
// Run everything
// ------------------------------
displaySkills();
displayProjects();
updateResumeCount();
createExperienceTable();
createEducationTable();