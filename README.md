# Employee Portfolio Website

A responsive employee portfolio website developed as part of a full-stack development assignment. The project demonstrates frontend development, Git and GitHub version control, project organization, and deployment using GitHub Pages.

---

## 📌 About the Project

The **Employee Portfolio Website** is designed for a startup to showcase its employees, their professional skills, projects, experience, and areas of expertise.

The website provides a clean and responsive interface through which users can explore employee profiles and learn more about the team.

The project also demonstrates the concepts of full-stack architecture, Git branching, UNIX/Linux command-line management, version control, and web deployment.

---

## ✨ Features

* Modern and responsive user interface
* Startup landing page
* About section
* Employee listing page
* Individual employee portfolio page
* Employee skills and experience
* Projects showcase
* Contact page
* Interactive contact form
* Responsive layout for desktop, tablet, and mobile
* Git and GitHub version control
* Multiple Git branches for team collaboration
* GitHub Pages deployment

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Version Control

* Git
* GitHub

### Deployment

* GitHub Pages

---

## 🏗️ Proposed Full-Stack Architecture

The proposed production architecture follows a three-layer structure:

```text
                USER
                  │
                  ▼
            Web Browser
                  │
                  ▼
        ┌───────────────────┐
        │      FRONTEND     │
        │ HTML + CSS + JS   │
        └───────────────────┘
                  │
                  │ HTTP / REST API
                  ▼
        ┌───────────────────┐
        │      BACKEND      │
        │ Node.js + Express │
        └───────────────────┘
                  │
                  ▼
        ┌───────────────────┐
        │     DATABASE      │
        │      MongoDB      │
        └───────────────────┘
```

The current demonstration version implements the frontend using HTML5, CSS3 and JavaScript and is deployed using GitHub Pages.

The Node.js/Express.js backend and MongoDB database represent the proposed architecture for extending the project into a complete production-level full-stack application.

---

## 📂 Project Structure

```text
employee-portfolio/
│
├── index.html
├── about.html
├── employees.html
├── employee.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── README.md
└── .gitignore
```

---


## Live Demo

The live version of the Employee Portfolio Website can be accessed using the link below:

Live Demo:
https://rajwant64.github.io/employee-portfolio/


---


## 📄 Website Pages

### 🏠 Home Page

The homepage introduces the startup and highlights selected members of the team.

![Home Page](https://raw.githubusercontent.com/YOUR-USERNAME/employee-portfolio/main/screenshots/home.png)


### ℹ️ About Page

The About page explains the purpose of the platform and highlights the organization's focus on talent, innovation, and collaboration.

![About Page](https://raw.githubusercontent.com/YOUR-USERNAME/employee-portfolio/main/screenshots/about.png)


### 👥 Employees Page

The Employees page displays employee cards containing their names, roles, skills, and short descriptions.

![Employees Page](https://raw.githubusercontent.com/YOUR-USERNAME/employee-portfolio/main/screenshots/employees.png)


### 👤 Employee Portfolio Page

The Employee Portfolio page provides detailed information about an individual employee, including their skills, projects, experience, and contact information.

![Employee Portfolio](https://raw.githubusercontent.com/YOUR-USERNAME/employee-portfolio/main/screenshots/employee.png)


### 📩 Contact Page

The Contact page provides contact information and an interactive contact form.

![Contact Page](https://raw.githubusercontent.com/YOUR-USERNAME/employee-portfolio/main/screenshots/contact.png)


---

## 🎨 Frontend Structure

The frontend uses semantic HTML5 elements to organize the website structure.

CSS3 is used for:

* Responsive layouts
* Typography
* Navigation
* Cards
* Buttons
* Gradients
* Hover effects
* Mobile responsiveness

JavaScript is used for:

* Navigation interaction
* Active page highlighting
* Button interaction
* Contact form handling

---

## 🌿 Git Branching Strategy

The project follows a feature-based Git branching strategy suitable for a team of four developers.

```text
main
│
└── develop
    │
    ├── feature/frontend
    ├── feature/backend
    ├── feature/database
    └── feature/testing
```

### Team Responsibilities

| Developer   | Branch             | Responsibility                         |
| ----------- | ------------------ | -------------------------------------- |
| Developer 1 | `feature/frontend` | HTML, CSS and user interface           |
| Developer 2 | `feature/backend`  | Node.js and Express.js architecture    |
| Developer 3 | `feature/database` | Database design and MongoDB            |
| Developer 4 | `feature/testing`  | Testing, integration and documentation |

The `main` branch represents the stable version of the project.

The `develop` branch is used to integrate development work before production release.

Feature branches allow developers to work independently and submit their changes for review.

---

## 💻 Important Git Commands

```bash
git init
git status
git add .
git commit -m "Create employee portfolio website"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
git checkout -b develop
git checkout -b feature/frontend
git checkout -b feature/backend
git checkout -b feature/database
git checkout -b feature/testing
git pull
git push
```

---

## 🖥️ UNIX/Linux CLI Commands

Important commands used to manage the project directory include:

```bash
mkdir employee-portfolio
cd employee-portfolio
pwd
ls
ls -la
tree
touch index.html
cp file.txt backup.txt
mv oldfile.txt newfile.txt
rm file.txt
rm -r folder
```

These commands can be used to create directories, navigate between folders, list files, create files, copy and rename files, and remove files or directories.

---

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/employee-portfolio.git
```

### 2. Enter the project directory

```bash
cd employee-portfolio
```

### 3. Open the website

Open the following file in a web browser:

```text
index.html
```

The website can be viewed locally without installing any additional dependencies.

---

## 🌐 Deployment

The implemented frontend version is deployed using **GitHub Pages**.

### GitHub Repository

```text
https://github.com/YOUR-USERNAME/employee-portfolio
```

### Live Demo

```text
https://YOUR-USERNAME.github.io/employee-portfolio/
```

> Replace `YOUR-USERNAME` with your actual GitHub username before submission.

---


## 📚 Assignment Objectives Covered

This project addresses the following assignment requirements:

1. Full-stack architecture for an employee portfolio website
2. Frontend technologies including HTML and CSS
3. Justification of website page structure
4. Git branching strategy for four developers
5. UNIX/Linux CLI commands for project management
6. Version control using Git and GitHub
7. Website deployment using GitHub Pages

---

## ✅ Conclusion

The Employee Portfolio Website demonstrates the practical use of frontend development, Git-based collaboration, project organization, and web deployment.

The project provides a responsive and user-friendly interface for presenting employee profiles and can be extended into a complete full-stack system by adding a Node.js/Express.js backend and MongoDB database.

---

## 👨‍💻 Author

**Name:** Rajwant Raj

---


**Live Demo:**
https://YOUR-USERNAME.github.io/employee-portfolio/
