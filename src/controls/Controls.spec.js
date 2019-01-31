import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';


// Test away!
//Render closed Button that toggle on/off
//render locked button that toggle on/off

describe('<Controls /> close toggling, lock toggling', () => {
    it('should render closed and locked buttons', () => {
        const { getByText } = render(<Controls closed={false} locked={false} />)
        const locked = getByText(/lock gate/i)
        const closed = getByText(/close gate/i)
        expect(locked).toHaveTextContent(/lock gate/i)
        expect(closed).toHaveTextContent(/close gate/i)
    })

    test('close gate becomes open gate', () => {
        const { container } = 
            render(<Controls 
                        closed={false} 
                        locked={false}/>)
        const button = container.querySelectorAll('button')

        expect(button[0].closed).toBeFalsy()
        expect(button[1].locked).toBeFalsy()

        fireEvent.click(button[0])
        expect(button[0]).toBeTruthy()

        fireEvent.click(button[1])
        expect(button[1]).toBeTruthy()



    })

    // it('locked gate becomes unlocked gate', () => {
    //     const { getByText } = render(<Controls closed={false} locked={false} />)
    //     const locked = getByText()
    // })
})