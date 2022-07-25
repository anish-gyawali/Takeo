import { Route, Routes } from "react-router-dom"
import Error from "../common/Error"
import Dashboard from "../modules/dashboard"

const Main =()=>{
    return (
        <Routes>     
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
      </Routes>
    )
}
export default Main