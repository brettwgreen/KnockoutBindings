# KnockoutBindings
A collection of custom knockout binding handlers

*transitionVisible*
Show/hide elements with bindable transitions and settings
Uses jquery effects

examples:

static binding

```html
<div data-bind="transitionVisible: itemVisible, 
             transition: 'slide', 
             easing: 'linear', 
             duration: 1000">text to toggle</div>
```

Also supports observable binding for all properties

```html
<div data-bind="transitionVisible: itemVisible, 
             transition: obsTransition, 
             easing: obsEasing, 
             duration: obsDuration">text to toggle</div>
```

Plunkr:

https://plnkr.co/edit/QBnS2WsSelI5Mhrk2R5v?p=preview
