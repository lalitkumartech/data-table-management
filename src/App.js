import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Table from './components/Table';

function App() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className="App">
              <h1>Hello World.</h1>
              <HomePage />
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
