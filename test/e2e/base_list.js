'use strict';

describe('Base list', function() {

    it('should list all the records', function () {
        browser().navigateTo('/#/a_unadorned_mongoose');
        expect( element('a').text() ).
            toMatch( /TestPerson1/ );
    });

});

