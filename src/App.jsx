import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import { Home } from "./pages/Home"
import Redux from "./components/Redux"




let router = createBrowserRouter( createRoutesFromElements(
   <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="Redux" element={<Redux/>}></Route>


   </Route>
))

function App() {


  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
