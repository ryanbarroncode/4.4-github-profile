var $ = window.$ = window.jQuery = require('jquery');
// var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');
// var bootstrap = require('bootstrap-sass');
var moment = require('moment')

// send auth token to github if token is provided... which it is.
if (githubtoken !== undefined) {
    $.ajaxSetup({
        headers: {
            'Authorization': 'token ' + githubtoken.token
        }            

    });
}


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
        var formatDate = moment(item.updated_at, "YYYYMMDD").fromNow();
        item.formatDate = formatDate;
        $(".repo-info").append(template(item));
    });
});

$.ajax('https://api.github.com/users/ryanbarroncode/orgs').done(function(data) {
  console.log(data);
  var source = $('#org-template').html();
  var template = Handlebars.compile(source);
});

// var profileInfo = {
//
//   // profilePic: data.atavar_url
// }
