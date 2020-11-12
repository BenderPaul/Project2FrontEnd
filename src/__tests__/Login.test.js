import { shallow } from 'enzyme';
import React from 'react';
import Login from '../components/Login';
import {render, fireEvent, waitForElement} from '@testing-library/react';
import ReactDOM from 'react-dom';
 //import { render, fireEvent, waitForElement, findByTestId } from '@testing-library/react';

 //export{};

  //const login = require('../components/Login');

  const wrapper = shallow(<Login/>);

  it('should render', () => {
    wrapper.render();
  })
