import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProfileTab({ show, setShow }) {

    const { signup, user, logout } = useAuth();
    return (
        <div

            className={`${show ? "block" : "hidden"} bg-white shadow  py-4 w-full text-center rounded-lg absolute`}
        >

            {user ? (<>
                <div className="flex flex-col gap-2 text-md">
                    <Link to={'/profile'} className="px-2 py-2 hover:bg-amber-50 w-full text-center">My Profile</Link>
                    <button onClick={() => logout()} className="text-red-700  px-2 py-2 rounded-lg ">Logout</button>
                </div>

            </>)

                : <Link to={"/login"} className="bg-amber-700 w-full text-white px-5 py-2 rounded-lg">
                    Login
                </Link>}

        </div>
    );
}

export default ProfileTab;