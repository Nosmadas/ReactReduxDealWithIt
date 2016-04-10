import {expect} from 'chai';
import telemarketerReducer from '../src/wwwroot/js/reducers/telemarketerReducer';
import telemarketerSelected from '../src/wwwroot/js/actions/telemarketerSelected';
import telemarketerDeselected from '../src/wwwroot/js/actions/telemarketerDeselected';

describe('Telemarketer selected', () => {

    const name = "Test Name";

    it('does not mutate the original state', () => {
        let telemarketer = { name, selected: false }
        let state = [telemarketer];

        var newState = telemarketerReducer(state, telemarketerSelected(telemarketer));

        expect(state[0].selected).to.equal(false);
        expect(state[0].name).to.equal(name);
    });

    it('sets telemarketer to selected', () => {
        let telemarketer = { name, selected: false }
        let state = [telemarketer];

        var newState = telemarketerReducer(state, telemarketerSelected(telemarketer));

        expect(newState[0].selected).to.equal(true);
    });
});

describe('Telemarketer deselected', () => {

    const name = "Test Name";

    it('does not mutate the original state', () => {
        let telemarketer = { name, selected: true }
        let state = [telemarketer];

        var newState = telemarketerReducer(state, telemarketerDeselected(telemarketer));

        expect(state[0].selected).to.equal(true);
        expect(state[0].name).to.equal(name);
    });

    it('sets telemarketer to deselected', () => {
        let telemarketer = { name, selected: true }
        let state = [telemarketer];
        
        var newState = telemarketerReducer(state, telemarketerDeselected(telemarketer));

        expect(newState[0].selected).to.equal(false);
    });
});