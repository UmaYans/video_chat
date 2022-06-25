import {BrowserRouter, Routes , Route } from "react-router-dom"
import Main from "./pages/Main/Main";
import NotFound404 from "./pages/NotFound/NotFound404";
import Room from "./pages/Room/Room";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/room/:id" element={<Room/>} />
      <Route path="/" element={<Main/>} />
      <Route path="*" element={<NotFound404/>} />

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
