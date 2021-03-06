ko.bindingHandlers.transitionVisible = {
    init: function(element, valueAccessor, allBindings) {
        var value = valueAccessor();
        var visible = ko.unwrap(value);
        if (value) {
            $(element).show();
        }
        else {
            $(element).hide();
        }
    },
    update: function(element, valueAccessor, allBindings) {
        // Initialize without toggling on initial binding
        var initialized = ko.utils.domData.get(element, 'initialized');
        // By only examining the bound visible property on first call, it means knockout will
        // only call update for that bound property, and not on any of the bindable effect properties... 		 
        var value = valueAccessor();
        var visible = ko.unwrap(value);
        if (initialized) {
            var effect = allBindings.has('effect') ? ko.unwrap(allBindings.get('effect')) : 'fade';
            var duration = allBindings.has('duration') ? ko.unwrap(allBindings.get('duration')) : 500;
            var effectOptions = allBindings.has('effectOptions') ? ko.unwrap(allBindings.get('effectOptions')) : {easing: 'swing'};		
            var complete = allBindings.has('effectComplete') ? ko.unwrap(allBindings.get('effectComplete')) : null;
            if (typeof complete !== 'function') {
                complete = null;
            }
            var easing = effectOptions.easing ? effectOptions.easing : 'swing';
            if (!jQuery.ui) {
                switch (effect) {
                    case "fade":
                        $(element).fadeToggle(duration, easing, complete);
                        break;
                    case "slide":
                        $(element).slideToggle(duration, easing, complete);
                        break;
                    case "blind":
                    case "bounce":
                    case "clip":
                    case "drop":
                    case "explode":
                    case "fold":
                    case "highlight":
                    case "puff":
                    case "pulsate":
                    case "scale":
                    case "shake":
                    case "size":
                        if (window.console) {
                            console.log("No jQueryUI present, so no support for '" + effect + "'");
                        }
                    default:
                        if (window.console) {
                            console.log("Unkwown effect '" + effect + "'. Defaulting to fade effect.");
                        }
                        $(element).fadeToggle(duration, easing, complete);
                    break;                
                }
            }
            if (jQuery.ui) {
                switch (effect) {
                    case "fade":
                    case "slide":
                    case "blind":
                    case "bounce":
                    case "clip":
                    case "drop":
                    case "explode":
                    case "fold":
                    case "highlight":
                    case "puff":
                    case "pulsate":
                    case "scale":
                    case "shake":
                    case "size":
                        $(element).toggle(effect, effectOptions, duration, complete);
                        break;
                    default:
                        if (window.console) {
                            console.log("Unkwown effect '" + effect + "'. Defaulting to fade effect.");
                        }
                        $(element).fadeToggle(duration, easing, complete);
                        break;
                }
            }
        }
        ko.utils.domData.set(element, 'initialized', 'true');
    }
};

