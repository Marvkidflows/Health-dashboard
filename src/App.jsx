import { Routes, Route } from "react-router-dom";
// import MainLayout from "./Pages/MainLayout";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route path="/" element={<h1 className="text-4xl">Home</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
