# KnockoutBindings
A collection of custom knockout binding handlers

*transitionVisible*
Show/hide elements with bindable transitions and settings
Uses jquery effects

examples:

static binding

`<div data-bind="transitionVisible: itemVisible, transition: 'slide', easing: 'linear', duration: 1000">text to toggle</div>`

Also supports observable binding for all properties

`<div data-bind="transitionVisible: itemVisible, transition: obsTransition, easing: obsEasing, duration: obsDuration">text to toggle</div>`
