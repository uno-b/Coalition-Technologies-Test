import { useRef } from 'react';

import Hero from './sections/Hero';
import History from './sections/History';
import Climb from './sections/Climb';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const historyRef = useRef(null);
  const teamRef = useRef(null);

  return (
    <div>
      <Header historyRef={historyRef} teamRef={teamRef} />
      <Hero />
      <div ref={historyRef}>
        <History />
      </div>
      <div ref={teamRef}>
        <Climb />
      </div>
      <Footer />
    </div>
  );
}

export default App;
