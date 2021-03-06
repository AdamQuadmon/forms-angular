'use strict';

describe('Global search capability', function() {

    it('should find a record', function () {
        browser().navigateTo('/');
        input('searchTarget').enter('IsA');
        expect( repeater( '.search-result' ).count() ).toEqual(1);
    });

    it('should find multiple records', function () {
        browser().navigateTo('/');
        input('searchTarget').enter('Test');
        expect( repeater( '.search-result' ).count() ).toEqual(2);
    });

    it('should not find records that do not meet find function', function () {
        browser().navigateTo('/');
        input('searchTarget').enter('Not');
        expect( repeater( '.search-result' ).count() ).toEqual(0);
    });

    it('should not find records indexed on a no-search field', function () {
        browser().navigateTo('/');
        input('searchTarget').enter('ReportingIndex');
        expect( repeater( '.search-result' ).count() ).toEqual(0);
    });

    it('should not have an error class in the search box when the page is created', function () {
        browser().navigateTo('/');
        expect(element('#search-cg').attr('class')).not().toMatch(/error/);
    });

    it('should have an error class in the search box when the string is not found', function () {
        browser().navigateTo('/');
        input('searchTarget').enter('Not');
        expect(element('#search-cg').attr('class')).toMatch(/error/);
    });

    it('should not have an error class in the search box when the input is cleared', function () {
        browser().navigateTo('/');
        input('searchTarget').enter('Not');
        input('searchTarget').enter('');
        expect(element('#search-cg').attr('class')).not().toMatch(/error/);
    });

    it('should not have an error class in the search box when the string is found', function () {
        browser().navigateTo('/');
        input('searchTarget').enter('IsA');
        expect(element('#search-cg').attr('class')).not().toMatch(/error/);
    });

});
