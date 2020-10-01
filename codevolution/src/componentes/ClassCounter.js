import React, { Component } from 'react'

class ClassCounter extends Component {
	constructor() {
		super()

		this.state = {
			count: 0
		}
	}

	incrimentCount = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	
	render () {
		return (
			<div>
				<button onClick={this.incrimentCount}> Count {this.state.count} </button>
			</div>
		);
	}
}

export default ClassCounter