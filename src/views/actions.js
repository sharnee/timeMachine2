import Store from './store'

var ACTIONS = {
	
	handlePast: function(){
		
		clearInterval(Store._get('intervalId'))
		console.log(Store._get('intervalId'))
		var tickBackward = () => { //function to decrement the year by 1 
				Store._set({
					isTime: Store._get('isTime') - 1
			})
		}
		
		var backwardsId = setInterval(tickBackward, 1000)
		Store._set({ direction: 'backwards', intervalId: backwardsId })
	},
	
	handleStop: function(){
		clearInterval(Store._get('intervalId'))
		Store._set({ direction: 'stop'}) 
	}, 
	
	handleFuture: function(){
		clearInterval(Store._get('intervalId'))
		var tickForward = () => { 
				Store._set({
					isTime: Store._get('isTime') + 1
			})
		}
		var forwardId = setInterval(tickForward, 1000)
		Store._set({direction: 'forward', intervalId: forwardId }) 
	}, 
}

export default ACTIONS



