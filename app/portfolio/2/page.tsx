"use client";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import img01 from "@/assets/images/portfolio/2/img-01.jpg";
import img02 from "@/assets/images/portfolio/2/img-02.jpg";
import img03 from "@/assets/images/portfolio/2/img-03.jpg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// ----------------

const PortfolioItem2 = () => {
  return (
    <main className="single single-portfolio">
      <div id="content" className="site-content">
        <div className="center-relative content-1170">
          <div className="entry-content">
            <div className="content-wrapper" style={{ paddingTop: "0px" }}>
              <h1 className="center-text">Handmade</h1>
              <p className="center-text">
                Because they are hard, because that goal will serve to organize
                and measure the best of our energies and skills, because that
                challenge is one that we are willing to accept, one we are
                unwilling to postpone and one.
              </p>
            </div>
            <div className="full-portfolio-width">
              {/* Image slider */}
              <div className="image-slider-wrapper relative">
                <Swiper
                  id="slider1"
                  className="slider image-slider slider"
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  effect="fade"
                  fadeEffect={{
                    crossFade: true,
                  }}
                  autoplay
                  speed={750}
                  allowTouchMove={false}
                  modules={[Pagination, EffectFade, Autoplay]}
                >
                  <SwiperSlide className="slick-slide">
                    <img src={img01.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slick-slide">
                    <img src={img02.src} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slick-slide">
                    <img src={img03.src} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="content-wrapper">
              <p className="center-text">
                Because they are hard, because that goal will serve to organize
                and measure the best of our energies and skills, because that
                challenge is one that we are willing to accept, one we are
                unwilling to postpone and one.
              </p>
            </div>
            <div className="full-portfolio-width">
              {/* Youtube video */}
              <div className="video-framer">
                <iframe
                  src="https://www.youtube.com/embed/GcMiYI1gWD4?si=bzA-ZiTZV1wqWRIz"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <br />
          </div>
          <div className="clear"></div>
        </div>
      </div>
      {/* Navigation links */}
      <div className="nav-links">
        <div className="content-570 center-relative">
          <div className="nav-previous">
            <Link href="/portfolio/3" rel="prev">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />

              <p>Wooden Desk</p>
            </Link>
            <div className="clear"></div>
            <div className="cat-links">
              <ul>
                <li>
                  <Link href="">Art</Link>
                </li>
                <li>
                  <Link href="">Elements</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-next">
            <Link href="/portfolio/1" rel="next">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>Smart Watch</p>
            </Link>
            <div className="clear"></div>
            <div className="cat-links">
              <ul>
                <li>
                  <Link href="">App</Link>
                </li>
                <li>
                  <Link href="">Hardware</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioItem2;
