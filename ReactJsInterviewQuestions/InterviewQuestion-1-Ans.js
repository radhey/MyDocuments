import React, { useState } from "react";
import axios from "axios";
export const App = () => {
  const [city, setCity] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>City:</label>
        <select name="city" onChange={(e) => setCity(e.target.value)}>
          <option value="HYD">Hydrabad</option>
          <option value="PUNE">PUNE</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

//for fetching studentdetail by passing cityname
const citylist = [
  {
    fname: "radhey1",
    lname: "yadav1",
    schoolname: "ABC1",
    city: HYD,
  },
  {
    fname: "radhey2",
    lname: "yadav2",
    schoolname: "ABC2",
    city: PUNE,
  },
  {
    fname: "radhey3",
    lname: "yadav3",
    schoolname: "ABC3",
    city: HYD,
  },
  {
    fname: "radhey",
    lname: "yadav",
    schoolname: "ABC",
    city: PUNE,
  },
];

function CityList() {
  const [citylist, setCityList] = useState([]);
  useEffect(async () => {
    const result = await axios("https://getStudentDetails/search?city=HYD");
    setCityList(result.citylist);
  });

  return (
    <table>
      {citylist.name.map((item) => (
        <tr>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.schoolname}</td>
        </tr>
      ))}
    </table>
  );
}
