import React from 'react'

export const MyContext = React.createContext()

const ContextProvider = ({children}) => {
    const valueForContext = {
        user: {
            name: 'Alex',
            email: 'al@h.ua'
        }
    }
  return (
    <MyContext.Provider value={valueForContext}>{children}</MyContext.Provider>
  )
}

export default ContextProvider