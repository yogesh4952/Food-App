import Navbar from "./Components/Navbar";
import "../src/style/index.scss";
import HeroSection from "./Components/HeroSection";
import ImporveSkillsSection from "./Components/ImporveSkillsSection";
function App() {
  return (
    <>
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImporveSkillsSection />
      </div>
    </>
  );
}

export default App;
