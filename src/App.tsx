import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersRoute from "./routes/user-routes/default";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UsersRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
