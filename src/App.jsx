import "./App.css";
import React, { useState } from "react";
import Appbar from "./Components/Appbar/Appbar.jsx";
import SizedBox from "./Components/SizedBox.jsx";
import { data } from "./data/sample.js";
import "./Components/table.css";

function App() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsSearching(true);
      setIsLoading(false);
    }, 5000);
  };

  return (
    <>
      <div
        className="p-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Appbar />
      </div>

      {/* the body */}
      <div
        className="d-flex justify-content-center"
        style={{ position: "relative", minHeight: " 90vh" }}
      >
        {/* background decorations */}
        <div style={{ position: "absolute", zIndex: 1 }}>
          <img
            src="/src/assets/BGtext.png"
            class="BGtext"
            alt="Ecclesia"
            style={{ marginTop: "1vh", height: "220px", opacity: 0.3 }}
          />

          <img
            class="w-100"
            style={{
              opacity: 0.5,
              paddingLeft: "80vw",
              transform: "scaleX(-1)",
            }}
            src="/src/assets/Dbg.png"
            className="BGtext"
            alt="Ecclesia"
          />
        </div>

        {/* main body of the hero page */}

        <div
          className="responsive-section center"
          style={{ position: "absolute", zIndex: 2 }}
        >
          <section>
            <div>
              <h1> Welcome to Ecclesia </h1>
              <b class="">
                <h5>
                  Store, access, and manage your personal and parish information
                  securely and conveniently in one centralized platform.{" "}
                </h5>
              </b>
              <p>Search by Name or Parish</p>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="search-container w-100"
                placeholder="Search..."
                style={{ borderRadius: "10px", height: 50 }}
              />
              <button
                class="button"
                style={{ margin: "10px" }}
                onClick={handleSearch}
              >
                Search
              </button>{" "}
              {/* Add margin */}
            </div>
          </section>

          <SizedBox width="200px" height="200px" />
          

          {/* Second section content the result of the search */}

          <div style={{ minHeight: "100px" }}>
            {isLoading ? (
            
                <div className="h3">
                  Searching Through Decades of Documents...
                </div>
         
            ) : isSearching ? (
              <section id="results">
                <div className="table-container">
                  <div className="table-container">
                    <table className="table">
                      <thead className="thead">
                        <tr>
                          <th className="th">First Name</th>
                          <th className="th">Last Name</th>
                          <th className="th">Middle Name</th>
                          <th className="th">Gender</th>
                          <th className="th">Age</th>
                          <th className="th">Church</th>
                          <th className="th">City</th>
                          <th className="th">Country</th>
                        </tr>
                      </thead>
                      <tbody className="tbody">
                        {data
                          .filter((item) => {
                            return search.toLowerCase() === ""
                              ? item
                              : item.first_name
                                  .toLowerCase()
                                  .includes(search.toLowerCase()) ||
                                  item.last_name
                                    .toLowerCase()
                                    .includes(search.toLowerCase());
                          })
                          .map((item, index) => (
                            <tr key={index} className="tr">
                              <td className="td">{item.first_name}</td>
                              <td className="td">{item.last_name}</td>
                              <td className="td">{item.first_name}</td>
                              <td className="td">{item.gender}</td>
                              <td className="td">{item.age}</td>
                              <td className="td">{item.church}</td>{" "}
                              <td className="td">{item.city}</td>
                              <td className="td">{item.country}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
