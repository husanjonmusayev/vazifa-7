import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import endSound from "/public/music.mp3";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Short() {
  const location = useLocation();
  const data = location.state?.data;
  const navigate = useNavigate();
  const starte = useSelector((state) => state.auth.isLoggedIn);
  const [time, setTime] = useState({ minutes: 5, seconds: 0 });

  useEffect(() => {
    localStorage.setItem("them", "Short");

    let interval;
    if (starte) {
      interval = setInterval(() => {
        let currentMinutes = time.minutes;
        let currentSeconds = time.seconds;

        if (currentSeconds === 0) {
          if (currentMinutes === 0) {
            clearInterval(interval);
            const audio = new Audio(endSound); // audio faylini yaratish
            audio.play();
            navigate("/Long");
            setRunning(false);
            return;
          } else {
            currentMinutes--;
            currentSeconds = 59;
          }
        } else {
          currentSeconds--;
        }

        setTime({ minutes: currentMinutes, seconds: currentSeconds });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [starte, time]);

  return (
    <>
      <h1>
        {time.minutes < 10 ? "0" : ""}
        {time.minutes}:{time.seconds < 10 ? "0" : ""}
        {time.seconds}
      </h1>
    </>
  );
}

export default Short;
