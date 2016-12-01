ko.bindingHandlers.jqAutoComplete = {
    init: function(element, valueAccessor, allBindings) {
        var va = valueAccessor();
        var source = allBindings.has('source') ? ko.unwrap(allBindings.get('source')) : [];
        $(element).autocomplete({
            source: source,
            select: function(event, ui) {
                // Set the value of the selected observable (can be an object)
                va(ui.item.value);
                // Merge label and value to show a string in the selection box
                ui.item.value = ui.item.label;
            }
            });
        
    },
    update: function(element, valueAccessor, allBindings) {
    }
};

