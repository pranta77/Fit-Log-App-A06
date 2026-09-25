"use client";

import { createContext, useContext, useState } from "react";

const FitLogContext = createContext();

export const FitLogProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const addToPlan = (workout) => {
    setPlan((prev) => {
      const alreadyExists = prev.some((item) => item.id === workout.id);

      if (alreadyExists) {
        return prev;
      }
      return [...prev, workout];
    });
  };

  const saveForLater = (workout) => {
    setSaved((prev) => {
      const alreadyExists = prev.some((item) => item.id === workout.id);

      if (alreadyExists) {
        return prev;
      }
      return [...prev, workout];
    });
  };

  // Remove workout from today's plan
  const removeFromPlan = (id) => {
    setPlan((previousPlan) => previousPlan.filter((item) => item.id !== id));
  };
  // Remove workout from saved
  const removeFromSaved = (id) => {
    setSaved((previousSaved) => previousSaved.filter((item) => item.id !== id));
  };

  // Mark workout as done
  const markAsDone = (id) => {
    setPlan((previousPlan) =>
      previousPlan.map((item) =>
        item.id === id ? { ...item, completed: true } : item,
      ),
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
        removeFromPlan,
        markAsDone,
        removeFromSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => useContext(FitLogContext);
