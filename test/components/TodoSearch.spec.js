import React from 'react';
import ConnectedTodoSearch, { TodoSearch } from '../../src/components/TodoSearch';
import {mapStateToProps} from '../../src/components/TodoSearch';
import INITIAL_STATE from '../fakeStore';

describe('TodoSearch', function(){
    beforeEach(function(){
        this.wrapper = shallow(<TodoSearch />)
    });

    it('should exist', function(){
        expect(this.wrapper).to.exist;
    });

    it('should pass down correct functions', function(){
        const handleInput = this.wrapper.instance().handleInput;
        const handleComplete = this.wrapper.instance().handleComplete;

        expect(this.wrapper.find('input').first().prop('onChange')).to.eql(handleInput);
        expect(this.wrapper.find('input').at(1).prop('onChange')).to.eql(handleComplete);
    });

    it('should map state to props', function(){
        INITIAL_STATE.searchText = "Rehan";
        INITIAL_STATE.showCompleted = true;
        this.wrapper = shallow(<TodoSearch store={INITIAL_STATE} />);
        const obj = mapStateToProps(INITIAL_STATE);
        expect(obj.searchText).to.equal(INITIAL_STATE.searchText);
        expect(obj.showCompleted).to.equal(INITIAL_STATE.showCompleted);
    });
})