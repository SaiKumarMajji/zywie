import React, { useState } from "react";
import "./App.css";
import NewEnrollmentForm from "./newEnrollment";
import { MdBoy } from "react-icons/md";

export default function App() {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const handleNewEnrollmentClick = () => {
    setShowEnrollmentForm(true);
  };

  const handleCompletedClick = () => {
    setShowEnrollmentForm(false);
  };
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <h1>Zywie</h1>
          <div className="details">
            <button style={{ backgroundColor: "gray" }}>Enrollments</button>
            <button>Events</button>
            <button>Reports</button>
          </div>
        </div>
        <div className="acc">
          <div className="account-logout">
            <p>Account</p>
            <p>Logout</p>
          </div>
          <p className="greet">Welcome Johana Carvajal</p>
        </div>
      </div>

      {/* <div className="enroll-details">
        <h3>Enrollment Management</h3>

        <div className="btn-details">
          <button>Active</button>
          <button onClick={handleCompletedClick}>Completed</button>
          <button onClick={handleNewEnrollmentClick}>New Enrollment</button>
        </div>
      </div>

      <div className="filters">
        <p>Filters:none</p>

        <p>^</p>
      </div>

      <div className="table">
        <table>
          <tr>
            <th>Patient Name</th>
            <th>Status</th>
            <th>Enrollment Type</th>
            <th>Device ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Remaining Time</th>
            <th>Provider</th>
            <th>Location</th>
            <th>Primary Indication</th>
          </tr>

          <tr>
            <td>PLANTER,ELMORE</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202309/C881508</td>
            <td>
              4/26/2024 <br />
              1:30PM
            </td>
            <td>
              5/26/2024 <br />
              1:30PM
            </td>
            <td>27 Days</td>
            <td>Suvarchala Dara</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>RIVERA, LUIS</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202345/C9B6357</td>
            <td>
              4/16/2024 <br />
              3:27PM
            </td>
            <td>
              5/16/2024 <br />
              3:27PM
            </td>
            <td>17 Days</td>
            <td>Suvarchala Dara</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>HERNANDEZ,EVON</td>
            <td>Active</td>
            <td>14 Day MCT</td>
            <td>202345/C9B6370</td>
            <td>
              4/16/2024 <br />
              10:11AM
            </td>
            <td>
              4/30/2024 <br />
              10:11AM
            </td>
            <td>0 Days</td>
            <td>Amitra Caines</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>PRICE, JUDITH</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202345/C9B6339</td>
            <td>
              4/11/2024 <br />
              10:36AM
            </td>
            <td>
              5/11/2024 <br />
              10:36AM
            </td>
            <td>11 Days</td>
            <td>Amitra Caines</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>

          <tr>
            <td>TOLMAN, KEVIN</td>
            <td>Active</td>
            <td>30 Day MCT</td>
            <td>202311/C882541</td>
            <td>
              4/10/2024 <br />
              5:09pM
            </td>
            <td>
              5/10/2024 <br />
              5:09PM
            </td>
            <td>11 Days</td>
            <td>Suvarchala Dara</td>
            <td>
              Cardiovascular Institute of Orlando-
              <br />
              Orlando
            </td>
            <td>Palpitations</td>
          </tr>
        </table>
      </div>

      <div className="pagination">
        <select className="items">
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>

        <p>items per page</p>
        <p>Total items: 5</p>

        <div className="buttons">
          <button>&lt;</button>
          <button>1</button>
          <button>&gt;</button>
        </div>
      </div> */}

      {showEnrollmentForm ? (
        <NewEnrollmentForm />
      ) : (
        <div>
          <div className="enroll-details">
            <h3>Enrollment Management</h3>

            <div className="btn-details">
              <button>Active</button>
              <button onClick={handleCompletedClick}>Completed</button>
              <button
                style={{ cursor: "pointer" }}
                onClick={handleNewEnrollmentClick}
              >
                New Enrollment
              </button>
            </div>
          </div>
          <hr style={{ marginLeft: "35px", marginRight: "50px" }} />

          <div className="filters">
            <p>Filters:none</p>

            <p>^</p>
          </div>

          <div className="table">
            <table>
              <tr className="bg-color">
                <th>Patient Name</th>
                <th>Status</th>
                <th>Enrollment Type</th>
                <th>Device ID</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Remaining Time</th>
                <th>Provider</th>
                <th>Location</th>
                <th>Primary Indication</th>
              </tr>

              <tr className="table-bg">
                {/* <MdBoy /> */}
                <td>PLANTER,ELMORE</td>
                <td>Active</td>
                <td>30 Day MCT</td>
                <td>202309/C881508</td>
                <td>
                  4/26/2024 <br />
                  1:30PM
                </td>
                <td>
                  5/26/2024 <br />
                  1:30PM
                </td>
                <td>27 Days</td>
                <td>Suvarchala Dara</td>
                <td>
                  Cardiovascular <br /> Institute of Orlando-
                  <br />
                  Orlando
                </td>
                <td>Palpitations</td>
              </tr>

              <tr>
                <td>RIVERA, LUIS</td>
                <td>Active</td>
                <td>30 Day MCT</td>
                <td>202345/C9B6357</td>
                <td>
                  4/16/2024 <br />
                  3:27PM
                </td>
                <td>
                  5/16/2024 <br />
                  3:27PM
                </td>
                <td>17 Days</td>
                <td>Suvarchala Dara</td>
                <td>
                  Cardiovascular <br /> Institute of Orlando-
                  <br />
                  Orlando
                </td>
                <td>Palpitations</td>
              </tr>

              <tr className="table-bg">
                <td>HERNANDEZ,EVON</td>
                <td>Active</td>
                <td>14 Day MCT</td>
                <td>202345/C9B6370</td>
                <td>
                  4/16/2024 <br />
                  10:11AM
                </td>
                <td>
                  4/30/2024 <br />
                  10:11AM
                </td>
                <td>0 Days</td>
                <td>Amitra Caines</td>
                <td>
                  Cardiovascular <br /> Institute of Orlando-
                  <br />
                  Orlando
                </td>
                <td>Palpitations</td>
              </tr>

              <tr>
                <td>PRICE, JUDITH</td>
                <td>Active</td>
                <td>30 Day MCT</td>
                <td>202345/C9B6339</td>
                <td>
                  4/11/2024 <br />
                  10:36AM
                </td>
                <td>
                  5/11/2024 <br />
                  10:36AM
                </td>
                <td>11 Days</td>
                <td>Amitra Caines</td>
                <td>
                  Cardiovascular <br /> Institute of Orlando-
                  <br />
                  Orlando
                </td>
                <td>Palpitations</td>
              </tr>

              <tr className="table-bg">
                <td>TOLMAN, KEVIN</td>
                <td>Active</td>
                <td>30 Day MCT</td>
                <td>202311/C882541</td>
                <td>
                  4/10/2024 <br />
                  5:09pM
                </td>
                <td>
                  5/10/2024 <br />
                  5:09PM
                </td>
                <td>11 Days</td>
                <td>Suvarchala Dara</td>
                <td>
                  Cardiovascular <br /> Institute of Orlando-
                  <br />
                  Orlando
                </td>
                <td>Palpitations</td>
              </tr>
            </table>
          </div>

          <div className="pagination">
            <select className="items">
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>

            <p>items per page</p>
            <p>Total items: 5</p>

            <div className="buttons">
              <button>&lt;</button>
              <button>1</button>
              <button>&gt;</button>
            </div>
          </div>
        </div>
      )}

      <div className="footer">
        <footer>
          <div className="footer-details">
            <p>
              Enrollments <span>|</span>
            </p>
            <p>
              Events <span>|</span>
            </p>
            <p>Reports</p>

            <p>1-877-858-7200</p>
          </div>

          <div
            className="copy"
            style={{
              display: "flex",
              marginLeft: "50px",
              marginTop: "30px",
              fontSize: "15px",
            }}
          >
            <p>Copyright@2017 Zywie, Inc. All rights reserved.</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>System Status</p>
            <p>info@zywie.healthcare</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
