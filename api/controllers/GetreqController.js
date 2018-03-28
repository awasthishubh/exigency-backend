/**
 * GetreqController
 *
 * @description :: Server-side logic for managing Slot_infos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

  		
		Db.find({}).exec(function(err, records){
			res.json(records);

			});
		}

	}


