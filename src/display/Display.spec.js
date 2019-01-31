import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

//Display - 
//Display - 

describe('<Display/>', () => {
   it('should display open and unlocked', () => {
      const { getByText } = render(<Display closed={false} locked={false} />);
      const open = getByText(/open/i);
      const unlocked = getByText(/unlocked/i);
      expect(open).toHaveTextContent(/open/i);
      expect(open).toHaveClass('green-led');
      expect(unlocked).toHaveTextContent(/unlocked/i);
      expect(unlocked).toHaveClass('green-led');
   });
   it('should use green-led when open and unlocked', () => {
      const { getByText } = render(<Display closed={false} locked={false} />);
      const open = getByText(/open/i);
      const unlocked = getByText(/unlocked/i);
      expect(open).toHaveClass('green-led');
      expect(unlocked).toHaveClass('green-led');
   });

})