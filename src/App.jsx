import { useEffect, useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

function App() {

  const [themeMode, setThemMode] = useState("light");

  const lightTheme = () => {
    setThemMode("light");
  };

  const darkTheme = () => {
    setThemMode("dark");
  };

  // actual theme change
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);

return (
// <UserContextProvider>
  // <h1>Vite + React</h1>
  // <Login></Login>
  // <Profile></Profile>
  // </UserContextProvider>

    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* theme button */}
          <ThemeBtn></ThemeBtn>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* card component */}
          <Card></Card>
        </div>
      </div>
    </div>
    </ThemeProvider>

  )
}

export default App