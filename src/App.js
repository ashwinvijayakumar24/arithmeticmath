import './App.css';
import Information from './components/Information';
import Setup from './components/Setup';
import Problems from './components/Problems';
import Footer from './components/Footer';
function App() {
  return (
    <div className='app-container'>
      <h1>Practice Arithmetic Math</h1>
      <Information/>
      <Setup/>
      <Problems/>
      <Footer/>
    </div>
  );
}

export default App;
