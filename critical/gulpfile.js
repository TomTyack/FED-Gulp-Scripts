var gulp = require("gulp");
var critical = require('critical');
var runSequence = require("run-sequence");
var domain = "https://github.com";

gulp.task('default', function(callback) {
	return runSequence(
    "home",
    "aceik",
    "habitat",
	callback);
});

gulp.task('home', function() {
	return criticalMeUp('./critical-homepage.css', domain)
});

gulp.task('aceik', function() {
	return criticalMeUp('./critical-aceik.css', domain + '/Aceik/')
});

gulp.task('habitat', function() {
	return criticalMeUp('./critical-habitat.css', domain + '/Aceik/Habitat')
});


var criticalMeUp = function (dest, url) {
  return critical.generate({
        src: url,
        dest: dest,
        minify: false,
		inline: false,
		extract: true,
		timeout: 30000,
		width: 1300,
		height: 1100
    });
};



