import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import CoursePage from "./pages/CoursePage/CoursePage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {

  return (
    <>
      <Routes>
      <Route element={<ProtectedRoute />}>
      <Route
          path="/Online-course/course-page/:id"
          element={<CoursePage/>}
        ></Route>
          <Route path="/Online-course/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route path="/Online-course" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
