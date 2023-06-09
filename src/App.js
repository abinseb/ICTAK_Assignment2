import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <TodoApp/>
    </div>
  );
}

export default App;
