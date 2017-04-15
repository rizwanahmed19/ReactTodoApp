import cAddTodo, {AddTodo} from '../../src/components/AddTodo';
import React from 'react';
import { Provider } from 'react-redux';
import INITIAL_STATE from '../fakeStore';
//import { reducer } from '../../src/store/configureStore';
//import { createStore } from 'redux';



//const store = createStore(reducer);
describe('AddTodo', function(){
    beforeEach(function(){
         this.wrapper = shallow(
            <AddTodo store={INITIAL_STATE}/>
        );
    });

    it('should exist', function(){
        expect(this.wrapper).to.exist;
    });

    it('should pass down the correct function', function(){
        const addTodo = this.wrapper.instance().addTodo;

        expect(this.wrapper.find('form').prop('onSubmit')).to.eql(addTodo);
        //expect(this.wrapper.instance()).to.be.instanceOf(AddTodo);
    });

    it('should call the method addTodo when submitted', function(){
        this.wrapper = mount(
            <AddTodo store={INITIAL_STATE}/>
        );
        const AddTodoInstance = this.wrapper.instance();
        expect(AddTodoInstance).to.be.instanceOf(AddTodo);
        sinon.spy(AddTodoInstance, "addTodo");
        AddTodoInstance.forceUpdate();
        this.wrapper.update();
        this.wrapper.find('form').simulate('submit', { preventDefault() {} });
        expect(AddTodoInstance.addTodo.calledOnce).to.equal(true);
    });


})