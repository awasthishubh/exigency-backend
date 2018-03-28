/**
 * Db.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name:{
  		type: "string"
  	},
  	phno:{
  		type:"string"
  	},
  	email:{
  		type: "string"
  	},
  	items:{
  		type:"json"
  	},
  	sid:{
  		type: "integer"
  	},
  	spos:{
  		type: "json"
  	},	
  	dtitle:{
  		type: "string"
  	},	
  	dpos:{
  		type: "json"
  	}
  }
};

