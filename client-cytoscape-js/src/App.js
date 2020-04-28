import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

var cytoscape = require('cytoscape');
var cy = null;
var n_nodes = 10;

//class NodeEntry extends Component {
//	render() {
//		return
//		<input type="button" onClick={} />
//	}
//}

function nodeClicked(node) {
	cy.center(node);
	//cy.center();
}

function resetGraph() {
	cy.fit();
}

function addNode() {
	if (!cy) {
		console.log('Initializing cy');
		cy = cytoscape({
			container: document.getElementById('cy'), // container to render in
			elements: [
				{
					data: { id: 'a' }
				},
			]
		});
		cy.style({ 'background-color': 'yellow' });
		cy.boxSelectionEnabled(true);
		cy.layout({
			name: 'random'
		}).run();
	}
	console.log('Adding a node');
	var node = cy.add({
		group: 'nodes',
		data: { weight: 75, id: document.getElementById('inputText').value + Math.random().toString() },
		position: {
			x: Math.floor(Math.random() * 200)
			, y: Math.floor(Math.random() * 200)
		}
	}).on('click', function (e) {
		nodeClicked(e.target);
	});
	console.log('Node ' + node.id() + ' added.');
}

class App extends Component {
	render() {
		return (<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Cytoscape
					</p>
					<a className="App-link"
						href="https://js.cytoscape.org/"
						target="_blank"
						rel="noopener noreferrer">
						CytoscapeJS
					</a>
					<div>#nodes{n_nodes}</div>
					<input id="inputText" size="20" type="text" defaultValue="Add Node" />
				<input type="button" onClick={addNode} value="Add Node" />
				<input type="button" onClick={resetGraph} value="Reset Graph" />
				
				</header>
			<div id="cy" ></div>
			</div>);
	}
}

export default App;
