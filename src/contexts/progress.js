import axios from "axios";
import { createContext, useState } from "react";
import { URL } from "../constants/apiLink";

export const ProgressContext = createContext();

export default function ProgressProvider({ children }) {
  const [progress, setProgress] = useState();
  const [todayHabits, setTodayHabits] = useState([]);
  const [doneHabits, setDoneHabits] = useState([]);

  function calculateCompleted(done, today) {
    const totalDone = Math.ceil((done.length / today.length) * 100);
    Number.isNaN(totalDone) ?  setProgress(0) : setProgress(totalDone);
  }

  function getProgress(apiResponse) {
    const auth = {
      headers: {
        Authorization: `Bearer ${apiResponse.token}`,
      },
    };
    const promise = axios.get(`${URL}/habits/today`, auth);
    promise.then((resp) => {
      setTodayHabits(resp.data);
      let doneHabitsCopy = [...doneHabits];
      resp.data.forEach((h) => {
        h.done ? (doneHabitsCopy = [...doneHabitsCopy, h.id]) : (doneHabitsCopy = [...doneHabitsCopy]);
        setDoneHabits(doneHabitsCopy);
      });
      calculateCompleted(doneHabitsCopy, resp.data);
    });
  }

  function updateProgress(totalDone) {
    setProgress(totalDone);
  }

  return (
    <ProgressContext.Provider value={{ getProgress, updateProgress, progress }}>{children}</ProgressContext.Provider>
  );
}
