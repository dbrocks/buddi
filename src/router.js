//import the controller folder (automatically calls the index.js file)
var controllers = require('./controllers'); 
var mid = require('./middleware');

var router = function(app) {

    app.get("/home", mid.requiresSecure, controllers.Account.homePage); 
	app.get("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage); 
    app.post("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.login); 
    app.get("/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signupPage);
    app.post("/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
    app.get("/logout", mid.requiresLogin, controllers.Account.logout);
    app.get("/maker", mid.requiresLogin, controllers.Domo.makerPage);
    app.post("/maker", mid.requiresLogin, controllers.Domo.make);
    app.get("/", mid.requiresSecure, controllers.Account.homePage);
};

module.exports = router; 