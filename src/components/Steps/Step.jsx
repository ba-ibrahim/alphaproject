import Link from "next/link";
import "./Step.css"
import Image from "next/image";
export default function Step({title, description, link}) { 
    return (
        <div className="step">
            <div className="info">
                <h3>
                    {title}
                </h3>
                <p>
                    {description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde qui ex consequuntur quas
                </p>
                <Link href={link}>Click here</Link>
            </div>
            <div className="image">
            </div>
        </div>
)}