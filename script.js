// pick-a-date (attribute)
angular.module('ng').directive('pickADate', function () {
    return {
        restrict: "A",
        scope: {
            pickADate: '=',
            minDate: '=',
            maxDate: '=',
			pickADateOptions: '='
        },
        link: function (scope, element, attrs) {
			var options = $.extend(scope.pickADateOptions || {}, {
				onSet: function (e) {
                    if (scope.$$phase || scope.$root.$$phase) // we are coming from $watch or link setup
                        return;
                    var select = element.pickadate('picker').get('select'); // selected date
                    scope.$apply(function () {
                        if (e.hasOwnProperty('clear')) {
                            scope.pickADate = null;
                            return;
                        }
                        if (!scope.pickADate)
                            scope.pickADate = new Date(0);
                        scope.pickADate.setYear(select.obj.getFullYear());
                        // Interesting: getYear returns only since 1900. Use getFullYear instead.
						// It took me half a day to figure that our. Ironically setYear()
						// (not setFullYear, duh) accepts the actual year A.D.
                        // So as I got the $#%^ 114 and set it, guess what, I was transported to ancient Rome 114 A.D.
                        // That's it I'm done being a programmer, I'd rather go serve Emperor Trajan as a sex slave.
                        scope.pickADate.setMonth(select.obj.getMonth());
                        scope.pickADate.setDate(select.obj.getDate());
                    });
                },
                onClose: function () {
                    element.blur();
                }
			});
            element.pickadate(options);
            function updateValue(newValue) {
                if (newValue) {
                    scope.pickADate = (newValue instanceof Date) ? newValue : new Date(newValue);
                    // needs to be in milliseconds
                    element.pickadate('picker').set('select', scope.pickADate.getTime());
                } else {
                    element.pickadate('picker').clear();
                    scope.pickADate = null;
                }
            }
            updateValue(scope.pickADate);
            element.pickadate('picker').set('min', scope.minDate ? scope.minDate : false);
            element.pickadate('picker').set('max', scope.maxDate ? scope.maxDate : false);
            scope.$watch('pickADate', function (newValue, oldValue) {
                if (newValue == oldValue)
                    return;
                updateValue(newValue);
            }, true);
            scope.$watch('minDate', function (newValue, oldValue) {
                element.pickadate('picker').set('min', newValue ? newValue : false);
            }, true);
            scope.$watch('maxDate', function (newValue, oldValue) {
                element.pickadate('picker').set('max', newValue ? newValue : false);
            }, true);
        }
    };
});

// pick-a-time (attribute)
angular.module('ng').directive('pickATime', function () {
    return {
        restrict: "A",
        scope: {
            pickATime: '=',
			pickATimeOptions: '='
        },
        link: function (scope, element, attrs) {
			var options = $.extend(scope.pickATimeOptions || {}, {
				onSet: function (e) {
                    if (scope.$$phase || scope.$root.$$phase) // we are coming from $watch or link setup
                        return;
                    var select = element.pickatime('picker').get('select'); // selected date
                    scope.$apply(function () {
                        if (e.hasOwnProperty('clear')) {
                            scope.pickATime = null;
                            return;
                        }
                        if (!scope.pickATime)
                            scope.pickATime = new Date(0);
                        // (attrs.setUtc)
                            // ? scope.pickATime.setUTCHours(select.hour)
                            // : scope.pickATime.setHours(select.hour);
                        scope.pickATime.setHours(select.hour);
                        scope.pickATime.setMinutes(select.mins);
                        scope.pickATime.setSeconds(0);
                        scope.pickATime.setMilliseconds(0);
                    });
                },
                onClose: function () {
                    element.blur();
                }
			});
            element.pickatime(options);
            function updateValue(newValue) {
                if (newValue) {
                    scope.pickATime = (newValue instanceof Date) ? newValue : new Date(newValue);
                    // needs to be in minutes
                    var totalMins = scope.pickATime.getHours() * 60 + scope.pickATime.getMinutes();
                    element.pickatime('picker').set('select', totalMins);
                } else {
                    element.pickatime('picker').clear();
                    scope.pickATime = null;
                }
            }
            updateValue(scope.pickATime);
            scope.$watch('pickATime', function (newValue, oldValue) {
                if (newValue == oldValue)
                    return;
                updateValue(newValue);
            }, true);
        }
    };
});

//--------- other misc shit ---------------

function testController($scope) {
    $scope.curDate = '';
    $scope.newDate = function() {
        return new Date();
    };
}

function testController2($scope) {
    $scope.startDate = '2014-02-24 12:00:00';
    $scope.endDate = '2014-02-27 12:00:00';
}

function testController3($scope) {
    $scope.curDate = '2014-02-24 12:00:00';
}
