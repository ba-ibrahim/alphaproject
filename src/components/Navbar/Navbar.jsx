import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/Vector.png"
import { MdOutlineLanguage } from "react-icons/md";
export default function Navbar() { 
    return (
        <div className="navbar">
            <div className="logo">
                <Image src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link>
                            Traduire vos document
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Traduire vos document
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Traduire vos document
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="config">
                <div className="earch">
                    <MdOutlineLanguage />
                </div>
                <Link>Se connecter</Link>
            </div>
        </div>
)}  