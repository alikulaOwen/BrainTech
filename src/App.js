import About from "./components/About";
import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";
import Services from "./components/components/Service"


function App() {
    return ( <div className = "App" >
        <Home />
        <About />
        <Services/>
        <Project />
        <Blog />
        <Contact />
        <Footer />
        </div>
    );
}

export default App;