ko.bindingHandlers.jqAutoComplete = {
    init: function(element, valueAccessor, allBindings) {
        var va = valueAccessor();
        var source = allBindings.has('source') ? ko.unwrap(allBindings.get('source')) : [];
        $(element).autocomplete({
            source: source,
            select: function(event, ui) {
                va(ui.item.value);
            }
            });
        
    },
    update: function(element, valueAccessor, allBindings) {
    }
};

