import React, { useEffect, useState } from "react";
import NavBar from "./component/NavBar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
const App = () => {
  // const [courses,setCourses]=useState()
  useEffect(() => {
    const fetchdata = async () => {
      fetch(apiUrl)
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => toast.error("somthing is wrong"));
    };
    fetchdata();
  }, []);

  return (
    <div>
      <NavBar />
      <Filter filterData={filterData} />
      <Cards />
    </div>
  );
};

export default App;
