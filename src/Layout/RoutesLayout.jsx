import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import clickSound from "/public/start.mp3";
import "./layout.css";
import Header from "../components/Headr/Header";
import { useEffect, useState } from "react";
import { start, stop } from "../Redux/store";
import { useDispatch } from "react-redux";

function RoutesLayout() {
  const dispatch = useDispatch();
  const [bacgraund, setBacgraund] = useState("");
  const [starte, setStart] = useState(true);

  useEffect(() => {
    setBacgraund(localStorage.getItem("them"));
    
  }, [bacgraund]);

  function hendalClick(el) {
    setBacgraund(el);
    dispatch(stop());
    setStart(true);
  }

  function hendalButtonClick() {
    starte ? dispatch(start()) : dispatch(stop());
    starte ? setStart(false) : setStart(true);
    const audio = new Audio(clickSound);
    audio.play();
  }
  return (
    <div className="container" data-theme={bacgraund}>
      <Header />
      <main>
        <div className="card">
          <div className="navBar">
            <ul>
              <li>
                <NavLink
                  onClick={() => {
                    hendalClick("Pomodoro");
                  }}
                  to="/"
                >
                  Pomodoro
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    hendalClick("Short");
                  }}
                  to="/short"
                >
                  Short Break
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    hendalClick("Long");
                  }}
                  to="/long"
                >
                  Long Break
                </NavLink>
              </li>
            </ul>
          </div>
          <main>
            <Outlet></Outlet>
          </main>
          <section className="btnGroup">
            <button
              className={starte ? "start" : "Pause"}
              onClick={hendalButtonClick}
            >
              {starte ? "Start" : "Pause"}
            </button>
            {!starte && (
              <button className="closeBtn">
                <img src="close.png" />
              </button>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoutesLayout;
