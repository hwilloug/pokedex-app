import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [dex, setDex] = useState([{
    description: 'loading...'
  }]);

  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('/pokedex').then(resp => {
      setDex(resp.data)
    })
  }, [])

  function handleSearchChange(evt) {
    setSearch(evt.target.value)
    axios.get(`/pokedex?name=${evt.target.value}`).then(resp => {
      setDex(resp.data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div id="search-container">
        <input
          id="search-box"
          placeholder='Search'
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div id="dex-container">
        <table id="dex">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Classification</th>
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
              <td><p className={pokemon.type_1}>{pokemon.type_1}</p></td>
              <td><p className={pokemon.type_2}>{pokemon.type_2}</p></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
