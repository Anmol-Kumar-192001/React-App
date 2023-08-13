import { render, screen } from '@testing-library/react'
import Login from '../screens/LoginForm';

describe('test',()=>{
    test("render login form",async () => {
        render(<Login/>);
        const element =await screen.findByPlaceholderText('Email Address');
        console.log('element is',element);
        expect(element).toBeInTheDocument();
    })
})
