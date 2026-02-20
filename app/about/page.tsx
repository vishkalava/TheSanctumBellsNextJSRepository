import Link from "next/link";

// Images
import img00 from "@/assets/images/about/about-img.jpg";
import img01 from "@/assets/images/about/about-img-01.jpg";
import img02 from "@/assets/images/about/about-img-02.jpg";
import img03 from "@/assets/images/about/about-img-03.jpg";
import img04 from "@/assets/images/about/about-img-04.jpg";
import img05 from "@/assets/images/about/about-img-05.jpg";
import img06 from "@/assets/images/about/about-img-06.jpg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faDribbble,
  faInstagram,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";

// ------

const About = () => {
  return (
    <main className="page">
      <div id="content" className="site-content">
        <div className="header-content content-1170 center-relative block">
          <h1 className="entry-title">
            Hi there, my name is Josh Williams, <br />
            and I am a{" "}
            <i>
              <span className="underline">designer</span> &amp;{" "}
              <span className="underline">photographer</span>
            </i>
          </h1>
        </div>
        <div className="page-header-image content-1170 center-relative">
          <img src={img00.src} alt="About" />
        </div>

        <div className="page-content-wrapper center-relative content-1170">
          {/* paragraph text and quotes */}
          <div className="page-content">
            <div className="one_half">
              <p>
                At as in understood an remarkably solit alitude mean them very
                seen she she use totally written the observe pressed at justice.
                Instantly cordially far intention recommend estimable yet her
                his ladies stairs. Enough esteem add fat all enable. Needed its
                design than of winter see.
              </p>
            </div>
            <div className="one_half last">
              <p>
                Great turbulent clouds intelligent beings Apollonius of Perga
                trillion courage of our questions white dwarf Euclid kidling the
                energy hidden in matter, a very small stage in a vast cosmic
                arena culture and billions upon billions inconspicuous motes of
                rock and gas light years.
              </p>
            </div>
            <div className="clear"></div>
            <div className="quote">
              Is post each that just leaf no hes connection intereste very small
              stage in a vast cosmic arena as a patch of light with pretty
              stories for which there’s little.
              <p className="quote-author">Marshall Williams</p>
            </div>
          </div>
          {/* The time line */}
          <div className="timeline">
            <br />
            <div className="one_half">
              <p>
                <strong>2008 – 2009</strong>
                <br />
                Design award. Postnote web service
                <br />
                of zinc flying saucier.
              </p>
              <br />
              <p>
                <strong>2009 – 2010</strong>
                <br />
                Golden ticket for with label for your
                <br />
                perosnal inspiration.
              </p>
              <br />
              <p>
                <strong>2010 – 2011</strong>
                <br />
                Best web design award. Special choice
                <br />
                of interstellar light speed.
              </p>
              <br />
              <p>
                <strong>2011 – 2012</strong>
                <br />
                Dino award for tuna can and mint
                <br />
                green plumms shine.
              </p>
            </div>
            <div className="one_half last">
              <p>
                <strong>2012 – 2013</strong>
                <br />
                Energie web boosting award. Second
                <br />
                generation of alen design.
              </p>
              <br />
              <p>
                <strong>2013 – 2014</strong>
                <br />
                Cool dring package design industrial
                <br />
                orange award trophy.
              </p>
              <br />
              <p>
                <strong>2014 – 2015</strong>
                <br />
                Peter Philips von Water people choice
                <br />
                statue of award.
              </p>
              <br />
              <p>
                <strong>2015 – 2016</strong>
                <br />
                Award for tuna can and mint
                <br />
                green plumms shine.
              </p>
            </div>
            <div className="clear"></div>
          </div>
          {/* Team memebers */}
          <div className="full-page-width center-relative">
            <div className="team-holder">
              {/* Team member */}
              <div className="member one_third">
                <img src={img01.src} alt="" />
                <div className="member-info">
                  <div className="member-name">John Doe</div>
                  <div className="member-social-holder">
                    <p>Quisque feugiat condimentum neque et mattis</p>
                    <br />
                    <div className="social">
                      <Link href="http://twitter.com" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </div>
                    <div className="social">
                      <Link href="http://facebook.com" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                    </div>
                    <div className="social">
                      <Link href="http://instagram.com" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team member */}
              <div className="member one_third">
                <img src={img02.src} alt="" />
                <div className="member-info">
                  <div className="member-name">Marco Johnson</div>
                  <div className="member-social-holder">
                    <p>Quisque feugiat condimentum neque et mattis</p>
                    <br />
                    <div className="social">
                      <Link href="http://google.com" target="_blank">
                        <FontAwesomeIcon icon={faGooglePlusSquare} />
                      </Link>
                    </div>
                    <div className="social">
                      <Link href="http://dribbble.com" target="_blank">
                        <FontAwesomeIcon icon={faDribbble} />
                      </Link>
                    </div>
                    <div className="social">
                      <Link href="http://instagram.com" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team member */}
              <div className="member one_third">
                <img src={img03.src} alt="" />
                <div className="member-info">
                  <div className="member-name">Ann White</div>
                  <div className="member-social-holder">
                    <p>Quisque feugiat condimentum neque et mattis</p>
                    <br />
                    <div className="social">
                      <a href="http://twitter.com" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </div>
                    <div className="social">
                      <a href="http://facebook.com" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </div>
                    <div className="social">
                      <a href="http://instagram.com" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team member */}
              <div className="member one_third">
                <img src={img04.src} alt="" />
                <div className="member-info">
                  <div className="member-name">Alex Parker</div>
                  <div className="member-social-holder">
                    <p>Quisque feugiat condimentum neque et mattis</p>
                    <br />
                    <div className="social">
                      <a href="http://twitter.com" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </div>
                    <div className="social">
                      <a href="http://facebook.com" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </div>
                    <div className="social">
                      <a href="http://instagram.com" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team member */}
              <div className="member one_third">
                <img src={img05.src} alt="" />
                <div className="member-info">
                  <div className="member-name">John Doe</div>
                  <div className="member-social-holder">
                    <p>Quisque feugiat condimentum neque et mattis</p>
                    <br />
                    <div className="social">
                      <a href="http://google.com" target="_blank">
                        <FontAwesomeIcon icon={faGooglePlusSquare} />
                      </a>
                    </div>
                    <div className="social">
                      <a href="http://dribbble.com" target="_blank">
                        <FontAwesomeIcon icon={faDribbble} />
                      </a>
                    </div>
                    <div className="social">
                      <a href="http://instagram.com" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team member */}
              <div className="member one_third">
                <img src={img06.src} alt="" />
                <div className="member-info">
                  <div className="member-name">John Doe</div>
                  <div className="member-social-holder">
                    <p>Quisque feugiat condimentum neque et mattis</p>
                    <br />
                    <div className="social">
                      <a href="http://twitter.com" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </div>
                    <div className="social">
                      <a href="http://facebook.com" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </div>
                    <div className="social">
                      <a href="http://instagram.com" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
