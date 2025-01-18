import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Navbar } from "../components/Navbar";
import { BrainIcon } from "../icons/BrainIcon";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const navigate = useNavigate();
 
        const goToSignin = () => {
            navigate("/signin");
        };
    return <div>
        <Navbar />
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8 ">
                <div className="flex justify-center mb-4 text-xl font-semibold">
                <BrainIcon size="sm" />
                <span>Second Brain</span>
                </div>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <div className="flex justify-center pt-4">
                    <Button variant="primary" text="Signup" />
                </div>
                <div className="pt-4 flex justify-center">
                    <span>Already have an account? <button className="text-purple-600" onClick={goToSignin}>signin</button></span>
                </div>
            </div>
        </div>
    </div>
}