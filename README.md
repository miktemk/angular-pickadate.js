angular-pickadate.js
====================

Angularjs extension for the slick date/time picker, [pickadate.js by Amsul](http://amsul.ca/pickadate.js/)

The use is very simple once you include this directive:

    <input type="text" pick-a-date="curDate" />
    <input type="text" pick-a-time="curDate" />

I went over my head for you guys and added constraints for min/max. Here is how you can use them. Merry xmas!

    From: <input type="text" pick-a-date="startDate" max-date="endDate" />
    To: <input type="text" pick-a-date="endDate" min-date="startDate" />
