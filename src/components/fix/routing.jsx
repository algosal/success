import { MainText } from '../maintext';
import PerfectLaw from '../PerfectLaw';
import NAV from './nav';
import GoldenPrinciples from '../golden';
import Fears from '../fears';


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
        <Route path="/success" element={<MainText />} />
        <Route index element={<MainText />} />
        <Route path="/perfectlaw" element={<PerfectLaw />}></Route>
        <Route path="/golden" element={<GoldenPrinciples />}></Route>
        <Route path="/fears" element={<Fears />}></Route>
        <Route path="/desires" element={<PerfectLaw />}></Route>
        <Route path="/*" element={<MainText />}></Route>
      </Routes>
      </div>
  );
}
