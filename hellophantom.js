var page = require('webpage').create(),
	system = require('system'),
	url = system.args[1];

page.open(url, function(status) {
	var title = page.evaluate(function() {
		return document.title;
	});

	console.log('Hello, world! The page title on ' + url + ' is ' + title);
	phantom.exit();
});