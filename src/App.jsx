import { BannerSection } from "./components/BannerSection";
import { Header } from "./components/Header";
import { AboutMeSection } from "./components/AboutMeSection";
import { TechSection } from "./components/TechSection";
import { ProjectSection } from "./components/ProjectSection";
import { Footer } from "./components/Footer";
import './Styles/index.css'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>  
  )
}

export default App
