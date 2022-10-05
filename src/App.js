import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchStr: " ",
      // findMonsters: this.monsters,
    };


  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
          return { monsters: users }
        }
      ))
  } 

  onSearchChange = (e) => {
    const searchStr = e.target.value.toLowerCase()
    this.setState({ searchStr })
    // const filteredMonster = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(searchValue));
    // this.setState({ findMonsters: filteredMonster })
  }

  render() {
    const { monsters, searchStr } = this.state;
    const { onSearchChange } = this

    const filteredMonster = monsters.filter((monster) => monster.name.toLowerCase().includes(searchStr));
    return (
      <div className="App">
        <SearchBox
          className='monster-search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search Monsters'
        />

        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
