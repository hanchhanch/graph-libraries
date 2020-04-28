import React from 'react';
import logo from './logo.svg';
import './App.css';

var cytoscape = require('cytoscape');
var cy = null;

function addNode() {
	if(!cy)
	{
		alert('creating cy');
		cy = cytoscape({
			container: document.getElementById('cy'), // container to render in
			layout: {
				name: 'grid',
				rows: 1
			}
		});
	}
	var node = cy.add({
		group: 'nodes',
		data: { weight: 75, id: document.getElementById('inputText').value + Math.random().toString() },
		position: { x: Math.floor(Math.random() * 200) 
			, y: Math.floor(Math.random() * 200)}
	});
	cy.reset();
}

function App() {
  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cytoscape
        </p>
        <a
          className="App-link"
          href="https://js.cytoscape.org/"
          target="_blank"
          rel="noopener noreferrer">
          CytoscapeJS
        </a>
		<input id="inputText" size="20" type="text" defaultValue="Add Node" />
		<input type="button" onClick={addNode}  value="Add Node" />
      </header>
	  <div id="cy" style={{width: "300px"},{height: "300px"},{display: "block"}}/>
	  
    </div>
  );
}

export default App;
