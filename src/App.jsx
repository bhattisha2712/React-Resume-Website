import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Education from "./Components/Education/Education.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ThemeToggle from "./Components/ThemeToggle/ThemeToggle.jsx";
import { resumeData } from "./data/resumeData";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  
  // Initialize theme state from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved) ? 'dark' : 'light';
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

	return (
		<div className='bg-gray-100 dark:bg-gray-900 transition-colors duration-500'>
			<ThemeToggle onThemeChange={dark => setTheme(dark ? "dark" : "light")} />
			{showHeader ? <Header name={resumeData.personalInfo.name} title={resumeData.personalInfo.title} /> : null}
			<Navigation navigationData={resumeData.navigation} />
			<About 
				title={resumeData.sectionTitles.about} 
				description={resumeData.about} 
			/>
			<Skills 
				title={resumeData.sectionTitles.skills} 
				skills={resumeData.skills} 
			/>
			<Experience 
				title={resumeData.sectionTitles.experience} 
				experience={resumeData.experience} 
			/>
			<Education 
				title={resumeData.sectionTitles.education} 
				education={resumeData.education} 
			/>			<Projects 
				title={resumeData.sectionTitles.projects} 
				projects={resumeData.projects.map(project => ({
					...project,
					linkLabel: resumeData.labels.viewProject
				}))} 
			/>			<Contact 
				title={resumeData.sectionTitles.contact} 
				email={resumeData.personalInfo.email} 
				phone={resumeData.personalInfo.phone} 
			/>
			<Footer 
				social={resumeData.social} 
				copyright={resumeData.footer.copyright} 
				defaultIcon={resumeData.icons.defaultSocial}
			/>
		</div>
	);
}

export default App;
