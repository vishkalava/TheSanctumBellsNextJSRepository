"use client";
import { useState } from "react";
import Link from "next/link";
import { Masonry } from "@mui/lab";
import { AnimatePresence, motion } from "framer-motion";

// Images
import img01 from "@/assets/images/portfolio/portfolio-img-01.jpg";
import img02 from "@/assets/images/portfolio/portfolio-img-02.jpg";
import img03 from "@/assets/images/portfolio/portfolio-img-03.jpg";
import img04 from "@/assets/images/portfolio/portfolio-img-04.jpg";
import img05 from "@/assets/images/portfolio/portfolio-img-05.jpg";

// -----------

const Portfolio = () => {
  const [loadedAll, setLoadedAll] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("all");

  /**
   * Showing the portfolio item that are from the selected category only
   *
   * @param selectedFilter item category to be selecting
   */
  const handleChangeFilter = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  /**
   * Load all portfolio items
   */
  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    <main className="page portfolio">
      <div id="content" className="site-content">
        <div className="header-content content-1170 center-relative block">
          <h1 className="entry-title">
            Portfolio items <br />
            <i>
              <span className="underline">carefully</span>
            </i>{" "}
            selected
          </h1>
        </div>

        {/* Filter buttons */}
        <div className="portfolio-category content-1170 center-relative">
          <div
            className={filter === "all" ? "filter-btn active" : "filter-btn"}
            onClick={() => handleChangeFilter("all")}
          >
            All
          </div>
          <div
            className={filter === "app" ? "filter-btn active" : "filter-btn"}
            onClick={() => handleChangeFilter("app")}
          >
            App
          </div>
          <div
            className={filter === "art" ? "filter-btn active" : "filter-btn"}
            onClick={() => handleChangeFilter("art")}
          >
            Art
          </div>
          <div
            className={
              filter === "elements" ? "filter-btn active" : "filter-btn"
            }
            onClick={() => handleChangeFilter("elements")}
          >
            Elements
          </div>
          <div
            className={
              filter === "hardware" ? "filter-btn active" : "filter-btn"
            }
            onClick={() => handleChangeFilter("hardware")}
          >
            Hardware
          </div>
        </div>

        {/* Portfolio items cards container */}
        <div id="portfolio" className="grid">
          <div className="portfolio-mansoury-container">
            <Masonry columns={2} spacing={6} className="portfolio-masonry">
              {/* Portfolio item  */}
              {(filter === "all" || filter === "hardware") && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, transform: `translateY(50px)` }}
                    whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                    viewport={{ once: true }}
                    className="grid-item"
                  >
                    <div className="item-wrapper ">
                      <div className="portfolio-thumbnail">
                        <Link href="/portfolio/1">
                          <img src={img01.src} alt="" />
                        </Link>
                      </div>
                      <div className="entry-holder">
                        <h2>
                          <Link href="/portfolio/1">Smart Watch</Link>
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {/* Portfolio item  */}
              {(filter === "all" || filter === "art") && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, transform: `translateY(50px)` }}
                    whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                    viewport={{ once: true }}
                    className="grid-item"
                  >
                    <div className="item-wrapper ">
                      <div className="portfolio-thumbnail">
                        <Link href="/portfolio/2">
                          <img src={img02.src} alt="" />
                        </Link>
                      </div>
                      <div className="entry-holder">
                        <h2>
                          <Link href="/portfolio/2">Skyscraper</Link>
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {/* Portfolio item  */}
              {(filter === "all" || filter === "elements") && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, transform: `translateY(50px)` }}
                    whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                    viewport={{ once: true }}
                    className="grid-item"
                  >
                    <div className="item-wrapper ">
                      <div className="portfolio-thumbnail">
                        <Link href="/portfolio/3">
                          <img src={img03.src} alt="" />
                        </Link>
                      </div>
                      <div className="entry-holder">
                        <h2>
                          <Link href="/portfolio/3">Wooden Desk</Link>
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {/* Portfolio item  */}
              {(filter === "all" || filter === "app") && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, transform: `translateY(50px)` }}
                    whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                    viewport={{ once: true }}
                    className="grid-item"
                  >
                    <div className="item-wrapper ">
                      <div className="portfolio-thumbnail">
                        <Link href="/portfolio/4">
                          <img src={img04.src} alt="" />
                        </Link>
                      </div>
                      <div className="entry-holder">
                        <h2>
                          <Link href="/portfolio/4">Eight Stairs</Link>
                        </h2>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
              {/* Items that are hidden and appears when clicking load more button */}
              {loadedAll && (
                <>
                  {/* Portfolio item  */}
                  {(filter === "all" || filter === "app") && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, transform: `translateY(50px)` }}
                        whileInView={{
                          opacity: 1,
                          transform: `translateY(0px)`,
                        }}
                        viewport={{ once: true }}
                        className="grid-item"
                      >
                        <div className="item-wrapper ">
                          <div className="portfolio-thumbnail">
                            <Link href="/portfolio/5">
                              <img src={img05.src} alt="" />
                            </Link>
                          </div>
                          <div className="entry-holder">
                            <h2>
                              <Link href="/portfolio/5">Dollar Sign</Link>
                            </h2>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </>
              )}
            </Masonry>
          </div>
        </div>

        {/* Loading more items buttons */}
        <div className="block center-relative center-text more-posts-index-holder">
          {!loadedAll ? (
            <button className="more-posts-portfolio" onClick={handleLoadAll}>
              LOAD MORE
            </button>
          ) : (
            <button className="no-more-posts-portfolio">NO MORE</button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
