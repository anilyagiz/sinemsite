import ColorBends from './components/ColorBends';
import CurvedLoop from './components/CurvedLoop';
import FallingText from './components/FallingText';
import './App.css';

function App() {
  return (
    <div className="app">
      <main className="content">
        <section className="hero">
          <ColorBends
            className="hero-bends"
            colors={["#FFD700", "#FFE34D", "#FFEA00", "#FFC700", "#FFB700"]}
            rotation={30}
            speed={0.4}
            scale={0.5}
            frequency={2.0}
            warpStrength={2.5}
            mouseInfluence={1.0}
            parallax={0.7}
            noise={0.02}
            transparent
          />
          <CurvedLoop
            marqueeText="Sinem ✦ Seninle konuşmaya bayılıyorum ✦"
            speed={2.5}
            curveAmount={420}
            interactive
            className="hero-loop"
          />

<div className="message-block"> 
  <p className="subtitle">Seninle konuşmak gerçekten iyi geliyor.</p> 
  <FallingText 
    className="falling-message" 
    text={`Sinem, bazen sadece ‘naber?’ desen bile aklımın içi bir anda karışıyor… kendimi yine sana düşerken buluyorum.`} 
    highlightWords={["Sinem", "karışıyor", "düşerken"]} 
    highlightClass="highlighted" 
    trigger="hover" 
    backgroundColor="transparent" 
    wireframes={false} 
    gravity={0.56} 
    fontSize="1.75rem" 
    mouseConstraintStiffness={0.9} 
  /> 
  <p className="hint">(Üzerine gelince kelimeler düşecek, aynen ben gibi.)</p>
</div>
        </section>
      </main>
    </div>
  );
}

export default App;
