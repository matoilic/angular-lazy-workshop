import angular from 'angular';
import 'angular-mocks';
import component from './index';

describe('Index State', () => {
    beforeEach(() => {
        angular.mock.module(component.name)();

        browser.get('/app/index');
    });

    it('should should render properly', () => {
        const stateElement = element(by.css('.index-state'));

        expect(stateElement.isPresent()).toBeTruthy();
    });
});
