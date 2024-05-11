
import './App.css'
import ReducerActionContext from "./context.js"
import Navbar from './component/navbar/nav'
import { useReducer } from 'react'
import ActionOnList from './reducer.js'
import ListContext from './listContext.js'

function App() {
  const [list, dispatch] = useReducer(ActionOnList, {})

  return (
    <>
      <ReducerActionContext.Provider value={dispatch}>
        <ListContext.Provider value={list}>
          <Navbar />
          
        </ListContext.Provider>


      </ReducerActionContext.Provider>

    </>
  )
}

export default App
