"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Images
import img01 from "@/assets/images/home/home-img-01.jpg";
import img02 from "@/assets/images/home/home-img-02.jpg";
import img03 from "@/assets/images/home/home-img-03.jpg";
import img04 from "@/assets/images/home/home-img-04.jpg";
import img05 from "@/assets/images/home/home-img-05.jpg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// ------------

function Home() {
  const [loadedAll, setLoadedAll] = useState<boolean>(false);

  const handleLoadAll = () => {
    setLoadedAll(true);
  };

  return (
    <main className="home blog">
      <div id="content" className="site-content">
        <div className="header-content content-1170 center-relative block">
          <h1 className="entry-title">
            Yes, we {" "}
            <span className="underline">
              <i>photograph</i>
            </span>
            ,
            <br /> subjects and stories on their behalf.
          </h1>
        </div>

        <div className="blog-holder block center-relative content-1170">
          {/* Blog article card */}
          <motion.article
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className=" relative blog-item-holder center-relative has-post-thumbnail"
          >
            <div className="post-thumbnail">
              <Link href="/single">
                <img src={img01.src} alt="" />
              </Link>
            </div>
            <div className="entry-holder">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Interior</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="entry-title">
                <Link href="/single">
                  Contemporary, classic and inspiring <i>innovation</i> stories
                </Link>
              </h2>
              <div className="excerpt">
                <p>
                  Take root and flourish dream of the mind’s eye at the edge of
                  forever shores of the cosmic
                </p>
              </div>
              <p className="read-more-arrow">
                <Link href="/single">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="article-card-icon"
                  />
                </Link>
              </p>
            </div>
            <div className="clear"></div>
          </motion.article>

          {/* Blog article card */}
          <motion.article
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className=" relative blog-item-holder center-relative has-post-thumbnail"
          >
            <div className="post-thumbnail">
              <Link href="/single">
                <img src={img02.src} alt="" />
              </Link>
            </div>
            <div className="entry-holder">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Design</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="entry-title">
                <Link href="/single">
                  Nature details softly <i>crafted</i> by hand
                </Link>
              </h2>
              <div className="excerpt">
                <p>
                  Sincerity yet herefore forfeited his cell taint neglect
                  questions uelderly amongst on distant
                </p>
              </div>
              <p className="read-more-arrow">
                <Link href="/single">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="article-card-icon"
                  />
                </Link>
              </p>
            </div>
            <div className="clear"></div>
          </motion.article>

          {/* Blog article card */}
          <motion.article
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className=" relative blog-item-holder center-relative has-post-thumbnail"
          >
            <div className="post-thumbnail">
              <Link href="/single">
                <img src={img03.src} alt="" />
              </Link>
            </div>
            <div className="entry-holder">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Architecture</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="entry-title">
                <Link href="/single">
                  Connection of paper and <i>web makes</i>
                </Link>
              </h2>
              <div className="excerpt">
                <p>
                  The expense windows adapted sir. Wrong widen drawn ample eat
                  off doors offending the
                </p>
              </div>
              <p className="read-more-arrow">
                <Link href="/single">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="article-card-icon"
                  />
                </Link>
              </p>
            </div>
            <div className="clear"></div>
          </motion.article>

          {/* Blog article card */}
          <motion.article
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className=" relative blog-item-holder center-relative has-post-thumbnail"
          >
            <div className="post-thumbnail">
              <Link href="/single">
                <img src={img04.src} alt="" />
              </Link>
            </div>
            <div className="entry-holder">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <a href="#">Handmade</a>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="entry-title">
                <Link href="/single">
                  Design <i>crafting ideas</i> digital web
                </Link>
              </h2>
              <div className="excerpt">
                <p>
                  Remarkably solid mean them very seen she she use totally
                  written the observe pressed
                </p>
              </div>
              <p className="read-more-arrow">
                <Link href="/single">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="article-card-icon"
                  />
                </Link>
              </p>
            </div>
            <div className="clear"></div>
          </motion.article>

          {/* Items that are hidden and appears when clicking load more button */}
          {loadedAll && (
            <>
              {/* Blog article card */}
              <motion.article
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className=" relative blog-item-holder center-relative has-post-thumbnail"
              >
                <div className="post-thumbnail">
                  <Link href="/single">
                    <img src={img05.src} alt="" />
                  </Link>
                </div>
                <div className="entry-holder">
                  <div className="entry-info">
                    <div className="cat-links">
                      <ul>
                        <li>
                          <Link href="">Architecture</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h2 className="entry-title">
                    <Link href="/single">
                      Fresh born ideas <i>growing</i> every day
                    </Link>
                  </h2>
                  <div className="excerpt">
                    <p>
                      The weeks are ham asked jokes. Neglected per made shy nay
                      concluded. Not mile draw plan
                    </p>
                  </div>
                  <p className="read-more-arrow">
                    <Link href="/single">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="article-card-icon"
                      />
                    </Link>
                  </p>
                </div>
                <div className="clear"></div>
              </motion.article>
            </>
          )}
        </div>
        <div className="clear"></div>
        {/* Loading more articles button */}
        <div className="block center-relative center-text more-posts-index-holder">
          {!loadedAll ? (
            <button className="more-posts" onClick={handleLoadAll}>
              LOAD MORE
            </button>
          ) : (
            <button className="no-more-posts">NO MORE</button>
          )}
        </div>
        <div className="clear"></div>
      </div>
    </main>
  );
}

export default Home;
