$(document).ready(function() {
	var List = function(data) {
	  var self = this;
	  self.effect = data.effect ? data.effect : 'fade';
	  self.duration = data.duration ? data.duration : 400;
	  self.effectOptions = data.effectOptions ? data.effectOptions : {easing: 'swing'};
	  self.children = [{name: "Child 1"}, {name: "Child 2"}, {name: "Child 3"}, {name: "Child 4"}];
	  self.showChildren = ko.observable(true);
	  self.toggleChildren = function() {
		self.showChildren(!self.showChildren());
	  };
	};

	var ViewModel = function() {
	  var self = this;
	  self.parents = [
		  new List({effect: 'fade', effectOptions: { easing: 'linear'}, duration: 200}),
		  new List({effect: 'slide', effectOptions: {easing: 'swing'}, duration: 1000}),
		  new List({effect: 'bounce', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'blind', effectOptions: {easing: 'swing', direction: 'up'}, duration: 500}),
		  new List({effect: 'blind', effectOptions: {easing: 'swing', direction: 'down'}, duration: 500}),
		  new List({effect: 'blind', effectOptions: {easing: 'swing', direction: 'left'}, duration: 500}),
		  new List({effect: 'blind', effectOptions: {easing: 'swing', direction: 'right'}, duration: 500}),
		  new List({effect: 'clip', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'drop', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'explode', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'explode', effectOptions: {easing: 'swing', pieces: 4}, duration: 500}),
		  new List({effect: 'fold', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'highlight', effectOptions: {easing: 'swing', color: 'steelblue'}, duration: 500}),
		  new List({effect: 'puff', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'pulsate', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'scale', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'shake', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'shake', effectOptions: {easing: 'swing', distance: 60, times: 10}, duration: 2000}),
		  new List({effect: 'size', effectOptions: {easing: 'swing'}, duration: 500}),
		  new List({effect: 'foo', effectOptions: {easing: 'swing'}, duration: 500})
		];
	};

	var vm = new ViewModel;
	ko.applyBindings(vm);
});
