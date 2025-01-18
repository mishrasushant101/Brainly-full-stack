import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/deleteIcon";
import { DocumentIcon } from "../icons/documentIcon";

interface  CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export function Card({title, link, type}: CardProps) {
    return <div>
        <div className="pr-2">
            <div className="p-2 bg-white border rounded-md border-gray-300 max-w-72 ">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-600">
                            <DocumentIcon />
                        </div>
                        <div className="font-semibold">
                            project ideas
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
                            <ShareIcon />
                        </div>
                        <div className="pr-2 text-gray-500">
                            <DeleteIcon />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> }
                    {type === "twitter" &&  <blockquote className="twitter-tweet">
                        <a href={link}></a>
                    </blockquote> }
                </div>
            </div>
        </div>
    </div>
}