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
        
        self.search = function(str) {
            var results = [];
            $.each(self.characters(), function(i, ch) {
               if (ch.includes(str) ) {
                   results.push(ch);
               }
            });
            return results;
        };

};
    
    var vm = new ViewModel;
    ko.applyBindings(vm);
});
