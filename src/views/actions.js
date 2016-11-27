import Store from './store'

var ACTIONS = {
	
	handlePast: function(){
		var tickBack = ()=>{
			Store._set({
				isTime: STORE._get('isTime') - 1
			})
		} 

		STORE._set({
			direction: 'backwards'
		})
	},
	
	handleStop: function(){
		Store._set({isTime: 2016, direction: 'stop' }) 
	}, 
	
	handleFuture: function(){
		Store._set({isTime: 2016, direction: 'forward' }) 
	}, 
}

export default ACTIONS