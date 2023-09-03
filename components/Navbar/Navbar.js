import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { GrClose } from "react-icons/gr";



import styles from "../../styles/navbar/Navbar.module.css";
import nav_link from "./nav_link";
import ResponsiveNav from "./ResponsiveNav";
import SearchBar from "./SearchBar";


const Navbar = () => {
  const[isOpenNav, setIsOpenNav]=useState(false);
  const handleMenu = ()=>{
    setIsOpenNav(!isOpenNav);
  }
  
  return (
    <>
      {/* nav container  */}
      <div className={styles.nav_container}>
        {/* logo  */}
        <div>
          <Link href="#">
            <Image
              src="/asset/images/logo.png"
              width={200}
              height={200}
              alt="Logo image"
            />
          </Link>
        </div>

        {/* logo end  */}
        {/* ********************************************/}
        {/* nav menu  */}

        <div className="hidden md:block">
          <ul className="flex space-x-5 items-center">
            {/* nav link  */}
            {nav_link.map((link) => (
              <Link key={link.name} className={styles.link} href={link.href}>
                <li>{link.name.toUpperCase()}</li>
              </Link>
            ))}

            {/* nav link end  */}
            {/* *********************************************** */}
            {/* cart icon  */}

            <span>
              <button className={styles.cart}>
                <BsCart3 />
              </button>
            </span>

            {/* cart icon end  */}
            {/* *********************************************** */}
            {/* search bar  */}

            <div>
              <SearchBar/>
            </div>
            {/* search bar end  */}
          </ul>
        </div>
        {/* nav menu end  */}
        {/* *****************************  */}
        {/* responsive code  */}

        <div className="flex space-x-8 justify-center items-center md:hidden">
          {/* cart icon  */}
          <div>
            <span>
              <button className={styles.cart}>
                <BsCart3 />
              </button>
            </span>
          </div>
          {/* cart icon end  */}
          <div>
            <span onClick={handleMenu}>
              {
                isOpenNav?<button className="text-2xl"><GrClose/></button>:<button className="text-2xl">
                <AiOutlineMenu />
              </button>
              }
              
            </span>
          </div>
        </div>
      </div>

      {/* cart container end  */}
      {/* ******************************** */}
      {/* responsive component */}
      <div>
        {
          isOpenNav?<ResponsiveNav/>:""
        }
      </div>
    </>
  );
};

export default Navbar;
