var initialCats = [
	{
		clickCount : 0,
		name : 'Baby Dupree',
		imgSrc : 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution : 'https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img',
		nicknames : ["Murrysville Mauler", "Eater of Worlds", "Lil' Hellspawn"]
	},

	{
		clickCount : 0,
		name : 'Baby Duke',
		imgSrc : 'img/9648464288_2516b35537_z.jpg',
		imgAttribution : 'https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img',
		nicknames : ["Lap Cat", "Silent But Deadly", "Claws"]
	}
];

var Cat = function(data) {

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observable(data.nicknames);

	this.level = ko.computed(function() {
		var level;
		var clicks = this.clickCount();

		if (clicks < 5) {
			level = "Meh";
		} else if (clicks < 10) {
			level = "Okay";
		} else if(clicks < 15) {
			level = "Cool";
		} else if(clicks < 20) {
			level = "Rad";
		} else if(clicks < 30) {
			level = "Awesome";
		} else if(clicks < 50) {
			level = "Freaking Awesome";
		} else if(clicks < 70) {
			level = "Really Freaking Awesome";
		} else if(clicks < 100) {
			level = "You're Still Clicking??";
		}
		else {
			level = "You must really "
			for(i = 0; i < clicks - 100; i++)
			{
				level += " really "
			}
			level += " love this picture";
		}

		return level;
	}, this);
};

var ViewModel = function() {

	// self is the ViewModel binding
	var self = this;

	// self.catList
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}
};

ko.applyBindings(new ViewModel());