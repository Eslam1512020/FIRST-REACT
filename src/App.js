import React from 'react';

function App() {
  return (
    <div className="App">
      <header>Parts
        <partList> 
          <parts>
            jklfgbjkgbkfbnmkl
          </parts>
          <parts>
            dfklsgfgkfnbef
          </parts>
        </partList>
      </header>
    </div>
  );
}

export default App;

function partList(props){
  return <ul> {props.children}></ul>
}
function part(props){
  return <li> {props.children} </li>
}

