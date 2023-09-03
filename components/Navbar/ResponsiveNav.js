import Link from "next/link";
import styles from "../../styles/navbar/Navbar.module.css";
import nav_link from "./nav_link";
import SearchBar from "./SearchBar";

const ResponsiveNav = () => {
  return (
    <>

    {/* nav container  */}
      <div className="text-center bg-slate-400">

        {/* nav menu  */}
        <ul>
          {nav_link.map((link) => (
            <Link key={link.name} href={link.href}>
              <li className={styles.link}>{link.name.toUpperCase()}</li>
            </Link>
          ))}

          {/* search bar  */}
          <div className="flex justify-center">
            <SearchBar/>
          </div>

          {/* search bar end  */}
        </ul>
        {/* menu end  */}
      </div>

      {/* nav container end  */}
    </>
  );
};

export default ResponsiveNav;
