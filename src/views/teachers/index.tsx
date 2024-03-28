import { Route, Routes } from "react-router-dom";
import ControlPanel from "./controlPanel";
/*
const Teachers = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Teacher Home</h1>} />
      <Route path="/profile" element={<h1>Teacher Profile</h1>} />
      <Route path="/courses" element={<h1>Teacher Courses</h1>} />
      <Route path="/mystudents" element={<h1>Teacher MyStudents</h1>} />
    </Routes>
  );
};
*/
function Teachers(){
  return (
    <Routes>
      <Route path="./controlPanel" element={<ControlPanel/>} />
    </Routes>
  );
};

export default Teachers;