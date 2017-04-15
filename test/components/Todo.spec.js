import React from 'react';
import ConnectedTodo, {Todo, mapDispatchToProps} from '../../src/components/Todo';
import moment from 'moment';
import * as actions from '../../src/actions/actions';
const startToggle = sinon.stub(actions, 'startToggleTodo');
startToggle.returns('toggle started');

describe('Todo', function(){
    beforeEach(function(){
         this.prop = {
            id: 1,
            text: 'hello',
            completed: true,
            createdAt: 1491223931.396,
            completedAt:1490623931.396,
        };
        this.wrapper = mount(<Todo toggleTodo={() => {} } {...this.prop} />);
    });

    it('should exist', function(){
        expect(this.wrapper).to.exist;
    });

    it('should pass down proper props', function(){
        const text = 'Completed ' + moment.unix(1490623931.396).format('MMM Do, YYYY [at] h:mm a');
        const handleToggle = this.wrapper.instance().handleToggle;

        expect(this.wrapper.find('div').first().prop('className')).to.equal('todo todo-completed');
        expect(this.wrapper.find('input').first().prop('checked')).to.equal(this.prop.completed);
        expect(this.wrapper.find('p').first().text()).to.equal(this.prop.text);
        expect(this.wrapper.find('p').at(1).text()).to.equal(text);
        expect(this.wrapper.find('div').first().prop('onClick')).to.eql(handleToggle);

    });

    it('should call handleToggle when clicked', function(){
        const TodoInstance = this.wrapper.instance();
        expect(TodoInstance).to.be.instanceOf(Todo);
        sinon.spy(TodoInstance, 'handleToggle');
        TodoInstance.forceUpdate();
        this.wrapper.update();
        this.wrapper.find('div').first().simulate('click', { preventDefault() {} });
        expect(TodoInstance.handleToggle.calledOnce).to.be.true;
    });

    it('maps dispatch to props', function(){
        const dispatchSpy = sinon.spy();
        const {toggleTodo} = mapDispatchToProps(dispatchSpy);
        toggleTodo();

        expect(dispatchSpy.calledWith('toggle started')).to.be.true;
        
    });
})