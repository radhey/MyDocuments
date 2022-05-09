var obj = {
  name: "jogn",
  age: 20,
  address: {
    houseNo: 101,
    street: "4th cross",
    city: "Bangalore",
  },
  contact: {
    ph1: 23412342134,
    ph2: 34523452345,
  },
  company: "shell",
};

var arr = [1, 2, 3];
arr.sumAll(); // 6

arr = [1, 2, 3, 4];
arr.sumAll(); // 10

var v = 1;
var f1 = function () {
  console.log(v);
};
var f2 = function () {
  var v = 2;
  f1();
};
f2();

//codesandbox.io/s/jovial-hopper-y60hu?file=/src/App.js
//api js
https: export function getExpenseApi() {
  var expenses = [
    {
      id: 1,
      date: "2020-11-15T18:30:00.000Z",
      exp_name: "bus_ticket",
      amount: 132,
      type: "transport",
    },
    {
      id: 2,
      date: "2020-11-16T18:30:00.000Z",
      exp_name: "lunch",
      amount: 200,
      type: "food",
    },
    {
      id: 3,
      date: "2020-11-16T18:30:00.000Z",
      exp_name: "petrol",
      amount: 500,
      type: "transport",
    },
    {
      id: 4,
      date: "2020-11-17T18:30:00.000Z",
      exp_name: "lunch",
      amount: 100,
      type: "food",
    },
    {
      id: 5,
      date: "2020-11-18T18:30:00.000Z",
      exp_name: "medicine",
      amount: 125,
      type: "health",
    },
    {
      id: 6,
      date: "2020-11-19T18:30:00.000Z",
      exp_name: "breakfast",
      amount: 90,
      type: "food",
    },
    {
      id: 7,
      date: "2020-11-19T18:30:00.000Z",
      exp_name: "health_Drink",
      amount: 90,
      type: "health",
    },
    {
      id: 8,
      date: "2020-11-20T18:30:00.000Z",
      exp_name: "snacks",
      amount: 40,
      type: "food",
    },
    {
      id: 9,
      date: "2020-11-20T18:30:00.000Z",
      exp_name: "guitar_wire",
      amount: 799,
      type: "entertainment",
    },
    {
      id: 10,
      date: "2020-11-21T18:30:00.000Z",
      exp_name: "shoes",
      amount: 1600,
      type: "cloths",
    },
    {
      id: 12,
      date: "2020-11-21T18:30:00.000Z",
      exp_name: "jeans",
      amount: 2100,
      type: "cloths",
    },
    {
      id: 13,
      date: "2020-11-21T18:30:00.000Z",
      exp_name: "icecream",
      amount: 149,
      type: "food",
    },
    {
      id: 14,
      date: "2020-11-21T18:30:00.000Z",
      exp_name: "movie_ticket",
      amount: 350,
      type: "entertainment",
    },
    {
      id: 15,
      date: "2020-11-22T18:30:00.000Z",
      exp_name: "petrol",
      amount: 20,
      type: "transport",
    },
    {
      id: 16,
      date: "2020-11-23T18:30:00.000Z",
      exp_name: "breakfast",
      amount: 90,
      type: "food",
    },
    {
      id: 17,
      date: "2020-11-23T18:30:00.000Z",
      exp_name: "lunch",
      amount: 190,
      type: "food",
    },
    {
      id: 18,
      date: "2020-11-23T18:30:00.000Z",
      exp_name: "bike_parking",
      amount: 190,
      type: "transport",
    },
    {
      id: 19,
      date: "2020-11-24T18:30:00.000Z",
      exp_name: "tea",
      amount: 40,
      type: "food",
    },
    {
      id: 20,
      date: "2020-11-25T18:30:00.000Z",
      exp_name: "ola_cab",
      amount: 80,
      type: "transport",
    },
    {
      id: 21,
      date: "2020-11-26T18:30:00.000Z",
      exp_name: "nariyal_pani",
      amount: 35,
      type: "food",
    },
    {
      id: 22,
      date: "2020-11-27T18:30:00.000Z",
      exp_name: "medicine",
      amount: 110,
      type: "health",
    },
    {
      id: 23,
      date: "2020-11-28T18:30:00.000Z",
      exp_name: "snacks",
      amount: 60,
      type: "food",
    },
    {
      id: 24,
      date: "2020-11-29T18:30:00.000Z",
      exp_name: "bike_parking",
      amount: 70,
      type: "transport",
    },
    {
      id: 25,
      date: "2020-11-30T18:30:00.000Z",
      exp_name: "lunch",
      amount: 90,
      type: "food",
    },
  ];
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(expenses);
    }, 3000);
  });
}
//App.js

import React from "react";
import { getExpenseApi } from "./api";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>Aggregated Expenses</h3>
      <div className="tile">
        {/*
            Placeholder 1
        */}
      </div>

      <div>
        <div className="filter-label">filter expense List</div>
        <input className="input" type="text" placeholder="search expense" />
      </div>

      <h3>Expense List</h3>
      <div className="tile">
        {/* 
            Placeholder 2
        */}
      </div>
    </div>
  );
}

//Expenselist Item.js
import React from "react";
import "./styles.css";

export const ExpenseListItem = () => {
  return (
    <div className="list-item">
      <p>expense item</p>
    </div>
  );
};

//style.css
// .App {
//     font-family: sans-serif;
//     padding: 10px;
//   }
//   .list-item {
//     margin-bottom: 10px;
//     border-bottom: 1px solid #ddd;
//   }
//   .tile {
//     border: 1px solid #efefef;
//     background: #efefef;
//     padding: 20px 20px;
//     margin: 20px 0;
//   }
//   .filter-label {
//     color: #333;
//     font-size: 12px;
//     margin-bottom: 10px;
//     font-weight: bolder;
//   }
//   .input {
//     display: block;
//     width: 200px;
//     padding: 0.3rem 0.75rem;
//     font-size: 0.8rem;
//     line-height: 1.5;
//     color: #495057;
//     background-color: #fff;
//     background-clip: padding-box;
//     border: 1px solid #ced4da;
//     border-radius: 0.25rem;
//     transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
//   }
