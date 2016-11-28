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
        var transition = allBindings.has('transition') ? ko.unwrap(allBindings.get('transition')) : 'fade';
        var duration = allBindings.has('duration') ? ko.unwrap(allBindings.get('duration')) : 500;
        var transitionOptions = allBindings.has('transitionOptions') ? ko.unwrap(allBindings.get('transitionOptions')) : {easing: 'swing'};		
		var easing = transitionOptions.easing ? transitionOptions.easing : 'swing';
		switch (transition) {
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
            $(element).toggle(transition, transitionOptions, duration);
            break;
          default:
            $(element).fadeToggle(duration, easing);
            break;
        }
      }
      ko.utils.domData.set(element, 'initialized', 'true');
    }
};
 
