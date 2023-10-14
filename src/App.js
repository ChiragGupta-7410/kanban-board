import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import DisplayButton from "./components/DisplayButton/DisplayButton";
import getData from "./services/API.js";

function App() {
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const [userData, setUserData] = useState(null);
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    var data = window.localStorage.getItem("grouping");
    if (data !== null) setGrouping(JSON.parse(data));

    data = window.localStorage.getItem("ordering");
    if (data !== null) setOrdering(JSON.parse(data));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { tickets, users } = await getData();
      setTicketData(tickets);
      setUserData(users);
    };
    fetchData();
    window.localStorage.setItem("grouping", JSON.stringify(grouping));
    window.localStorage.setItem("ordering", JSON.stringify(ordering));
  }, [grouping, ordering]);

  return (
    <div className="App">
      <DisplayButton
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      {ticketData && (
        <Board
          grouping={grouping}
          ordering={ordering}
          ticketData={ticketData}
          userData={userData}
        />
      )}
    </div>
  );
}

export default App;
