import { shallow } from 'enzyme';
import React from 'react';
import RegisterUser from '../components/RegisterUser';
 //import { render, fireEvent, waitForElement, findByTestId } from '@testing-library/react';

 export{};

 describe("should display the login component", () => {
  const wrapper = shallow(<RegisterUser />);

  it('should have a submit button', () => {
    //Expects one button to exist in the component
    expect(wrapper.find('Button')).toHaveLength(1);
  })

  it('should have input fields for username and password', () => {
    //Expects a field for username and a field for password
    expect(wrapper.find('input#username')).toHaveLength(1);
    expect(wrapper.find('input#password')).toHaveLength(1);
  })
  
 })
