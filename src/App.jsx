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
         "   colors={[ "#F4ED15"]}"
            rotation={30}
            speed={0.3}
            scale={1.2}
            frequency={1.4}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.08}
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


export default App;
