import React from "react";
import "./Board.css";
import Column from "../Column/Column.jsx";
import backlogLogo from "../../images/backlog.png";
import cancelledLogo from "../../images/cancelled.png";
import doneLogo from "../../images/done.png";
import highLogo from "../../images/high.png";
import inProgressLogo from "../../images/in_progress.png";
import lowLogo from "../../images/low.png";
import mediumLogo from "../../images/medium.png";
import noPriorityLogo from "../../images/no_priority.png";
import todoLogo from "../../images/todo.png";
import urgentLogo from "../../images/urgent.png";

function Board({ grouping, ordering, ticketData, userData }) {
  const priorities = [
    {
      id: 1,
      value: 0,
      name: "No priority",
      icon: noPriorityLogo,
    },
    {
      id: 2,
      value: 4,
      name: "Urgent",
      icon: urgentLogo,
    },
    {
      id: 3,
      value: 3,
      name: "High",
      icon: highLogo,
    },
    {
      id: 4,
      value: 2,
      name: "Medium",
      icon: mediumLogo,
    },
    {
      id: 5,
      value: 1,
      name: "Low",
      icon: lowLogo,
    },
  ];

  const status = [
    {
      id: 1,
      value: "Backlog",
      name: "Backlog",
      icon: backlogLogo,
    },
    {
      id: 2,
      value: "Todo",
      name: "Todo",
      icon: todoLogo,
    },
    {
      id: 3,
      value: "In progress",
      name: "In Progress",
      icon: inProgressLogo,
    },
    {
      id: 4,
      value: "Done",
      name: "Done",
      icon: doneLogo,
    },
    {
      id: 5,
      value: "Cancelled",
      name: "Cancelled",
      icon: cancelledLogo,
    },
  ];

  const data = ticketData.reduce((dataSoFar, curr) => {
    if (!dataSoFar[curr[grouping]]) dataSoFar[curr[grouping]] = [];
    dataSoFar[curr[grouping]].push(curr);
    return dataSoFar;
  }, {});

  function pickColor() {
    var colors = [
      "red",
      "green",
      "blue",
      "black",
      "pink",
      "orange",
      "violet",
      "darkgreen",
      "darkblue",
      "cyan",
    ];

    var random_color = colors[Math.floor(Math.random() * colors.length)];

    return random_color;
  }

  userData.forEach((ele) => {
    ele.color = pickColor();
  });

  if (grouping !== "userId") {
    var mapping = grouping === "priority" ? priorities : status;
    var extra = grouping === "priority" ? status : priorities;

    return (
      <div className="Board">
        <div className="dash-one">
          {mapping.map((ele) => (
            <Column
              key={ele.id}
              userData={userData}
              cards={data[ele.value]}
              heading={ele}
              grouping={grouping}
              ordering={ordering}
              extra={extra}
            />
          ))}
        </div>
      </div>
    );
  } else {
    var extra2 = [status, priorities];

    return (
      <div className="Board">
        <div className="dash-one">
          {userData.map((ele) => (
            <Column
              key={ele.id}
              userData={ele}
              cards={data[ele.id]}
              grouping={grouping}
              ordering={ordering}
              extra={extra2}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
