# KnockoutBindings
A collection of custom knockout binding handlers

*transitionVisible*
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

Also supports observable binding for all properties

```html
<div data-bind="transitionVisible: itemVisible, 
             effect: obsTransition, 
             effectOtions: {easing: obsEasing}, 
             duration: obsDuration">text to toggle</div>
```

Examples:
https://brettwgreen.github.io/KnockoutBindings/examples/transitionVisible/transitionVisible.html
