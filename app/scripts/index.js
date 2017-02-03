var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js')

// send auth toeken to github if token is provided... which it is.

$.ajax('https://api.github.com/users/<username>').done(function(){

});






if(githubtoken !== undefined){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token' + githubtoken.token
    }
  });
}
