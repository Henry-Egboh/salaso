import { FaCentos } from "react-icons/fa";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  background-color: var(--white);
  padding: 2rem 0rem 2rem 2rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  width: 100%;

  .text-small-ball > div {
    display: flex;
    align-items: center;
    // justify-content: center;
    gap: 0rem 0.2rem;
  }

  .green-ball-small p {
    color: rgb(21, 110, 21);
    font-weight: 500;
  }

  p, h6 {
    margin-bottom: 0rem;
  }
`;

function Activity() {
  return (
    <main className="activity">
      {/* ASSET CONDITIGON AND LAST ACTIVITY */}
      <div className="condition-lastActivity d-flex gap-3">
        <Div className="asset-condition">
          <div className="green-ball-big"></div>
          <div className="text-small-ball">
            <div>
              <h6>Asset Condition</h6>
            </div>
            <div>
              <div className="green-ball-small"></div>
              <p>Normal</p>
            </div>
          </div>
        </Div>
        {/* last activity */}
        <Div className="lastActivity">
          <div className="green-ball-big"></div>
          <div className="text-small-ball">
            <div>
              <h6>Last Activity</h6>
            </div>
            <div>
              <div className="green-ball-small"></div>
              <p>Normal</p>
            </div>
          </div>
        </Div>
      </div>

      {/* BASIC INFO */}
      <div className="basic-info">
        <h4>Basic Information</h4>
        <div className="basic-info-cards-container">
          <div className="basic-info-cards">
            <p>Asset location: Tennesy</p>
          </div>
          <div className="basic-info-cards">
            <p>Asset Size: 562 mb</p>
          </div>
          <div className="basic-info-cards">
            <p>Asset Memory: 212 mb</p>
          </div>
          <div className="basic-info-cards">
            <p>Asset Genre: Drama</p>
          </div>
        </div>
      </div>

      {/* ASSET ENTRY */}
      <div className="bg-white asset-entry">
        <div className="d-flex flex-column justify-content-center gap-3">
          <h4>Asset Entry Authorization Request</h4>
          <FaCentos className="fs-2 facentos" />
          <div className="buttons d-flex gap-3">
            <Button className="btn-info">Grant Access</Button>
            <Button className="btn-danger">Deny Access</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Activity;
