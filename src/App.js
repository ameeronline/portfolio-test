import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Showcase from './Components/Showcase/Showcase';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Events />
      <Skills />
      <Services />
      <Projects />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
