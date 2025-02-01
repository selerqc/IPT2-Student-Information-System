import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import TaskTracker from "./pages/TaskTracker";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/TaskTracker" element={<TaskTracker />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
