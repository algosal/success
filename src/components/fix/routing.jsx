import { MainText } from '../maintext';
import PerfectLaw from '../PerfectLaw';
import NAV from './nav';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export function Routing() {

  return (
    <div>
    <NAV></NAV>
      <Routes>
        <Route path="/" element={<MainText />} />
        <Route path="/perfectlaw" element={<PerfectLaw />}></Route>
        <Route path="/main" element={<MainText />}></Route>
      </Routes>
      </div>
  );
}
