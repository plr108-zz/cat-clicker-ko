var Cat = function() {

	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img');
	this.nicknames = ko.observableArray([
		"Baby Dupree",
		"Eater of Worlds",
		"Lil' Hellspawn"]);

	this.level = ko.computed(function() {
		var level;
		var clicks = this.clickCount();

		if (clicks < 5) {
			level = 'Noob';
		} else if (clicks < 10) {
			level = "Rookie";
		} else if(clicks < 15) {
			level = "Normal";
		} else if(clicks < 20) {
			level = "Veteran";
		} else {
			level = "O.G.";
		}

		return level;
	}, this);
};

var ViewModel = function() {

	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());