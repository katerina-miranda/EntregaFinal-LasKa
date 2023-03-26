import { useContext, createContext, useState } from 'react'

const DarkModeContext = createContext() //creo mi contexto
export const useDarkModeContext = () => useContext(DarkModeContext) //me permite utilizar mi contexto

export const DarkModeProvider = (props) => { //defino mi proveedor
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.body.firstElementChild.classList.add('darkMode')
    } else {
      document.body.firstElementChild.classList.remove('darkMode')
    }
  }
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {props.children}
    </DarkModeContext.Provider>
  )
}