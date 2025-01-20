import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Navbar } from "../components/Navbar";
import { BrainIcon } from "../icons/BrainIcon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
            username,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")
    }

    const goToSignup = () => {
        navigate("/signup");
    };
    return <div>
        <Navbar />
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8 ">
                <div className="flex justify-center mb-4 text-xl font-semibold">
                    <BrainIcon size="sm" />
                    <span>Second Brain</span>
                </div>
                <Input reference={usernameRef} placeholder="username" />
                <Input reference={passwordRef} placeholder="password" />
                <div className="flex justify-center pt-4">
                    <Button onClick={signin} variant="primary" text="Signin" />
                </div>
                <div className="pt-4 flex justify-center">
                    <span>Don't have an account? <button className="text-purple-600" onClick={goToSignup}>signup</button></span>
                </div>
            </div>
        </div>
    </div>
}