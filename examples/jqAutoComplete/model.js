$(document).ready(function() {
    var ViewModel = function() {
        var self = this;
        self.selectedCharacter = ko.observable("");
        self.newCharacter = ko.observable("");
        
        self.characters = ko.observableArray([
            "Bugs Bunny",
            "Elmer Fudd",
            "Marvin Martian",
            "Roadrunner",
            "Wile E. Coyote"
         ]);
        self.addCharacter = function(name) {
            self.characters.push(self.newCharacter());
        };
        
        self.first = ko.observable("");
        self.last = ko.observable("");
        self.selectedCharacterComplex = ko.observable("");
        self.charactersComplex = ko.observableArray([
            {first: "Bugs", last: "Bunny"},
            {first: "Elmer", last: "Fudd"},
            {first: "Marvin", last: "Martian"},
            {first: "Spongebob", last: "Squarepants"}
         ]);
        self.charactersComplexStrings = ko.computed(function(){
            var data = [];
            $.each(self.charactersComplex(), function(i, ch) {
               data.push({label: ch.first + ' ' + ch.last, value: ch});
            });
            return data;
        });

         self.addCharacterComplex = function(first, last) {
            self.charactersComplex.push(self.first(), self.last());
        };

};
    
    var vm = new ViewModel;
    ko.applyBindings(vm);
});
