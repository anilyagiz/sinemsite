import CurvedLoop from './components/CurvedLoop';
import FallingText from './components/FallingText';
import GradientBlinds from './components/GradientBlinds';
import './App.css';

function App() {
  return (
    <div className="app">
      <main className="content">
        <section className="hero">
          <div className="hero-bends">
            <GradientBlinds
              gradientColors={['#FFD700', '#FFEA00', '#FFC700', '#FFE34D']}
              angle={0}
              noise={0.15}
              blindCount={20}
              blindMinWidth={50}
              spotlightRadius={0.6}
              spotlightSoftness={1.2}
              spotlightOpacity={0.8}
              mouseDampening={0.12}
              distortAmount={0}
              shineDirection="left"
              mixBlendMode="screen"
            />
          </div>
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
