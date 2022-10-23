import logo from './logo.svg';
import Header from './components/header';
import Main from './components/mainComponent';
import Footer from './components/footer';
import './styles/style.css';
import './styles/responsive.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
