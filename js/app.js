var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img');
	this.level = ko.observable('noob');
	this.nicknames = ko.observableArray([
		"Baby Dupree",
		"Eater of Worlds",
		"Lil' Hellspawn"]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);



		if(this.clickCount() < 5) {
				this.level("rookie");
		} else if(this.clickCount() < 10) {
				this.level("regular");
		} else if(this.clickCount() < 15) {
				this.level("veteran");
		} else {
				this.level("o.g.");
		}
	};
}

ko.applyBindings(new ViewModel());