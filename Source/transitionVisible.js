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
      var value = valueAccessor();
      var visible = ko.unwrap(value);
      if (initialized) {
        var effect = allBindings.has('effect') ? ko.unwrap(allBindings.get('effect')) : 'fade';
        var duration = allBindings.has('duration') ? ko.unwrap(allBindings.get('duration')) : 500;
        var effectOptions = allBindings.has('effectOptions') ? ko.unwrap(allBindings.get('effectOptions')) : {easing: 'swing'};		
		var easing = effectOptions.easing ? effectOptions.easing : 'swing';
		switch (effect) {
          case "fade":
            $(element).fadeToggle(duration, easing);
            break;
          case "slide":
            $(element).slideToggle(duration, easing);
            break;
		  // These require jQuery UI
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
		  case "transfer":
            $(element).toggle(effect, effectOptions, duration);
            break;
          default:
            $(element).fadeToggle(duration, easing);
            break;
        }
      }
      ko.utils.domData.set(element, 'initialized', 'true');
    }
};
 
