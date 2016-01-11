var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img');
	this.level = ko.observable('noob');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

		if(this.clickCount() >= 2) {
			if(this.clickCount() >= 4) {
				this.level("regular");
			} else {
				this.level("rookie");
			}
		}

	};


}

ko.applyBindings(new ViewModel());