'use strict';

formsAngular.factory('$locationParse', [function() {

        var lastRoute = null,
            lastObject = {};

        return function(location) {

            if (location !== lastRoute) {
                lastRoute = location;
                lastObject = {newRecord: false};
                var locationSplit = location.split('/');
                var locationParts = locationSplit.length;
                lastObject.modelName = locationSplit[1];
                var lastPart = locationSplit[locationParts - 1];
                if (lastPart === "new") {
                    lastObject.newRecord = true;
                    locationParts--;
                } else if (lastPart === "edit") {
                    locationParts = locationParts - 2
                    lastObject.id = locationSplit[locationParts];
                }
                if (locationParts > 2) {
                   lastObject.formName = locationSplit[2];
                }
            }
            return lastObject;
        }
    }]);

