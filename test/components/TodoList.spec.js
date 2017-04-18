import React from 'react';
import ConnectedTodoList, {TodoList} from '../../src/components/TodoList';
import ConnectedTodo, {Todo} from '../../src/components/Todo';


describe('TodoList', function(){
    let todos = [
			{
				id: 1,
				text: 'some dummy text',
			}, 
            {
				id: 2,
				text: 'some more dummy text',
			}
		];
    beforeEach(function(){
         this.wrapper = shallow(<TodoList todos={todos} searchText='dummy' />);
    });

    it('should exist', function(){     
        expect(this.wrapper).to.exist;
    });

    it('should render two Todos', function(){
        expect(this.wrapper.find(ConnectedTodo)).to.have.lengthOf(2);
    })
});
