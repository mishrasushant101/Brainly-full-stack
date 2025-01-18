import { BrainIcon } from "../icons/BrainIcon";
import { DocIcon } from "../icons/docIcon";
import { HashtagIcon } from "../icons/HashtagIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
        const navigate = useNavigate();
 
        const goToSignup = () => {
            navigate("/signup");
        };

    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
        <div className="bg-purple-200 text-xl font-bold m-4 flex items-center ">
            <BrainIcon size="sm" />
            Second Brain
        </div>
        <div id="hi" className="transform-all duration-500 p-4 flex items-center hover:bg-gray-200 cursor-pointer">
            <TwitterIcon />
            <div className="ml-4 font-semibold text-lg cursor-pointer">Tweets</div>
        </div>
        <div className="transform-all duration-500 p-4 flex items-center hover:bg-gray-200 cursor-pointer">
            <YoutubeIcon />
            <div className="ml-4 font-semibold text-lg cursor-pointer">Videos</div>
        </div>
        <div className="transform-all duration-500 p-4 flex items-center hover:bg-gray-200 cursor-pointer">
            <DocIcon />
            <div className="ml-4 font-semibold text-lg cursor-pointer">Documents</div>
        </div>
        <div className="transform-all duration-500 p-4 flex items-center hover:bg-gray-200 cursor-pointer">
            <LinkIcon />
            <div className="ml-4 font-semibold text-lg cursor-pointer">Links</div>
        </div>
        <div className="transform-all duration-500 p-4 flex items-center hover:bg-gray-200 cursor-pointer" onClick={goToSignup} cursor-pointer>
            <HashtagIcon />
            <div className="ml-4 font-semibold text-lg cursor-pointer">Signup</div>
        </div>
    </div>
}

