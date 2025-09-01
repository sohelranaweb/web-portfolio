import About from "./components/About";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Educational from "./components/Educational";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Blog></Blog>
        <Educational></Educational>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
