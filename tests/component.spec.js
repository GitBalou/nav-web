import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import LoginCtrl from '../src/controllers/LoginCtrl.jsx';
import Loading from '../src/views/Loading.jsx';
import FormManager from '../src/views/FormManager.jsx';
import ErrorDisplay from '../src/views/ErrorDisplay.jsx';

describe('Login controller', () => {

    it('should render a login screen with loading, & error components', () => {
        const wrapper = shallow(<LoginCtrl/>);
        expect(wrapper.containsAllMatchingElements([
            <Loading/>,
            <ErrorDisplay/>
        ])).to.equal(true);
    });

    it('should manage ui, error & data from state', () => {
        const wrapper = shallow(<LoginCtrl/>);
        expect(wrapper.state().loading).to.equal(false);
    });
});