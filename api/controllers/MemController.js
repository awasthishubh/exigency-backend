/**
 * AreaController
 *
 * @description :: Server-side logic for managing areas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req,res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		name=req.param('name');
		phno=req.param('phno');
		email=req.param('email');
		items=req.param('items');
		sid=req.param('sid');
		spos=req.param('spos');
		dtitle=req.param('dtitle');
		dpos=req.param('dpos');
		partner=req.param('partner');

		Mem.create({name:name, phno:phno, email:email, items:items, sid:sid, spos:spos, dtitle:dtitle, dpos:dpos, partner:partner}).exec(function(err, record){
			if(err) return res.json(500,{message:'No Idea'});
			return res.json(200,{data:record, status:1});
			});
  	},


  	index: function(req,res){
  		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		Mem.find({}).exec(function(err, records){
			res.json(records);
			})
		},
	fnd: function(req,res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		id=req.param('id');

  		Mem.find({sid:id}).exec(function(err, records){
			res.json(records);
			})
		}
	fnd2: function(req,res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		id=req.param('id');

  		Mem.find({id:id}).exec(function(err, records){
			res.json(records);
			})
		}
	

}
