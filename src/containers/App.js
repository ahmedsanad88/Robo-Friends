import React, { Component } from "react";

import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  // Fetching data from json placeholder website.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  /*
  Note that we transferring the below function to an arrow function instead of using a normal function expression because the arrow function inherit the value of "this keyword" from the surrounding part so will refer to the same object but using different function the value of "this" will refer to the input it called inside it's event function which is not the behavior we need.
  */
  handleSearchFilter = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    // As a way for improving the use of this we can destructure the state
    const { robots, searchField } = this.state;
    const filteredRobots =
      searchField !== ""
        ? robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
          })
        : robots;
    return !robots.length ? (
      <h1 className="add__header tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="add__header">RoboFriends</h1>
        <SearchBox searchTerm={this.handleSearchFilter} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
