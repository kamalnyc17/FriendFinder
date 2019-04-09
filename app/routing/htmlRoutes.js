//declaring dependancies
var path    = require('path');

// routing starts here
module.exports = function(app){
    // survey routing
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
    
    // everything else is routed to home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}
