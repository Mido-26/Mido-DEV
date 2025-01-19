import { useNavigate } from 'react-router-dom'

export default function Navigate(sectionId){
    const navigate = useNavigate()
    navigate('/'); // Navigate to the root
  setTimeout(() => {
    const section = document.getElementById(sectionId); // Scroll to the section dynamically
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); // Adjust timeout to ensure navigation completes
};
