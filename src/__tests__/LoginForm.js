import '@testing-library/jest-dom'

import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

import LoginForm from "../LoginForm"


test('shows the children when the checkbox is checked', () => {
    const testMessage = 'Test Message'
    render(<LoginForm>{testMessage}</LoginForm>)
});