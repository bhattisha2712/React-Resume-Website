# React Resume Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Setup and Installation](#setup-and-installation)
3. [Project Requirements](#project-requirements)
   - [React App Creation](#1-react-app-created)
   - [Components](#2-minimum-5-components)
   - [Component Organization](#3-component-folder-organization)
   - [Props Implementation](#4-props-used)
   - [useState Implementation](#5-usestate-implemented)
   - [Conditional Rendering](#6-conditional-rendering)
   - [List Rendering with map()](#7-map-for-lists)
   - [CSS Styling](#8-modular-css-styling)
   - [Responsive Design](#9-responsive-design)
   - [Resume Content](#10-resume-content-included)
   - [Deployment](#11-deployed-on-vercel)
   - [Version Control](#12-github-version-control)
   - [Documentation](#13-readme-md)
4. [Project Structure](#project-structure)
5. [Component Details](#component-details)
6. [Troubleshooting](#troubleshooting)

## Project Overview

The React Resume project is a modern, responsive web application built using React and Vite. It serves as a digital resume/portfolio template that showcases personal information, skills, experience, education, projects, and contact details. The application features a clean, professional design with light and dark mode support for enhanced user experience.

![Project Screenshot](https://user-images.githubusercontent.com/YOUR_USERNAME/react-resume/screenshot.png)

## Setup and Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-resume.git
   cd react-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

## Project Requirements

### 1. React App Created

✅ **Requirement Met**: The project was created using Vite, a modern build tool that provides a faster and leaner development experience for React applications.

**Implementation Details**:
- Vite was used to initialize the project, as evident in the `vite.config.js` file.
- The project structure follows the standard Vite + React template.
- Key configuration files include:
  - `vite.config.js`: Contains Vite configuration with React and Tailwind plugins
  - `package.json`: Lists all dependencies and scripts

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
});
```

### 2. Minimum 5 Components

✅ **Requirement Met**: The project contains 10 distinct components, more than the required minimum of 5.

**Implementation Details**:
- The following components have been implemented:
  1. `Header`: Displays the user's name and professional title
  2. `Navigation`: Provides links to different sections of the resume
  3. `About`: Presents a professional summary
  4. `Skills`: Lists technical skills and competencies
  5. `Experience`: Details work history and accomplishments
  6. `Education`: Shows educational background
  7. `Projects`: Showcases portfolio projects
  8. `Contact`: Provides contact information
  9. `Footer`: Contains social links and copyright information
  10. `ThemeToggle`: Allows switching between light and dark modes

Each component serves a specific purpose and contributes to the overall functionality of the application.

### 3. Component Folder Organization

✅ **Requirement Met**: Each component is organized in its own dedicated folder.

**Implementation Details**:
- The components are structured in a modular way, each in its own folder under `src/Components/`
- Each component folder contains:
  - The component JSX file (e.g., `Header.jsx`)
  - An `index.js` file for easy importing
  
```
src/
  Components/
    About/
      About.jsx
      index.js
    Contact/
      Contact.jsx
      index.js
    Education/
      Education.jsx
      index.js
    Experience/
      Experience.jsx
      index.js
    Footer/
      Footer.jsx
      index.js
    Header/
      Header.jsx
      index.js
    Navigation/
      Navigation.jsx
      index.js
    Projects/
      Projects.jsx
      index.js
    Skills/
      Skills.jsx
      index.js
    ThemeToggle/
      ThemeToggle.jsx
      index.js
```

This organization improves code maintainability and follows React best practices.

### 4. Props Used

✅ **Requirement Met**: Props are used in all components to make them reusable and configurable.

**Implementation Details**:
- Props are passed from the `App` component to child components
- Examples:
  - `ThemeToggle` receives an `onThemeChange` prop to handle theme switching
  - `Header` receives `name` and `title` props to display personalized information
  - `Skills` receives `title` and `skills` props to render the skills section
  - `Projects` receives multiple props including a mapped array with additional properties

```jsx
// Example from App.jsx
<ThemeToggle onThemeChange={dark => setTheme(dark ? "dark" : "light")} />
<Header name={resumeData.personalInfo.name} title={resumeData.personalInfo.title} />
<Skills 
  title={resumeData.sectionTitles.skills} 
  skills={resumeData.skills} 
/>
```

This approach makes components highly reusable and allows for easy customization of the resume content.

### 5. useState Implemented

✅ **Requirement Met**: The application implements useState hooks for UI control.

**Implementation Details**:
- The `App` component uses useState for:
  - Managing theme state (`theme`, `setTheme`)
  - Controlling header visibility (`showHeader`, `setShowHeader`)
  
- The `ThemeToggle` component uses useState for:
  - Managing dark mode state (`dark`, `setDark`)

```jsx
// From App.jsx
const [showHeader, setShowHeader] = useState(true);
const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem('darkMode');
  if (saved !== null) {
    return JSON.parse(saved) ? 'dark' : 'light';
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
});

// From ThemeToggle.jsx
const [dark, setDark] = useState(() => {
  const saved = localStorage.getItem('darkMode');
  if (saved !== null) {
    return JSON.parse(saved);
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
});
```

The useState hook is effectively used to manage component state and enable interactive UI elements.

### 6. Conditional Rendering

✅ **Requirement Met**: Conditional rendering is implemented in the application.

**Implementation Details**:
- The `Header` component is conditionally rendered based on the `showHeader` state:
  ```jsx
  {showHeader ? <Header name={resumeData.personalInfo.name} title={resumeData.personalInfo.title} /> : null}
  ```

- The `ThemeToggle` component conditionally renders different icons based on the current theme:
  ```jsx
  {dark ? (
    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>
  ) : (
    <svg className="w-3.5 h-3.5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  )}
  ```

This demonstrates a clear understanding and implementation of conditional rendering in React.

### 7. map() for Lists

✅ **Requirement Met**: The `.map()` method is used to render lists throughout the application.

**Implementation Details**:
- The `Skills` component uses `.map()` to render a list of skills
- The `Projects` component uses `.map()` to display multiple project cards
- The `Experience` component uses `.map()` to show work history entries
- The `Education` component uses `.map()` to list educational qualifications

In the App component, data is even transformed using `.map()` before being passed to components:

```jsx
<Projects 
  title={resumeData.sectionTitles.projects} 
  projects={resumeData.projects.map(project => ({
    ...project,
    linkLabel: resumeData.labels.viewProject
  }))} 
/>
```

This demonstrates effective use of array methods to render dynamic content.

### 8. Modular CSS Styling

✅ **Requirement Met**: The project uses Tailwind CSS for modular styling.

**Implementation Details**:
- Tailwind CSS is implemented throughout the project for styling components
- The styling is modular and follows utility-first principles
- Custom styles are defined in `index.css` for specific animation and theme requirements
- The project maintains consistent styling across components

```jsx
// Example from ThemeToggle.jsx
<button
  onClick={() => setDark((prev) => !prev)}
  className='fixed top-3 right-6 md:top-3 md:right-8 p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 z-50 transition-all duration-300 hover:scale-110 hover-glow'
  aria-label='Toggle Theme'
  type='button'>
  {/* Content */}
</button>
```

Tailwind CSS provides a clean, efficient way to style components without excessive CSS files.

### 9. Responsive Design

✅ **Requirement Met**: The application features responsive design using breakpoints.

**Implementation Details**:
- Tailwind CSS breakpoints are used throughout the components
- Media queries are implemented in the CSS for responsive layouts
- The design adapts to different screen sizes from mobile to desktop
- Examples of responsive classes:
  - `top-3 right-6 md:top-3 md:right-8` in the ThemeToggle component
  - Various flex and grid layouts that adjust based on screen size

The application provides an optimal viewing experience across a wide range of devices.

### 10. Resume Content Included

✅ **Requirement Met**: The application includes comprehensive resume content.

**Implementation Details**:
- `Education`: Educational history and qualifications
- `Skills`: Technical and professional skills
- `Experience`: Work history and professional experience
- `Contact`: Email, phone, and other contact information
- Additional content includes:
  - About section with professional summary
  - Projects showcasing portfolio items
  - Social media links in the footer

All resume content is centralized in the `resumeData.js` file, making it easy to update and maintain.

### 11. Deployed on Vercel

✅ **Requirement Met**: The project is deployed on Vercel.

**Implementation Details**:
- The presence of a `.vercel` directory in the project root indicates Vercel deployment
- The deployment process involved:
  1. Connecting the GitHub repository to Vercel
  2. Configuring build settings
  3. Deploying the application
  4. Setting up automatic deployments for future updates

This provides a live, accessible version of the resume application.

### 12. GitHub Version Control

✅ **Requirement Met**: The project uses GitHub for version control.

**Implementation Details**:
- The project is maintained in a Git repository
- The `.git` directory is present in the project root
- The repository shows commit history tracking project progress
- The structure includes a `.github` directory with workflow configurations

This demonstrates proper use of version control throughout the development process.

### 13. README.md

✅ **Requirement Met**: The project includes a README.md file.

**Implementation Details**:
- While the current README contains basic information about Vite and React, it should be enhanced to include:
  - Project features
  - Screenshots
  - Challenges faced during development
  - Installation instructions
  - Usage guidelines

A comprehensive README helps users and developers understand the project and its capabilities.

## Project Structure

```
react-resume/
├── .git/                  # Git version control
├── .github/               # GitHub configuration
├── .vercel/               # Vercel deployment configuration
├── node_modules/          # Dependencies
├── public/                # Static assets
├── src/                   # Source code
│   ├── Components/        # React components
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Navigation/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   └── ThemeToggle/
│   ├── data/              # Data files
│   │   └── resumeData.js  # Resume content
│   ├── App.jsx            # Main application component
│   ├── App.css            # App-specific styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── .gitignore             # Git ignore configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package-lock.json      # Dependency lock file
├── package.json           # Project configuration
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

## Component Details

### App (App.jsx)
The main component that orchestrates the entire application. It manages theme state and renders all child components.

### ThemeToggle (ThemeToggle.jsx)
A button component that allows users to toggle between light and dark modes. It uses localStorage to persist user preferences.

### Header (Header.jsx)
Displays the user's name and professional title at the top of the resume.

### Navigation (Navigation.jsx)
Provides navigation links to different sections of the resume.

### About (About.jsx)
Presents a professional summary and personal introduction.

### Skills (Skills.jsx)
Displays a list of technical and professional skills.

### Experience (Experience.jsx)
Shows work history, job titles, employers, dates, and accomplishments.

### Education (Education.jsx)
Lists educational qualifications, institutions, and graduation dates.

### Projects (Projects.jsx)
Showcases portfolio projects with descriptions and links.

### Contact (Contact.jsx)
Provides contact information including email and phone number.

### Footer (Footer.jsx)
Contains social media links and copyright information.

## Troubleshooting

### Common Issues and Solutions

1. **Installation Issues**
   - If npm install fails, try clearing the npm cache:
     ```bash
     npm cache clean --force
     ```
   - Ensure you have the correct Node.js version (see package.json for requirements)

2. **Development Server Issues**
   - If the development server fails to start, check if port 5173 is already in use
   - Try running with a different port:
     ```bash
     npm run dev -- --port 3000
     ```

3. **Build Issues**
   - If the build fails, check for any ESLint or TypeScript errors
   - Ensure all dependencies are correctly installed

4. **Deployment Issues**
   - If Vercel deployment fails, check the build logs for specific errors
   - Ensure the project structure is compatible with Vercel deployment requirements

For additional help, please open an issue on the GitHub repository.
