"use client";
import { createContext, useContext, useEffect, useState } from "react";

const InterviewContext = createContext();

export const useInterview = () => useContext(InterviewContext);

export const InterviewContextProvider = ({ children }) => {
  const [interviewInfo, setInterviewInfo] = useState(null);
  return (
    <InterviewContext.Provider value={{ interviewInfo, setInterviewInfo }}>
      {children}
    </InterviewContext.Provider>
  );
};
