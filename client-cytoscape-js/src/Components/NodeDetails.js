import React, { Component } from 'react';

class NodeDetails extends Component {
	constructor(props) {
		super(props);
    }
	render() {
		return (<div id={this.props.domId}>
			label: {this.props.label}
		</div>);
	}
}

export default NodeDetails;
