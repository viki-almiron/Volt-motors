import React, {useState} from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <React.Fragment>
      <Nav />
      <div className="main-container">
        <Header
          cardIndex={cardIndex}
          setCardIndex={setCardIndex}
        />
        <CardContainer cardIndex={cardIndex}/>
      </div>
      <Partners />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
