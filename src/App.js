import React, { useEffect, useState, useCallback } from "react";
import jsonp from "jsonp";
import './App.scss';
import AirLines from "./Components/AirLines";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
function App() {
  const [airlineList, setAirlineList] = useState([]);
  const [activeAlliances, setActiveAlliances] = useState([]);

  const parseWebsite = (data) => {
    let list = data.map((item) => {
      let site = item.site;

      if (site.startsWith("http")) {
        site = site.substr(8);
      }

      if (site.startsWith("www")) {
        site = site.substr(4);
      }

      if (site.includes("/")) {
        let index = site.indexOf("/");
        site = site.substring(0, index);
      }

      item.site = site;
      return item;
    });
    return list;
  };

  const fetchData = useCallback(() => {
    jsonp(
      "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
      { param: "jsonp" },
      (error, data) => {
        console.log(data)
        if (error) {
          console.log(error);
        } else {
        
          let list = parseWebsite(data);
          setAirlineList(list);
        }
      }
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let filteredAirlineList;

  if (activeAlliances.length === 0) {
    filteredAirlineList = airlineList;
  } else {
    filteredAirlineList = airlineList.filter((item) => {
      return activeAlliances.includes(item.alliance);
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <h1 className="title">Airlines</h1>
        <Filter
          activeAlliances={activeAlliances}
          onAllianceCheck={(alliances) => setActiveAlliances(alliances)}
        />
        <div className="airlines">
          {filteredAirlineList.map((item, id) => (
            <AirLines
              key={id}
              title={item.name}
              img_src={item.logoURL}
              subtitle={item.alliance}
              phone={item.phone}
              website={item.site}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
