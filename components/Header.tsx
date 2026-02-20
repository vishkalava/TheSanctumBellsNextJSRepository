"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// Images
import logo from "@/assets/images/logo.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Hooks
import { usePathname } from "next/navigation";

// --------------

const Header = () => {
  const [menuPreview, setMenuPreview] = useState<boolean>(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);

  const pathname: string = usePathname();

  console.log("PATHNAME: " + pathname);

  const toggleSubMenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const handleMenuShow = () => {
    setMenuPreview(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    if (target) {
      if (
        target.parentElement?.className === "sub-menu-toggler" ||
        target.className === "sub-menu-toggler"
      ) {
        return;
      }
    }
    setMenuPreview(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Header */}
      <div
        className={
          "header-holder center-relative relative content-1170" +
          (menuPreview ? " down" : "")
        }
      >
        <div className="header-logo">
          <Link href="/">
            <img src={logo.src} alt="Park" />
          </Link>
        </div>
        <div className="toggle-holder">
          <div id="toggle" onClick={handleMenuShow}>
            <div className="first-menu-line"></div>
            <div className="second-menu-line"></div>
            <div className="third-menu-line"></div>
          </div>
        </div>
        <div className="clear"></div>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {menuPreview && (
          <motion.div
            key="nav-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-wraper center-relative"
            onClick={handleCloseMenu}
          >
            <motion.div
              key="nav-holder"
              initial={{ transform: `translateY(30px)` }}
              animate={{ transform: `translateY(0px)` }}
              exit={{ transform: `translateY(30px)` }}
              className="menu-holder"
            >
              <nav id="header-main-menu" className="big-menu">
                {/* Nav Links */}
                <ul className="main-menu sm sm-clean">
                  {/* link */}
                  <li>
                    <Link
                      href="/"
                      className={pathname === "/" ? "current" : ""}
                    >
                      Home
                    </Link>
                  </li>
                  {/* link */}
                  <li>
                    <Link
                      href="/about"
                      className={pathname === "/about/" ? "current" : ""}
                    >
                      About
                    </Link>
                  </li>
                  {/* link */}
                  <li>
                    <Link
                      href="/portfolio"
                      className={pathname === "/portfolio/" ? "current" : ""}
                    >
                      Portfolio
                    </Link>
                  </li>
                  {/* Sub menu */}
                  <li className="sum-menu-li">
                    <div className="sub-menu-toggler" onClick={toggleSubMenu}>
                      <Link
                        href=""
                        className={
                          /^\/portfolio\/.+\/$/.test(pathname) ? "current" : ""
                        }
                      >
                        Portfolio Post
                      </Link>
                      <div className="expandable-icon">
                        <motion.div
                          variants={{
                            expanded: {
                              transform: `rotate(-180deg)`,
                            },
                            collapsed: {
                              transform: `rotate(0deg)`,
                            },
                          }}
                          initial="collapsed"
                          animate={isSubmenuOpen ? "expanded" : "collapsed"}
                          transition={{ duration: 0.3 }}
                        >
                          <FontAwesomeIcon icon={faChevronDown} />
                        </motion.div>
                      </div>
                    </div>
                    <motion.ul
                      variants={{
                        expanded: {
                          height: "auto",
                          // opacity: 1,
                          transition: {
                            duration: 0.3,
                          },
                        },
                        collapsed: {
                          height: 0,
                          // opacity: 1,
                          transition: {
                            duration: 0.3,
                          },
                        },
                      }}
                      animate={isSubmenuOpen ? "expanded" : "collapsed"}
                      initial="collapsed"
                      className="sub-menu"
                    >
                      {/* sub menu link */}
                      <li>
                        <Link
                          href="/portfolio/1"
                          className={
                            pathname === "/portfolio/1/" ? "current" : ""
                          }
                        >
                          Demo 1
                        </Link>
                      </li>
                      {/* sub menu link */}
                      <li>
                        <Link
                          href="/portfolio/2"
                          className={
                            pathname === "/portfolio/2/" ? "current" : ""
                          }
                        >
                          Demo 2
                        </Link>
                      </li>
                      {/* sub menu link */}
                      <li>
                        <Link
                          href="/portfolio/3"
                          className={
                            pathname === "/portfolio/3/" ? "current" : ""
                          }
                        >
                          Demo 3
                        </Link>
                      </li>
                      {/* sub menu link */}
                      <li>
                        <Link
                          href="/portfolio/4"
                          className={
                            pathname === "/portfolio/4/" ? "current" : ""
                          }
                        >
                          Demo 4
                        </Link>
                      </li>
                      {/* sub menu link */}
                      <li>
                        <Link
                          href="/portfolio/5"
                          className={
                            pathname === "/portfolio/5/" ? "current" : ""
                          }
                        >
                          Demo 5
                        </Link>
                      </li>
                    </motion.ul>
                  </li>
                  {/* link */}
                  <li>
                    <Link
                      href="/gallery"
                      className={pathname === "/gallery/" ? "current" : ""}
                    >
                      Gallery
                    </Link>
                  </li>
                  {/* link */}
                  <li>
                    <Link
                      href="/gallery-full"
                      className={pathname === "/gallery-full/" ? "current" : ""}
                    >
                      Gallery Full
                    </Link>
                  </li>
                  {/* link */}
                  <li>
                    <Link
                      href="/contact"
                      className={pathname === "/contact/" ? "current" : ""}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
