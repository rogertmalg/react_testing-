import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  });

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });
  
  it('should add numbers', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subtract numbers', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonSub = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    buttonSub.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should multiply numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should divide numbers', () => {
    const button2 = container.find('#number2');
    const button7 = container.find('#number7');
    const button1 = container.find('#number1');
    const buttonDiv = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    buttonDiv.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should concatenate multiple numbers on button click', () => {
    const button2 = container.find('#number2');
    const button7 = container.find('#number7');
    const button1 = container.find('#number1');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    expect(runningTotal.text()).toEqual('217');
  });

  it('should chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button5 = container.find('#number5');
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const buttonMultiply = container.find('#operator-multiply')
    const buttonAdd = container.find('#operator_add');
    const buttonDiv = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonDiv.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click')
    expect(runningTotal.text()).toEqual('2');
  });

  it('should clear runningTotal without affecting the calculation', () => {
    const button2 = container.find('#number2');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply')
    const buttonAdd = container.find('#operator_add');
    const runningTotal = container.find('#running-total');
    const buttonClear = container.find('#clear');
    const buttonEquals = container.find('#operator-equals')
    button2.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonAdd.simulate('click');
    button5.simulate('click');
    buttonClear.simulate('click');
    buttonEquals.simulate('click')
    expect(runningTotal.text()).toEqual('10');
  });
})

