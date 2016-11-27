import React from 'react'
import Store from './store'
import ACTIONS from './actions'

var TimeMachineApp = React.createClass({

	componentWillMount: function(){
		console.log('mounting')
		Store.on('updating', ()=>{
			this.setState(Store._get())
		})

	}, 

	getInitialState: function(){
		 console.log('getting initial State')
		 return Store._getData()
	}, 
		
	_handlePast: function(eventObj){
			// ACTIONS.handlePast(eventObj)
			console.log('this is the past')
			//why don't we have to pass in the event objects?
			return ACTIONS.handlePast()
	}, 		
	_handleStop: function(eventObj){
			console.log('this is the stop')
			return ACTIONS.handleStop()
	}, 		
	_handleFuture: function(eventObj){
			console.log('this is the future')
			return ACTIONS.handleFuture()
	}, 
	render: function(){
		var goingPast = {
			'background': this.state.direction === 'backwards'? 'red' : 'grey'
		}
		
		var goingStop = {
			'background': this.state.direction === 'stop'? 'red' : 'grey'
		}
		
		var goingFuture = {
			'background': this.state.direction === 'forward'? 'red' : 'grey'
		}
		
		return(
			<div className = 'machineContainer'>
				<h1>Take a Ride Through Time</h1>
				<h3>Welcome To</h3>
				<div className = 'year'>{this.state.isTime}</div>
				<div className = 'buttonContainer'>
					<div onClick = {this._handlePast} style = {goingPast} className = 'past time'>Past</div>
					<div onClick = {this._handleStop} style = {goingStop} className = 'stop time'>STOP</div>
					<div onClick = {this._handleFuture} style = {goingFuture} className = 'future time'>Future</div>
				</div>
			</div>
		)
	}
})

export default TimeMachineApp