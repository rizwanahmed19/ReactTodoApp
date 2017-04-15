import React from 'react';
import ConnectedTodoList, {TodoList} from '../../src/components/TodoList';

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
         this.wrapper = shallow(<TodoList todos={todos} />);
    });

    it('should exist', function(){     
        expect(this.wrapper).to.exist;
    });

    it('should display 2 li', function(){
        expect(this.wrapper.find('Todo')).to.have.lengthOf(2);
    });
})
