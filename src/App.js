import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {

  state = {
    persons:[
      {name: "ilya", age:29},
      {name: "orly", age:28},
      {name: "ruslan", age:27}
    ]
    
  }
  
  SwitchNameHandler = (newName)=>{
    this.setState({
      persons:[
        {name: newName, age:29},
        {name: "orly", age:28},
        {name: "ruslan", age:30}
      ]
    })
  }

SwitchHandlerInput = (e) => {
  this.setState({
    persons:[
      {name: "ilya", age:29},
      {name: e.target.value, age:28},
      {name: "ruslan", age:27}
    ],
    showPersons : false,
  })
}

togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
}

  render() {

  const  style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
     { 
       !this.state.showPersons ?
        <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              title="testing header"/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.SwitchNameHandler.bind(this, "Da king")}// Better to use bind 
              changed={this.SwitchHandlerInput}
              >Wow this is true</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>
        </div> : null
      }
      <button 
      style={style}
      onClick={this.togglePersonHandler}//not a good practice to use method
      >change props</button>
      </div>
    );
  }
}

export default App;
