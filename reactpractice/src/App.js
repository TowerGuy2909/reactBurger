import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'asfa1', name: 'Jerridd', age: 39},
      {id:'vasdf1', name: 'Jill', age: 38},
      {id:'asdf11', name: 'Donovan', age: 11},
    ],
    otherState: "some other value",
    showPersons: false
  }

  
nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  // const person = Object.assign({}, this.state.persons[personIndex]);

  person.name = event.target.value;

  const persons =[...this.state.persons];
  persons[personIndex] = person;


  this.setState( {persons: persons} )
    
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
       </div> 
      );
      style.backgroundColor = 'red';
     
    }

    const assignedClasses = [];
      if (this.state.persons.length <= 2) {
        assignedClasses.push(classes.red);
      }
      if (this.state.persons.length <=1) {
        assignedClasses.push(classes.bold);
      }


    return (
     
        <div className={classes.App}>
        <h1> Hi, im a new react app </h1>
        <p className={assignedClasses.join(' ')} > this is realy working</p>
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
        </div>
     
    );
  }
}

export default App;
