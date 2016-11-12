import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
import expect from 'expect';

import TodoList from '../../components/TodoList';
import Todo from '../../components/Todo';

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo Component for every todo item', () => {
		var todos = [
			{
				id: 1,
				text: 'some dummy text'
			}, {
				id: 2,
				text: 'some more dummy text'
			}
		];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todoComponents.length).toBe(2);
	});
})