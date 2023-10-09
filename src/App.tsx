import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"
import Sidebar from "./shareContent/components/sidebar/Sidebar"

const App = () => {
  return (

    <BrowserRouter>
      <Sidebar>
        <AppRoutes />
      </Sidebar>
    </BrowserRouter>

  )
}

export default App