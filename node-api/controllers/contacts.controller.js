const async = require('async');
require('dotenv').config();

exports.getData = (req, res) => { // SIGNUP
	console.log('==============')
	var request = require("request");
	var options = {
		method: 'GET',
		url: process.env.URL,
		qs: {
			organization_id: process.env.ORGANIZATION_ID
		},
		headers: {
			authorization: process.env.AUTHORIZATION
		}
	};
	request(options, function (error, response, body) {
		if (error) {
			return res.json({
				status: 500,
				message: "get Api error",
				data: error
			});
		} else{
			return res.json({
				status: 200,
				message: "get data successfully.",
				data: body
			});
		}
	});

};
