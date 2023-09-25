import React, { useEffect, useState } from "react";
import AdminLogin from "./common/adminLogin";
import InterviewerLogin from "./common/interviewerLogin";
import InterviewerForm from "./interviewerForm";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [admin, setAdmin] = useState(false);
  const [interviewer, setInterviewer] = useState(false);
  const [register, setRegister] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    if(searchParams.get('registered')==="true") configInterviewer();
  },[]);


  const configInterviewer = () => {
    setRegister(false);
    if (admin) setAdmin((admin) => !admin);

    setInterviewer((interviewer) => !interviewer);
  };
  const configAdmin = () => {
    setRegister(false); 
    if (interviewer) setInterviewer((interviewer) => !interviewer);
    setAdmin((admin) => !admin);
  };

  const configRegister = () => {
    setAdmin(false);
    setInterviewer(false);
    setRegister((register) => !register);
  };

  return (
    <>
      <div class="min-h-screen flex flex-col items-center justify-center">
        <div class="flex gap-4 p-3">
          <button
            onClick={configAdmin}
            class="relative flex  h-[50px] w-60 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 disabled"
          >
            <span class="relative z-10">Admin</span>
          </button>
          <button
            onClick={configInterviewer}
            class="relative flex  h-[50px]   w-60 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
          >
            <span class="relative z-10">Interviewer</span>
          </button>
          <button
            onClick={configRegister}
            class="relative flex  h-[50px]   w-60 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
          >
            <span class="relative z-10">Register</span>
          </button>
        </div>
        <div class="flex">
          {admin && <AdminLogin />}
            {interviewer && <InterviewerLogin />}
            {register && <InterviewerForm />}
        </div>
      </div>
    </>
  );
}

export default Home;