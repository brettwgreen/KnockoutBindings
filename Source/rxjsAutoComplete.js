
ko.bindingHandlers.rxjsAutoComplete = {
    init: function(element, valueAccessor, allBindings) {
        var source = allBindings.has('source') ? ko.unwrap(allBindings.get('source')) : [];
        var typeDelayMs = allBindings.has('typeDelayMs') ? ko.unwrap(allBindings.get('typeDelayMs')) : 750;
        var typeMinLength = allBindings.has('typeMinLength') ? ko.unwrap(allBindings.get('typeMinLength')) : 2;

        var obs = valueAccessor();

        var rxObservable = Rx.Observable.fromEvent(element, 'keyup')
            .map(function (e) {
                return e.target.value; // project the text from the input
            })
            .filter(function (text) {
                return text.length >= typeMinLength;
            })
            .debounceTime(typeDelayMs)
            .distinctUntilChanged();
        var clearResults = function(el) {
            var results = $(el).next('div');
            if (results.hasClass('.rxJsAutoCompleteResults')) {
                results.remove();
            }
        };
        var select = function(val) {
            obs(val);
            $(element).val(val);
            clearResults(element);
        };
        rxObservable.subscribe(
            function (data) {
                var results = source(data);
                var list = $("<div class='list-group .rxJsAutoCompleteResults'><a href='#' class='list-group-item'>" + results.join("</a><a href='#' class='list-group-item' >") + "</a></div>");
                list.children('a').click(function(e) {
                    var val = e.currentTarget.text;
                    select(val);
                });
                clearResults(element);
                $(element).after($(list));
            });
        }
};

