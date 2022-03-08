import {useEffect, useState} from 'react';
import database from './firebase';
  
function App() {
  const [name , setName] = useState();
  const [age , setAge] = useState();
  const [players, setPlayers] = useState([{name: "rock", age: 20}, {name: "paper", age: 30}]);

  useEffect (() => {
    database.ref('/').on('value', (snapshot) => {
      var players = [];
    snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.key;
    var data = childSnapshot.val();
    // ...
    players.push({ key: key, name: data.name, age: data.age});
  });
  players.sort(function(a, b) { 
    return a.age - b.age; 
  });
  setPlayers(players);
    });
  }, []);
      
  // Push Function
  const Push = () => {
    database.ref('/').push({
      name: name,
      age: age
    });
    // database.ref("/").set({
    //   name : name,
    //   age : age,
    // }).catch(alert);
  }


  
  return (
    <div className="App" style={{marginTop : 250}}>
      <center>
      <input placeholder="Enter your name" value={name} 
      onChange={(e) => setName(e.target.value)}/>
      <br/><br/>
      <input placeholder="Enter your age" value={age} 
      onChange={(e) => setAge(e.target.value)}/>
      <br/><br/> 
      <button onClick={Push}>PUSH</button>
      </center>

      <center>
  

      {
        players.map(player => {
          return (
            <div>
              <h1>{player.name}</h1>
              <h1>{player.age}</h1>
            </div>
          );
        })
       
      }
    
      </center>
    </div>
  );
}
  
export default App;