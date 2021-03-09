import React, { Component } from "react";

import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Ali", age: 21 },
      { id: "2", name: "Max", age: 28 },
      { id: "3", name: "Manu", age: 29 },
    ],
    otherState: "some other value",
    userName: "Ali Adel",
    showPersons: false,
    textBox: "",
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  userNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  textChangedHandler = (event) => {
    const textBox = event.target.value;

    this.setState({ textBox: textBox });
  };

  characterClicked = (index) => {
    const textBox = [...this.state.textBox];
    textBox.splice(index, 1);

    this.setState({
      textLen: textBox.length,
      textBox: textBox.join().replaceAll(",", ""),
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    // let characters = [...this.state.textBox].map((c, index) => {
    //   return (
    //     <CharComponent
    //       character={c}
    //       key={index}
    //       click={() => this.characterClicked(index)}
    //     />
    //   );
    // });

    return (
      <WithClass classes={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        />
        {persons}

        {/* <div>
          <input type="text" value={this.state.textBox} onChange={this.textChangedHandler} />
          <p>{this.state.textBox.length}</p>
          <ValidationComponent textLen={this.state.textBox.length} />

          {characters}
        </div> */}
      </WithClass>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'HIIIIIII'))
}

export default App;
