import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../page/home/Home"
import { DesarrolloPage } from "../page/DesarrolloDeSotware/DesarrolloPage"

export const AppRoutes = () => {
    return (	
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/DesarrolloPage" element={<DesarrolloPage/>}/>
            <Route path='/*' element={<Navigate to='/home'/>} />



        </Routes>		
    )	
}