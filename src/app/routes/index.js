import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calendar from "../modules/pages/Calendar";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />}></Route>
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
