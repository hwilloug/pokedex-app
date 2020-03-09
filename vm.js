// Components
Vue.component('dex-entry', {
  props: ['mon'],
  template: `
  <tr id='dex-entry'>
    <td>{{ mon.id }}</td>
    <td>{{ mon.name }}</td>
    <td :class='mon.type1'>{{ mon.type1 }}</td>
    <td :class='mon.type2'>{{ mon.type2 }}</td>
  </tr>
  `
})

// Vue Instance
var vm = new Vue({
  //Options object
  el: '#app',
  data: {
    title: 'Vue Pokedex',
    dex: [
      {
        id: 1,
        name: 'Bulbasaur',
        type1: 'Grass',
        type2: 'Poison'
      },
      {
        id:2,
        name: 'Ivysaur',
        type1: 'Grass',
        type2: 'Poison'
      },
      {
        id:3,
        name: 'Venosaur',
        type1: 'Grass',
        type2: 'Poison'
      },
      {
        id:4,
        name: 'Charmander',
        type1: 'Fire',
        type2: null
      },
      {
        id:5,
        name: 'Charmeleon',
        type1: 'Fire',
        type2: null
      },
      {
        id: 6,
        name: 'Charizard',
        type1: 'Fire',
        type2: 'Flying'
      },
      {
        id: 7,
        name: 'Squirtle',
        type1: 'Water',
        type2: null
      },
      {
        id: 8,
        name: 'Wartortle',
        type1: 'Water',
        type2: null
      },
      {
        id: 9,
        name: 'Blastoise',
        type1: 'Water',
        type2: null
      }
    ]
  }
})
