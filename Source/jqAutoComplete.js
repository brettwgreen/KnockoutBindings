
ko.bindingHandlers.jqAutoComplete = {
    init: function(element, valueAccessor, allBindings) {
        var va = valueAccessor();
        var source = allBindings.has('source') ? allBindings.get('source') : [];
        var getConfig = function(source, va){
            var config =
            {
            source: source,
            select: 
                function(event, ui) {
                    // Set the value of the selected observable (can be an object)
                    va(ui.item.value);
                    // Merge label and value to show a string in the selection box
                    ui.item.value = ui.item.label;
                }
            };
            return config;
        };
        var c = getConfig(ko.unwrap(source), va);
        $(element).autocomplete(c);
        if (ko.isObservable(source)) {
            source.subscribe(function(newSourceData) {
                var c = getConfig(newSourceData, va);
                $(element).autocomplete(c);
            });
        }
    }
};

