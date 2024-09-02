import React from 'react'
import FAQ from "./assets/Pages/FAQ"

import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

        
<BrowserRouter>

<Routes>
      <Route path="/" element={<FAQ/>} />
     
    

      {/* Add other routes as needed */}
    </Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App