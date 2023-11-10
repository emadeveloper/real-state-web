import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header />
      <Hero />
      </div>
      <Companies />
    </div>
  );
}

export default App;
