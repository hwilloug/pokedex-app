import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [dex, setDex] = useState([{
    description: 'loading...'
  }]);

  useEffect(() => {
    axios.get('/pokedex').then(resp => {
      setDex(resp.data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <table id="dex">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Type 1</th>
              <th>Type 2</th>
            </tr>
          </thead>
          <tbody>
          {dex.map((pokemon => 
            <tr key={pokemon.id}>
              <td>{pokemon.pokedex_number}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.description}</td>
              <td class={pokemon.type_1}>{pokemon.type_1}</td>
              <td class={pokemon.type_2}>{pokemon.type_2}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
