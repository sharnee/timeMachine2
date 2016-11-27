import Store from './store'

var ACTIONS = {
	
	handlePast: function(){

		var tickBackward = () => { //function to decrement the year by 1 
				Store._set({
					year: Store._get('isTime') - 1
			})
		}
		var intervalId = setInterval(tickBackward)

		Store._set({ direction: 'backwards' })
	},
	
	handleStop: function(){
		Store._set({ direction: 'stop' }) 
	}, 
	
	handleFuture: function(){
		Store._set({direction: 'forward' }) 
	}, 
}

export default ACTIONS