import React from "react";
import logo from "../../assets/TaskTracker.png";
import LanguageIcon from "@mui/icons-material/Language";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gray-300/35 p-4     min-h-screen w-full">
      <div className="h-16 px-16  w-full flex items-center  justify-between ">
        <div className="h-44 w-44 flex   ">
          <img className="object-contain " src={logo} alt="" />
        </div>
        <div>
          <div className="flex items-center  gap-4">
            <LanguageIcon  fontSize="medium"  />
           <h4 className="font-medium">Sign Up</h4>
           <button className="px-4 py-2 rounded-md  text-black bg-opacity-55 font-medium bg-orange-500 ">Request Demo</button>
          </div>
        </div>
      </div>
      <div className=" flex  justify-center items-center h-[90vh] w-full  ">
        <div className="bg-white flex flex-col  items-center drop-shadow-lg h-[80vh] w-[30vw] rounded-[2.5vw]">
            <div className="py-16 flex items-center flex-col gap-4 ">
                <h1 className="text-3xl font-semibold ">Login </h1>
                <h4 className="text-center text-gray-900 text-xl font-normal ">Hey, Enter your details to sign in <br /> to you account</h4>



            </div>
            <div className="">
              <form action="" className="flex flex-col gap-4">
              <TextField required type="email" id="outlined-basic" size="small" style={{width:'20rem'}}  label="Enter email address" variant="outlined" />
              <TextField required type="password" id="outlined-basic" size="small" style={{width:'20rem'}}  label="Passcode" variant="outlined" />
              <h4 className="opacity-80 font-medium">Having Trouble in sign in ? </h4>
              <button className="bg-orange-500 text-black bg-opacity-55 py-2 rounded-lg">Sign in</button>
              </form>
            <div className="  mt-8 w-full items-center flex justify-center">
              <span className="opacity-75 text-gray-800 ">Don't have any account? </span>
              <Link to={'/signup'} className="font-semibold opacity-75 hover:opacity-90 pl-2"> Request now</Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
