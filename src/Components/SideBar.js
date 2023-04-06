import { Link } from "react-router-dom";
import { FaCentos, FaConfluence, FaDeviantart, FaDiaspora, FaPushed, FaSith } from "react-icons/fa";


export default function SideBar() {
    return (
        <aside className="aside shadow">
            <ul>
              <li>
                <Link to="/">
                  <span className="me-4">
                    <FaConfluence />
                  </span>
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="me-4">
                    <FaCentos />
                  </span>
                  New Videos
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="me-4">
                    <FaDeviantart />
                  </span>
                  Trending Now
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="me-4">
                    <FaDiaspora />
                  </span>
                  Assets
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="me-4">
                    <FaSith />
                  </span>
                  Sources
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="me-4">
                    <FaPushed />
                  </span>
                  Settings
                </Link>
              </li>
            </ul>
          </aside>
    );
}
