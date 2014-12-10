angular-pickadate.js
====================

Angularjs extension for the slick date/time picker, [pickadate.js by Amsul](http://amsul.ca/pickadate.js/)

Add the module as a dependency to your application module:

```js
var myAppModule = angular.module('MyApp', ['ngDatePicker'])
```

The use is very simple once you add the dependency:

    <input type="text" pick-a-date="curDate" />
    <input type="text" pick-a-time="curDate" />

I went over my head for you guys and added constraints for min/max. Here is how you can use them. Merry xmas!

    From: <input type="text" pick-a-date="startDate" max-date="endDate" />
    To: <input type="text" pick-a-date="endDate" min-date="startDate" />

### Options

[pickadate.js by Amsul](http://amsul.ca/pickadate.js/) has a lot of options. You can control the options by
through these directives as well.
For the pick-a-date directive use `pick-a-date-options`.
For the pick-a-time directive use `pick-a-time-options`.
Pass in a structure like this { ... } with all the options you can think of. They will be passed to the directive.
Example:

    <input type="text" pick-a-date="curDate" pick-a-date-options="{ format: 'dd/mm/yy', selectYears: true }" />

### Notes

 - Please note that I am using the latest and greatest version of AngularJS (v1.2.12). If you try to use a crappy old version like 1.0.2, there will be errors.
 - For more information on the date filter in AngularJS please visit [http://docs.angularjs.org/api/ng/filter/date].
 - Watch out for UTC times. Apparently the default way AngularJS serializes your time is with the T…Z pattern, meaning it is the time in Greenwich. 

Here is the original blog post about this piece of code: [Coding Insight](http://www.codinginsight.com/angularjs-and-pickadate/)
