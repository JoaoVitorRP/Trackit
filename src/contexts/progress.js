import axios from "axios";
import { createContext, useState } from "react";
import { URL } from "../constants/apiLink";

export const ProgressContext = createContext();

export default function ProgressProvider({ children }) {
  const [progress, setProgress] = useState();

  function calculateCompleted(done, today) {
    console.log(`Done: ${done.length}`);
    console.log(`Today: ${today.length}`);
    const totalDone = Math.ceil((done.length / today.length) * 100);
    Number.isNaN(totalDone) ? setProgress(0) : setProgress(totalDone);
  }

  function getProgress(apiResponse) {
    const auth = {
      headers: {
        Authorization: `Bearer ${apiResponse.token}`,
      },
    };
    const promise = axios.get(`${URL}/habits/today`, auth);
    promise.then((resp) => {
      let doneHabits = [];
      resp.data.forEach((h) => {
        h.done ? (doneHabits = [...doneHabits, h.id]) : (doneHabits = [...doneHabits]);
      });
      calculateCompleted(doneHabits, resp.data);
    });
  }

  function updateProgress(totalDone) {
    setProgress(totalDone);
  }

  return (
    <ProgressContext.Provider value={{ getProgress, updateProgress, progress }}>{children}</ProgressContext.Provider>
  );
}
