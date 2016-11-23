var List = function(options) {
  var self = this;
  self.name = options.name;
  self.transition = options.transition ? options.transition : 'fade';
  self.easing = options.easing ? options.easing : 'swing';
  self.duration = options.duration ? options.duration : 400;
  self.children = [{name: "Child 1"}, {name: "Child 2"}, {name: "Child 3"}, {name: "Child 4"}];
  self.showChildren = ko.observable(true);
  self.toggleChildren = function() {
    self.showChildren(!self.showChildren());
  };
};

var ViewModel = function() {
  var self = this;
  self.parents = [
      new List({name: 'Parent 1', transition: 'fade', easing: 'linear', duration: 200}),
      new List({name: 'Parent 2', transition: 'slide', easing: 'swing', duration: 1000}),
      new List({name: 'Parent 3'}) // defaults
    ];
};

var vm = new ViewModel;
ko.applyBindings(vm);
