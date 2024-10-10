import { Link } from 'react-router-dom';
import logo from '/logo-icon.png';
const Footer = () => {
  return (
    <div className="bg-base-200 w-full mx-auto  mt-12">
      <footer className="footer  text-base-content p-10 container mx-auto">
        <aside>
          <Link to={'/'} className="flex items-center justify-center">
            <img src={logo} width={80} alt="Logo" />
            <div className="ms-2">
              <h2 className="font-bold text-xl text-orange">
                Mustafiz Foundation Inc.
              </h2>
              <p>Frontiers for Humanity</p>
            </div>
          </Link>
          <p>
            Mustafiz Foundation is a not-for-profit organization <br />
            and EIN Number: 87-2173874
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Information</h6>
          <Link to="/privacy" className="link link-hover">
            Privacy Policy
          </Link>
          <Link to="/where-we-work" className="link link-hover">
            Where We Work
          </Link>
          <Link className="link link-hover" to={'/we-follow'}>
            We Follow
          </Link>
          <Link className="link link-hover" to={'/board-of-directors'}>
            Who We Are
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Useful Links</h6>

          <a
            className="link link-hover"
            target="_blank"
            href="http://help.mustafiz.org/"
          >
            Admin Login
          </a>

          <Link to="/join-us" className="link link-hover">
            Careers
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact Us
          </Link>
          <Link to="/donate" className="link link-hover">
            Donor Help
          </Link>
        </nav>
        <div className="newsletter">
          <h6 className="footer-title">Subscribe</h6>
          <p>
            Join our mailing list to get the latest updates and news about our
            innovative programs.
          </p>
          <form className="flex flex-col md:flex-row items-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input w-full md:w-64 mb-2 md:mb-0 md:me-2 px-5 py-2"
            />
            <button className="px-5 py-2 bg-orange text-white text-xl hover:bg-black rounded-sm">
              {' '}
              <p className=""> Subscribe</p>
            </button>
          </form>
          <div>
            <h4 className="mb-2">Follow us on</h4>
            <ul className="flex gap-4 justify-center items-center">
              <li>
                <a href="" className="social-icon">
                  {' '}
                  <i className="text-xl fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="" className="social-icon">
                  {' '}
                  <i className="text-xl fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="" className="social-icon">
                  {' '}
                  <i className="text-xl fa fa-rss" />
                </a>
              </li>
              <li>
                <a href="" className="social-icon">
                  {' '}
                  <i className="text-xl fa fa-youtube" />
                </a>
              </li>
              <li>
                <a href="" className="social-icon">
                  {' '}
                  <i className="text-xl fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="" className="social-icon">
                  {' '}
                  <i className="text-xl fa fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-orange flex gap-20 py-4 text-white justify-center px-4">
        <p className="">
          © Copyright 2024 Mustafiz Foundation Inc.. All rights reserved.
        </p>

        <p>
          Developed by <Link to={'https://www.zsi.ai'}> ZSI.</Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Footer;
