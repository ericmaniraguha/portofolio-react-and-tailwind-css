import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portofolio from './components/Portofolio';
import SocialLinks from './components/SocialLinks';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portofolio />

      <Experience />
      <Contacts />
      <SocialLinks />
    </>
  );
}

export default App;
