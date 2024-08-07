import { useState } from "react";
import axios from "axios";

import "./index.css";
import Users from "./components/Users";

function App() {
  const [searchTxt, setSearchTxt] = useState("");
  const [users, setUsers] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [isLoding, setIsLoding] = useState(false);

  const submitform = async (e) => {
    e.preventDefault();
    const trimSearchtxt = searchTxt.trim();
    if (!trimSearchtxt) {
      setEmpty(true);
      setTimeout(function () {
        setEmpty(false);
      }, 3000);
    } else {
      setIsLoding(true);
      try {
        const response = await axios(
          `https://api.github.com/search/users?q=${searchTxt}`
        );
        setSearchTxt("");
        setUsers(response.data);
        setEmpty(false);
      } finally {
        setIsLoding(false);
      }
    }
  };
  const clearform = () => {
    setUsers([]);
  };
  return (
    <section>
      <h1>GitHub</h1>
      <form onSubmit={submitform}>
        {empty && (
          <div className="emptyInput">
            <span>you can not let title empty!!!!</span>
          </div>
        )}
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          placeholder="Search User"
        />
        <button onClick={submitform}>Submit</button>
        {isLoding && <div className="spinner"></div>}
      </form>
      <Users users={users} clearform={clearform} />
    </section>
  );
}

export default App;
