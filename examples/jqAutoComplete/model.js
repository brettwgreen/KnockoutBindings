$(document).ready(function() {
    var ViewModel = function() {
        var self = this;
        self.selectedCharacter = ko.observable("");
        self.characters = [
            "Bugs Bunny",
            "Elmer Fudd",
            "Marvin Martian",
            "Roadrunner",
            "Wile E. Coyote"
         ];
         
    };
    
    var vm = new ViewModel;
    ko.applyBindings(vm);
});
