import React, { Component } from 'react';
import Person from './Person/Person';
import Classes from './App.css';


class App extends Component {

  state = {
    persons:[
      {id:'1',name: "ilya", age:29},
      {id:'2',name: "orly", age:28}, 
      {id:'3',name: "ruslan", age:27}
    ],
    showPersons : false,
    
  }
deletePersonHandler = (personIndex) =>{
const persons = [...this.state.persons];
persons.splice(personIndex,1);
this.setState({
  persons: persons
});
}

SwitchHandlerInput = (e,id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = e.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons:persons});
}

togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
}

  render() {

  

    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.SwitchHandlerInput(event,person.id)} />
          })}
        </div> 
      );
      btnClass = Classes.red;
     }

    let classes = [];
    if (this.state.persons.length <=2) {
      classes.push(Classes.red);
    }
    if (this.state.persons.length <=1) {
      classes.push(Classes.bold);
    }
    // This is my way of doing it
    // let classes = ['red','bold'];
    // if (this.state.persons.length  > 1 && this.state.persons.length  < 3) {
    //   classes = classes.split(' ').splice(0,1);
    // } else if(this.state.persons.length > 2){
    //   classes = classes.split(' ').splice(0,2);
    // }
    
    return (

      <div className={Classes.App}>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={this.togglePersonHandler}>Toggle persons</button>
      {persons}
      </div>

    );
  }
}

export default App;
