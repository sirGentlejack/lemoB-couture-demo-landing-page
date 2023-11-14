import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import GallerySection from "./Components/GallerySection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section >
        <GallerySection />
      </section>
    </div>
  );
}

export default App;
