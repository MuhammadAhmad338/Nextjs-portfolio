import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail ,AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router"; 

const NavBar = () => {
    
    const [nav, setNav] = useState(false);
    const [shadow, setshadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    useEffect(() => {
       if(router.asPath === "/property" ||
       router.asPath === "/crypto" ||
       router.asPath === "/netflix" || 
       router.asPath === "/twitch") {
           setNavBg("transparent"); 
           setLinkColor("#ecf0f3");
        } else {
           setNavBg("#ecf0f3");
           setLinkColor('#1f2937');
       }  
    }, [router]);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
      const handleShadow = () => {
          if (window.scrollY >= 90) {
              setshadow(true);
          } else {
              setshadow(false);
          }
      }
      window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <div id="navbar" style={{ backgroundColor: `${navBg}`}} className={shadow ? "fixed w-full h-20 shadow-xl z-[100] font-nunito" : "fixed w-full h-20 z-[100] font-nunito"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image src="/../public/assets/navLogo.png" alt="/" height="50" width="125" />
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase ">
                                Home
                            </li>
                        </Link>
                        <Link href="/#aboutus">
                            <li className="ml-10 text-sm uppercase  "> 
                                About
                            </li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase scroll-smooth ">
                                Skills
                            </li>
                        </Link>
                        <Link href="/#project">
                            <li className="ml-10 text-sm uppercase scroll-smooth ">
                                Projects
                            </li>
                        </Link>
                        <Link href="/#contactArea">
                            <li className="ml-10 text-sm uppercase scroll-smooth ">
                                Contacts
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div> 
            </div>

            <div className= {nav ? " fixed left-0 top-0 w-full h-screen bg-black/70" : ""} >
                <div className={nav ? 
                "fixed left-0 top-0 h-screen w-[75%] md:w-[45%] sm:w-[60%] p-10 bg-white ease-in duration-500" :
                "fixed left-[-100%] top-0 h-screen w-[75%] md:w-[45%] sm:w-[60%] p-10 bg-white ease-in duration-500"}>
                    <div className="flex w-full items-center justify-between">
                        <Image src="/../public/assets/navLogo.png" alt="/" height="35" width="87" />
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer">
                          <AiOutlineClose />
                        </div>
                    </div>

                    <div className="border-b border-gray-300 my-4">
                        <p> Let's build something incredible together</p>
                    </div>

                    <div>
                        <ul style={{ color: `${linkColor}`}} className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#aboutus">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#project">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contactArea">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Contacts
                                </li>
                            </Link>
                        </ul>

                        <div className="pt-12"> 
                           <p className="uppercase text-purple-500">Let's Connect</p>
                           <div className="flex justify-between items-center w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg cursor-pointer shadow-gray-500 p-4">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg cursor-pointer shadow-gray-500 p-4">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg cursor-pointer shadow-gray-500 p-4">
                                    <AiOutlineMail />
                                </div>
                                <div className="rounded-full shadow-lg cursor-pointer shadow-gray-500 p-4">
                                    <BsFillPersonLinesFill />
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar