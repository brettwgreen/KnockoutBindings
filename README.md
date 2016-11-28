# KnockoutBindings
A collection of custom knockout binding handlers

**transitionVisible**

Show/hide elements with bindable transitions and settings
Uses jquery effects

examples:

static binding

```html
<div data-bind="transitionVisible: itemVisible, 
             effect: 'slide', 
             effectOptions: {easing: 'linear'}, 
             duration: 1000">text to toggle</div>
```

```html
<div data-bind="transitionVisible: itemVisible, 
             effect: 'explode', 
             effectOptions: {easing: 'swing', pieces: 4}, 
             duration: 1000">text to toggle</div>
```

Also supports observable binding for all properties

```html
<div data-bind="transitionVisible: itemVisible, 
             effect: obsTransition, 
             effectOptions: {easing: obsEasing}, 
             duration: obsDuration">text to toggle</div>
```

For jQuery, only the 'fade' and 'slide' effects are available and supports only the easing and duration properties.

In the presence of jQuery UI, all of the following effects are supported with any options passed into the effectOptions property:
- fade
- slide
- blind
- bounce
- clip
- drop
- explode
- fold
- highlight
- puff
- pulsate
- scale
- shake
- size

Examples:
https://brettwgreen.github.io/KnockoutBindings/examples/transitionVisible/transitionVisible.html

Plunkr:
https://plnkr.co/edit/QBnS2WsSelI5Mhrk2R5v?p=preview

