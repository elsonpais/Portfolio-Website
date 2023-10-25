import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Qualification from './components/Qualification/Qualification';

function App() {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <Skills />
      <Work />
      <Qualification />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
