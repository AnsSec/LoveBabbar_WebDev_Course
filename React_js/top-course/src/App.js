import React, { useEffect, useState } from "react";
import NavBar from "./component/NavBar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./component/Spinner";
import "./index.css";

const App = () => {
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    fetch(apiUrl)
      .then((data) => data.json())
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        toast.error(`somthing is wrong`);
        console.log(error);
      });
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
      <div>
        <NavBar />
      </div>
      <div className="">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
