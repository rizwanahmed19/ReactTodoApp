import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
import expect from 'expect';

import TodoApp from '../../components/TodoApp';

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});
})