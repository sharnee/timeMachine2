import Backbone from 'backbone'
import _ from 'underscore'

window.Store = Store

var Store = _.extend(Backbone.Events, {
	data: {
		isTime: 2016, 
		direction: null
	}, 
	_getData: function(){
		// console.log('this is my data', this.data)
		return this.data
	}, 
	_get: function(key){
		console.log(this.data[key], 'this is the key')
		
		return this.data.direction[key]
	}, 

	_emitChange: function (){
		return this.trigger('updating')

	}, 
	_set: function(newData){
		_.extend(this.data, newData)
		this._emitChange()
	}

})

export default Store