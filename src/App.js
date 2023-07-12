import './App.css';
import Header from './components/Header';
import Context from './Context';

function App() {

  const buttonText = "Click me I used Context"
  const buttonTextTwo = "I am a button"

  const list = [
    {
      name: 'yogurt',
      price: '7956',
      quantity: 1
    },
    {
      name: 'yogurt',
      price: '7956',
      quantity: 1
    },
    {
      name: 'yogurt',
      price: '7956',
      quantity: 1
    }
  ]


  return (
    <div className="App">
      <h1>React Hooks - useContext</h1>

      <Context.Provider value={{buttonText, buttonTextTwo}} >
        <Header />
      </Context.Provider>

    </div>
  );
}

export default App;
