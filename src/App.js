import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ProjectsContainer from './components/Proyectos/ProjectsContainer';


function App() {
  return (
    <div className="App">
          <Hero/>
          <ProjectsContainer/>
          <Footer/>
    </div>
  );
}

export default App;
