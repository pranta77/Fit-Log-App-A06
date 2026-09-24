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

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => useContext(FitLogContext);