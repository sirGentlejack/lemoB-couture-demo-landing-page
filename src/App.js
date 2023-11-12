import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Gallery from './Components/Gallery';
import Data1 from './Data1';

function App() {
const card1 = Data1.map((item, index) => {
  return(
    <Gallery 
    key={item.id}
    item={item}
    showHeading={index === 0}
    />
  )
})

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section>{card1}</section>
    </div>
  );
}

export default App;
