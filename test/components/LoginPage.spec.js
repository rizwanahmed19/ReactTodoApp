import React from 'react';
import ConnectedLoginPage, { LoginPage, mapDispatchToProps } from '../../src/components/LoginPage';
import * as actions from '../../src/actions/actions';
const startLogin = sinon.stub(actions, 'startLogin');
startLogin.returns('loginStarted');

describe('Login Page', function(){
    beforeEach(function(){
        this.wrapper = shallow(<LoginPage beginLogin={() => {}}/>);
    });

    it('should exist', function(){
        expect(this.wrapper).to.exist;
    });

    it('should pass down the correct function', function(){
        const handleAuth = this.wrapper.instance().handleAuth;
        expect(this.wrapper.find('button').prop('onClick')).to.eql(handleAuth);
    });

    it('should call the handleAuth method when button is clicked', function(){
        const LoginPageInstance = this.wrapper.instance();
        expect(LoginPageInstance).to.be.instanceOf(LoginPage);
        sinon.spy(LoginPageInstance, 'handleAuth');
        LoginPageInstance.forceUpdate();
        this.wrapper.update();
        this.wrapper.find('button').simulate('click', { preventDefault() {} });
        expect(LoginPageInstance.handleAuth.calledOnce).to.be.true;
    });

    it('maps dispatch to props', function(){
        const dispatchSpy = sinon.spy();
        const { beginLogin } = mapDispatchToProps(dispatchSpy);
        beginLogin();
        
        // const expectedAction = startLogin();
        // const spyLastCall = dispatchSpy.getCall(0);

        expect(dispatchSpy.calledWith('loginStarted')).to.be.true;
    })
})