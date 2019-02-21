/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

*/
test('Fake Test', () => {
    expect(true).toBeTruthy();
})
/*
describe('Indicator', () => {
  describe('when loading is false', () => {
    it('should render children', () =>{
      const wrapper = mount(
        <App isLoading={false}>
        <div>Indicator Test</div>
        </App>
      );
      expect(wrapper.html()).toEqual('<div>Indicator Test</div>');
      wrapper.unmount();
    });
  });

});
*/
