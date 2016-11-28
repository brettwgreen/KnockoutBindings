$(document).ready(function() {
	var List = function(data) {
	  var self = this;
	  self.transition = data.transition ? data.transition : 'fade';
	  self.duration = data.duration ? data.duration : 400;
	  self.options = data.options ? data.options : {easing: 'swing'};
	  self.children = [{name: "Child 1"}, {name: "Child 2"}, {name: "Child 3"}, {name: "Child 4"}];
	  self.showChildren = ko.observable(true);
	  self.toggleChildren = function() {
		self.showChildren(!self.showChildren());
	  };
	};

	var ViewModel = function() {
	  var self = this;
	  self.parents = [
		  new List({transition: 'fade', options: { easing: 'linear'}, duration: 200}),
		  new List({transition: 'slide', options: {easing: 'swing'}, duration: 1000}),
		  new List({transition: 'bounce', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'blind', options: {easing: 'swing', direction: 'up'}, duration: 500}),
		  new List({transition: 'blind', options: {easing: 'swing', direction: 'down'}, duration: 500}),
		  new List({transition: 'blind', options: {easing: 'swing', direction: 'left'}, duration: 500}),
		  new List({transition: 'blind', options: {easing: 'swing', direction: 'right'}, duration: 500}),
		  new List({transition: 'clip', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'drop', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'explode', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'explode', options: {easing: 'swing', pieces: 4}, duration: 500}),
		  new List({transition: 'fold', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'highlight', options: {easing: 'swing', color: 'steelblue'}, duration: 500}),
		  new List({transition: 'puff', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'pulsate', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'scale', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'shake', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'shake', options: {easing: 'swing', distance: 60, times: 10}, duration: 2000}),
		  new List({transition: 'size', options: {easing: 'swing'}, duration: 500}),
		  new List({transition: 'transfer', options: {easing: 'swing'}, duration: 500})
		];
	};

	var vm = new ViewModel;
	ko.applyBindings(vm);
});
