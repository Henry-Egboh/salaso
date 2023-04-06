import { FaAngleDown, FaBell, FaChevronLeft } from "react-icons/fa";
import proPic from "../Assets/edward-cisneros-_H6wpor9mjs-unsplash.jpg";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ReactVideo from "./ReactVideo";
import Tables from "./Tables";
import Activity from "./Activity";
import SideBar from "./SideBar";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;

  h4,
  p {
    margin-bottom: 0rem;
  }

  .asset-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0rem 1rem;
  }

  .asset-status div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0rem 0.2rem;
  }

  .green-ball-small p {
    color: rgb(21, 110, 21);
    font-weight: 500;
  }
`;

const Home = () => {
  const [name, setName] = useState({
    uName: "Werner Jopper",
    email: "jopper@gmail.com",
  });
  return (
    <header>
      <main className="main-grid">
        {/* ROW 1 */}
        <nav className="row-1">
          <div className="flex-1">
            <h2>
              <span className="text-danger fw-bold">S</span>alaso
            </h2>
          </div>
          <div className="flex-2">
            <FaBell className="fs-4" />
            <img alt="pro-pic" src={proPic} className="pro-img" />
            <div className="pro-name">
              <div>{name.uName}</div>
              <div style={{ fontSize: "0.8rem" }}>{name.email}</div>
            </div>
            <FaAngleDown className="fs-4" />
          </div>
        </nav>
        {/* ROW 2 */}
        <main className="row-2">
          {/* sidebar */}
          <SideBar />
          <section className="grid-3">
            {/* HEADER WITH OIL ASSET */}
            <Div>
              <div className="d-flex gap-3 align-items-center">
                <span className="badge text-bg-danger fs-6 p-2">
                  <FaChevronLeft className="me-2" />
                  Back
                </span>
                <h4>Oil Well Head Asset 1</h4>
              </div>
              <div className="asset-status">
                <p>Asset Status</p>
                <div>
                  <div className="green-ball-small"></div>
                  <p>Normal</p>
                </div>
              </div>
            </Div>
            {/* ACTIVITY AND VIDEO SECTION */}
            <div className="activity-video">
              {/* ACTIVITY */}
              <div className="activity-wrapper">
                <Activity />
              </div>
              {/* REACT VIDEO */}
              <div className="video">
                <div className="d-flex justify-content-between px-4 py-2">
                  <h4 style={{fontWeight: '500'}}>Streaming Now!</h4>
                  <FaAngleDown className="fs-4" />
                </div>
                <ReactVideo />
              </div>
            </div>
          </section>
        </main>
        {/* ROW 3 */}
        <main className="row-3">
          <div></div>
          <div className="d-flex gap-4">
            <Button variant="light">Activity Log</Button>
            <Button variant="info" className="text-white">
              Security Log
            </Button>
          </div>
        </main>
        {/* ROW 4 */}
        <main className="row-4">
          <div></div>
          {/* TABLES */}
          <div className="tables">
            <Tables />
          </div>
        </main>
      </main>
    </header>
  );
};

export default Home;
