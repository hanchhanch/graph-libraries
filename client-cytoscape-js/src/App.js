import React, {Component } from 'react';
import logo from './logo.svg';
import NodeDetails from './Components/NodeDetails.js'
import './App.css';

var cytoscape = require('cytoscape');
var cy = null;
var n_nodes = 10;

function nodeClicked(node) {
	cy.center(node);
	console.log(node.id() + " clicked.");
	document.getElementById("selectedNode").innerHTML = "id: " + node.data('id');
	//cy.center();
}

function resetGraph() {
	cy.fit();
}


class App extends Component {
	addNode() {
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
			data: {
				id: document.getElementById('inputText').value + Math.random().toString(),
				label: 'label',
				weight: 75,
			},
			position: {
				x: Math.floor(Math.random() * 200)
				, y: Math.floor(Math.random() * 200)
			}
		}).on('click', function (e) {
			nodeClicked(e.target);
		});
		console.log('Node ' + node.id() + ' added.');
	}

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
				<NodeDetails domId="selectedNode" />
				<input id="inputText" size="20" type="text" defaultValue="Add Node" />
				<input type="button" onClick={this.addNode} value="Add Node" />
				<input type="button" onClick={resetGraph} value="Reset Graph" />

			</header>
			SelectedNode
			
			<div id="cy" ></div>
		</div>);
	}
}

export default App;
