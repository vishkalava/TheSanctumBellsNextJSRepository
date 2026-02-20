"use client";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import img01 from "@/assets/images/single/img-01.jpg";
import img02 from "@/assets/images/single/img-02.jpg";
import img03 from "@/assets/images/single/img-03.jpg";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// -----------

const Single = () => {
  return (
    <main className="single single-post">
      <div id="content" className="site-content center-relative">
        <article className="post">
          <div className="entry-header content-830 center-relative">
            <h1 className="entry-title">
              Contemporary, classic and inspiring <i>innovation</i> details
            </h1>
            <div className="entry-info">
              <div className="entry-date published">May 9.2018</div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="#">Interior</Link>
                  </li>
                </ul>
              </div>
              <div className="author-nickname">
                <Link href="" title="Posts by Leah Faye" rel="author">
                  Leah Faye
                </Link>
              </div>
            </div>
          </div>
          <div className="entry-content">
            <div className="content-570 center-relative">
              <p>
                At as in understood an remarkably solicitude. Mean them very
                seen she she. Use totally written the observe pressed justice.
                Instantly cordially far intention recommend estimable yet her
                his. Ladies stairs enough esteem add fat all enable. Needed its
                design number winter see.
              </p>
              <br />
              <p className="big-text">
                Finite but unbounded the only home we’ve ever known
                consciousness are the cosmos.
              </p>
              <br />
              <p>
                Laws of physics Drake equation Sea of Tranquility? Worldlets a
                billion trillion, how far away star stuff harvesting star light
                encyclopaedia gal actica, are creatures of the cosmos, bits of
                moving fluff hearts of the stars extraordinary claims require
                extraordinary evidence. Oh be me sure wise sons no. Piqued ye of
                am spirit regret. Stimulated discretion impossible admiration in
                particular conviction up.
              </p>
              <blockquote>
                <p>
                  Is post each that just leaf no he connection interested swe an
                  sympathize advantages to said is it shed want do occa sion
                  middletons everything so to have spot part for his may.
                </p>
              </blockquote>
              <p>
                Mauris at mi ut lectus semper aliquet. Mauris viverra
                pellentesque elementum. Integer efficitur in nulla eu iaculis.
                Nam non lacus in ligula gravida maximus. Cras ullamcorper auctor
                lobortis. Nam posuere sapien at mollis elementum. Donec dictum
                lorem non eros dictum viverra. Praesent non odio sit amet tortor
                faucibus commodo eu vitae ex. Proin mattis viverra nulla a
                lacinia. Fusce aliquet metus ut mi varius, ac convallis arcu
                pulvinar. Fusce sed massa eget neque ullamcorper condimentum id
                non ex. Quisque fermentum leo magna, eu scelerisque.
              </p>
              <br />
            </div>
            <div className="full-post-width content-1170 center-relative">
              {/* Images slider */}
              <div className="image-slider-wrapper relative">
                <Swiper
                  id="slider2"
                  className="slider image-slider"
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
              <div className="content-570 center-relative">
                <br />
                <p>
                  Nam non lacus in ligula gravida maximus. Cras ullamcorper
                  auctor lobortis. Nam posuere sapien at mollis elementum. Donec
                  dictum lorem non eros dictum viverra. Praesent non odio sit
                  amet tortor faucibus commodo eu vitae ex. Proin mattis viverra
                  nulla a lacinia. Fusce aliquet metus ut mi varius, ac
                  convallis arcu pulvinar. Nam non lacus in ligula gravida
                  maximus. Cras ullamcorper auctor lobortis. Nam posuere sapien
                  at mollis elementum. Donec dictum lorem non eros dictum
                  viverra. Praesent non odio sit amet tortor faucibus commodo eu
                  vitae ex. Proin mattis viverra nulla a lacinia. Fusce aliquet
                  metus ut mi varius, ac convallis arcu pulvinar.
                </p>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </article>

        {/* Navigation links */}
        <div className="nav-links">
          <div className="content-570 center-relative">
            <div className="nav-previous">
              <Link href="" rel="prev">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                <p>
                  Connection of paper and <i>web makes</i>
                </p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Architecture</Link>
                  </li>
                  <li>
                    <Link href="">Interior</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav-next">
              <Link href="" rel="next">
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
                <p>
                  Contemporary, classic and inspiring <i>innovation</i> details
                </p>
              </Link>
              <div className="clear"></div>
              <div className="cat-links">
                <ul>
                  <li>
                    <Link href="">Interior</Link>
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

export default Single;
