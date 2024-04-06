import './style/App.css';
import CrearLogroForm from './components/CrearLogroForm';
import LogrosList from './components/LogrosList';

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <CrearLogroForm />
      </div>
      <div className="list-container">
        <LogrosList />
      </div>
    </div>
  );
}

export default App;
