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
        var easing = allBindings.has('easing') ? ko.unwrap(allBindings.get('easing')) : 'swing';
        var duration = allBindings.has('duration') ? ko.unwrap(allBindings.get('duration')) : 500;
        switch (transition) {
          case "fade":
            $(element).fadeToggle(duration, easing);
            break;
          case "slide":
            $(element).slideToggle(duration, easing);
            break;
          default:
            $(element).fadeToggle(duration, easing);
            break;
        }
      }
      ko.utils.domData.set(element, 'initialized', 'true');
    }
};
 
