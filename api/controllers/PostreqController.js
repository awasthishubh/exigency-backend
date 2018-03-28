/**
 * PostreqController
 *
 * @description :: Server-side logic for managing postreqs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req,res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		
		name=req.param('name');
		phno=req.param('phno');
		email=req.param('email');
		items=req.param('items');
		stitle=req.param('stitle');
		spos=req.param('spos');
		dtitle=req.param('dtitle');
		dpos=req.param('dpos');
		mate=req.param('mate');

		Db.create({name:name, phno:phno, email:email, items:items, stitle:stitle, spos:spos, dtitle:dtitle, dpos:dpos, mate:mate}).exec(function(err, record){
			if(err) return res.json(500,{message:'No Idea'});
			return res.json(200,{data:record, status:1});
			});

	}	
};

