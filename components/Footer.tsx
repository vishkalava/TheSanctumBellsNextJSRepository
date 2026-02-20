import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content content-1170 center-relative">
        <ul className="copyright-holder">
          <li className="copyright-footer">
            {new Date(Date.now()).getFullYear()} Park Nextjs Template by{" "}
            <Link href="http://cocobasic.com">CocoBasic</Link>.
          </li>
          <li className="social-footer">
            <Link href="https://twitter.com/">Twitter</Link>
            <Link href="https://www.facebook.com/">Facebook</Link>
            <Link href="https://www.instagram.com/">Instagram</Link>
            <Link href="https://www.behance.net/">Behance</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
