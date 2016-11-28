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
        
    };
    
    var vm = new ViewModel;
    ko.applyBindings(vm);
});
