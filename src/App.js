import { Component } from "react";
import { CardList } from './components/card-list/card-list.component'
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }))
      .catch(err => console.log(err));
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Filter Monsters</h1>
        <SearchBox placeholder='search placeholder' handleChange={(e) => this.setState({ searchField: e.target.value })}></SearchBox>
        <div className="App">
          <CardList monsters={filteredMonsters}></CardList>
        </div>
      </div>
    );
  }
}

export default App;
