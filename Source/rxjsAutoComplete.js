
ko.bindingHandlers.rxjsAutoComplete = {
    init: function(element, valueAccessor, allBindings) {
        var source = allBindings.has('source') ? ko.unwrap(allBindings.get('source')) : [];
        var obs = valueAccessor();

        var rxObservable = Rx.Observable.fromEvent(element, 'keyup')
            .map(function (e) {
                return e.target.value; // project the text from the input
            })
            .filter(function (text) {
                return text.length > 2; // only if the text is longer than 2 characters
            })
            .debounceTime(750 /* pause for 750ms */ )
            .distinctUntilChanged();
        var select = function(val) {
            obs(val);
            $(element).val(val);
            $(element).next("div#results").remove();
        };
        rxObservable.subscribe(
            function (data) {
                var results = source(data);
                var list = $("<div class='list-group' id='results'><a href='#' class='list-group-item'>" + results.join("</a><a href='#' class='list-group-item' >") + "</a></div>");
                list.children('a').click(function(e) {
                    var val = e.currentTarget.text;
                    select(val);
                });
                $(element).next("div#results").remove();
                $(element).after($(list));
            });
        }
};
