var $ = require('jquery');
// var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js')

// send auth toeken to github if token is provided... which it is.

$.ajax('https://api.github.com/users/ryanbarroncode').done(function(data) {
    console.log(data);



    var source = $('#profile-template').html();
    var template = Handlebars.compile(source);
    $(".profile-info").append(template(data));
});

$.ajax('https://api.github.com/users/ryanbarroncode/repos').done(function(data) {
  console.log(data);
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);

    data.forEach(function(item) {
      console.log(item);

            $(".repo-info").append(template(item));
    });
});

// var profileInfo = {
//
//   // profilePic: data.atavar_url
// }




if (githubtoken !== undefined) {
    $.ajaxSetup({
        headers: {
            'Authorization': 'token' + githubtoken.token
        }
    });
}
