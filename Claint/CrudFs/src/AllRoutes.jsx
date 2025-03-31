import React from 'react'
import AddData from './Component/AddData';
import { Routes,Route } from 'react-router';
import DisplayData from './Component/DisplayData';
import Update from './Component/Update'

function AllRoutes() {
  return (
    <div>
           <Routes>
            <Route path='/' element={<DisplayData/>}></Route>
            <Route path={'/AddData'} element={<AddData/>}></Route>
            <Route path={'/Update'} element={<Update/>}></Route>
           </Routes>
    </div> 
  )
}

export default AllRoutes
