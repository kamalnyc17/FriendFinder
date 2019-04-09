// loading existing data from friends.js
var friendData = require('../data/friends.js');

// routing starts here
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res){
        friendData.push( req.body );
        res.json(true);
    })
}