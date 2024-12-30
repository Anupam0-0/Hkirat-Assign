import React from 'react'
import App from './App'
import { createContext } from 'react'

const InputContext = createContext(null)

const FormContext = () => {
    const [input, setInput] = React.useState([])

    return (
        <div>
            <InputContext.Provider value={{ input, setInput }}>
                <App />
            </InputContext.Provider>
        </div>
    )
}

export { InputContext }
export default FormContext;