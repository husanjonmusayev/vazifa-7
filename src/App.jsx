import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import RoutesLayout from "./Layout/RoutesLayout";
import Pomodor from "./components/Pomodor/Pomodor";
import Short from "./components/Short/Short";
import Long from "./components/Long/Long";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RoutesLayout />}>
        <Route path="/" element={<Pomodor />}></Route>
        <Route path="/short" element={<Short />}></Route>
        <Route path="/long" element={<Long />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
