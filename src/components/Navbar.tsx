import { BrainIcon } from "../icons/BrainIcon";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();

    const goToSignin = () => {
        navigate("/signin");
    };

    const goToSignup = () => {
        navigate("/signup");
    };

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    return (
        <div>
            <div className="h-24 w-screen bg-purple-600 fixed flex items-center">
                <div className="p-8 flex items-center">
                    <div className=" rounded-full">
                        <BrainIcon size="lg" />
                    </div>
                    <div className="text-3xl font-bold text-white ml-2 hover:text-purple-800 cursor-pointer transition-all duration-500">
                        Second Brain
                    </div>
                </div>
                <div className="ml-[50vw] flex text-white text-xl font-semibold">
                    <button
                        className="m-4 cursor-pointer hover:text-purple-800 transition-all duration-500" onClick={goToDashboard}>
                        Home
                    </button>
                    <div className="m-4 cursor-pointer hover:text-purple-800 transition-all duration-500" onClick={goToSignup}>
                        Signup
                    </div>
                    <div className="m-4 cursor-pointer hover:text-purple-800 transition-all duration-500">
                        Services
                    </div>
                    <div className="m-4 cursor-pointer hover:text-purple-800 transition-all duration-500" onClick={goToSignin}>
                        Signin
                    </div>
                </div>
            </div>
        </div>
    );
}
