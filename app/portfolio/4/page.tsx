"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Images
import img01 from "@/assets/images/portfolio/4/img-01.jpg";
import img02 from "@/assets/images/portfolio/4/img-02.jpg";
import img03 from "@/assets/images/portfolio/4/img-03.jpg";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// ----------------

const PortfolioItem4 = () => {
  return (
    <main className="single single-portfolio">
      <div id="content" className="site-content">
        <div className="center-relative content-1170">
          <div className="entry-content">
            <div className="content-wrapper" style={{ paddingTop: "0px" }}>
              <h1>Handmade for Everyone</h1>
              <p>
                Because they are hard, because that goal will serve to organize
                and measure the best of our energies and skills, because that
                challenge is one that we are willing to accept, one we are
                unwilling to postpone and one.
              </p>
            </div>
            {/* Images */}
            <div className="full-portfolio-width">
              <motion.img
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className=" aligncenter"
                src={img01.src}
                alt=""
              />
              <br />
              <motion.img
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className=" aligncenter"
                src={img02.src}
                alt=""
              />
              <br />
              <motion.img
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className=" aligncenter"
                src={img03.src}
                alt=""
              />
              <br />
            </div>
            <div className="clear"></div>
          </div>
        </div>
        {/* Navigation links */}
        <div className="nav-links">
          <div className="content-570 center-relative">
            <div className="nav-previous">
              <Link href="/portfolio/5" rel="prev">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                <p>Dollar Sign</p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Elements</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav-next">
              <Link href="/portfolio/3" rel="next">
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
                <p>Wooden Desk</p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Art</Link>
                  </li>
                  <li>
                    <Link href="">Element</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioItem4;
