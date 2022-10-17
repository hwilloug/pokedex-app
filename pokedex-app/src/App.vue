<template>
  <div id='app'>

<header>
  <h1>{{ title }}</h1>
</header>

<table id='dex'>
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Type 1</th>
    <th>Type 2</th>
  </tr>
  <tr
    v-for='entry in dex'
    :key='entry.id'
  >
    <td>{{ entry.id }}</td>
    <td>{{ entry.name }}</td>
    <td :class='entry.type1'>{{ entry.type1 }}</td>
    <td :class='entry.type2'>{{ entry.type2 }}</td>
  </tr>
</table>

</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
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
  }
}
</script>

<style>
body {
  font-family: 'Helvetica';
  text-align: center;
  background-color: AliceBlue;
}

#dex {
  border: 1px solid lightgrey;
  border-collapse: collapse;
  margin: auto;
}

#dex th, td {
  border-bottom: 1px solid lightgrey;
  padding: 15px;
}

#dex th {
  background-color: IndianRed;
  color: white;
}

#dex tr {
  background-color: White;
}
#dex tr:hover {
  background-color: lightgrey;
}

.Grass {
  color: green;
}

.Fire {
  color: Crimson;
}

.Poison {
  color: Purple;
}

.Water {
  color: DodgerBlue;
}

.Flying {
  color: Thistle;
}

</style>
