const walkingBtn = document.querySelector(".walking-button");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const walkingList = document.querySelector(".walking-list");
const weekList = document.querySelector(".week-list");
const weekItem_sun = document.querySelector(".sun .date");
const weekItem_mon = document.querySelector(".mon .date");
const weekItem_tue = document.querySelector(".tue .date");
const weekItem_wen = document.querySelector(".wen .date");
const weekItem_thu = document.querySelector(".thu .date");
const weekItem_fri = document.querySelector(".fri .date");
const weekItem_sat = document.querySelector(".sat .date");

let weekItem_sun_color = document.querySelector(".temp");
let weekItem_mon_color = document.querySelector(".temp");
let weekItem_tue_color = document.querySelector(".temp");
let weekItem_wen_color = document.querySelector(".temp");
let weekItem_thu_color = document.querySelector(".temp");
let weekItem_fri_color = document.querySelector(".temp");
let weekItem_sat_color = document.querySelector(".temp");
let today;

let _year; // 년도
let _month; // 월
let _date; // 날짜
let _day; // 요일
let _hour;
let _minute;

let m = 0;
let s = 0;
let mString;
let sString;

let isWalking = false;

let interval;

let items;
const onDeleteButton = (event) => {
  const li = event.target.parentNode;
  console.log(li);
  walkingList.removeChild(li);
  const cleanItems = items.filter((item) => {
    return parseInt(li.id) !== item.id;
  });
  if (cleanItems) {
    items = cleanItems;
  } else {
    items = [];
  }

  if (items) {
    localStorage.setItem("items", JSON.stringify(items));
  } else {
    localStorage.setItem("items", null);
  }
};

const loadItems = () => {
  console.log("load");
  if (localStorage.getItem("items")) {
    items = JSON.parse(localStorage.getItem("items"));
  } else {
    items = [];
  }
  for (let i in items) {
    const li = document.createElement("li");
    li.classList.add("walking-item");
    const date = document.createElement("div");
    date.classList.add("date");
    date.innerHTML = items[i].date;
    const startTime = document.createElement("div");
    startTime.classList.add("start-time");
    startTime.innerHTML = items[i].startTime;
    const walkingTime = document.createElement("div");
    walkingTime.classList.add("walking-time");
    walkingTime.innerHTML = items[i].walkingTime;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener("click", onDeleteButton);

    li.id = items[i].id;
    li.appendChild(date);
    li.appendChild(startTime);
    li.appendChild(walkingTime);
    li.appendChild(deleteBtn);
    walkingList.appendChild(li);
  }
};
const loadWeeks = () => {
  today = new Date();
  _year = today.getFullYear(); // 년도
  _month = today.getMonth() + 1; // 월
  _date = today.getDate(); // 날짜
  _day = today.getDay(); // 요일
  _hour = today.getHours();
  _minute = today.getMinutes();
  let sunDate;
  let monDate;
  let tueDate;
  let wenDate;
  let thuDate;
  let friDate;
  let satDate;
  switch (_day) {
    case 0:
      sunDate = _date;
      monDate = _date + 1;
      tueDate = _date + 2;
      wenDate = _date + 3;
      thuDate = _date + 4;
      friDate = _date + 5;
      satDate = _date + 6;

      weekItem_sun_color = document.querySelector(".sun .color");
      break;
    case 1:
      sunDate = _date + 0 - 1;
      monDate = _date + 1 - 1;
      tueDate = _date + 2 - 1;
      wenDate = _date + 3 - 1;
      thuDate = _date + 4 - 1;
      friDate = _date + 5 - 1;
      satDate = _date + 6 - 1;

      weekItem_sun_color = document.querySelector(".sun .color");
      weekItem_mon_color = document.querySelector(".mon .color");
      break;
    case 2:
      sunDate = _date + 0 - 2;
      monDate = _date + 1 - 2;
      tueDate = _date + 2 - 2;
      wenDate = _date + 3 - 2;
      thuDate = _date + 4 - 2;
      friDate = _date + 5 - 2;
      satDate = _date + 6 - 2;
      weekItem_sun_color = document.querySelector(".sun .color");
      weekItem_mon_color = document.querySelector(".mon .color");
      weekItem_tue_color = document.querySelector(".tue .color");
      break;
    case 3:
      sunDate = _date + 0 - 3;
      monDate = _date + 1 - 3;
      tueDate = _date + 2 - 3;
      wenDate = _date + 3 - 3;
      thuDate = _date + 4 - 3;
      friDate = _date + 5 - 3;
      satDate = _date + 6 - 3;
      weekItem_sun_color = document.querySelector(".sun .color");
      weekItem_mon_color = document.querySelector(".mon .color");
      weekItem_tue_color = document.querySelector(".tue .color");
      weekItem_wen_color = document.querySelector(".wen .color");
      break;
    case 4:
      sunDate = _date + 0 - 4;
      monDate = _date + 1 - 4;
      tueDate = _date + 2 - 4;
      wenDate = _date + 3 - 4;
      thuDate = _date + 4 - 4;
      friDate = _date + 5 - 4;
      satDate = _date + 6 - 4;
      weekItem_sun_color = document.querySelector(".sun .color");
      weekItem_mon_color = document.querySelector(".mon .color");
      weekItem_tue_color = document.querySelector(".tue .color");
      weekItem_wen_color = document.querySelector(".wen .color");
      weekItem_thu_color = document.querySelector(".thu .color");
      break;
    case 5:
      sunDate = _date + 0 - 5;
      monDate = _date + 1 - 5;
      tueDate = _date + 2 - 5;
      wenDate = _date + 3 - 5;
      thuDate = _date + 4 - 5;
      friDate = _date + 5 - 5;
      satDate = _date + 6 - 5;
      weekItem_sun_color = document.querySelector(".sun .color");
      weekItem_mon_color = document.querySelector(".mon .color");
      weekItem_tue_color = document.querySelector(".tue .color");
      weekItem_wen_color = document.querySelector(".wen .color");
      weekItem_thu_color = document.querySelector(".thu .color");
      weekItem_fri_color = document.querySelector(".fri .color");
      break;
    case 6:
      sunDate = _date + 0 - 6;
      monDate = _date + 1 - 6;
      tueDate = _date + 2 - 6;
      wenDate = _date + 3 - 6;
      thuDate = _date + 4 - 6;
      friDate = _date + 5 - 6;
      satDate = _date + 6 - 6;
      weekItem_sun_color = document.querySelector(".sun .color");
      weekItem_mon_color = document.querySelector(".mon .color");
      weekItem_tue_color = document.querySelector(".tue .color");
      weekItem_wen_color = document.querySelector(".wen .color");
      weekItem_thu_color = document.querySelector(".thu .color");
      weekItem_fri_color = document.querySelector(".fri .color");
      weekItem_sat_color = document.querySelector(".sat .color");
      break;
  }
  weekItem_sun.innerHTML = sunDate;
  weekItem_mon.innerHTML = monDate;
  weekItem_tue.innerHTML = tueDate;
  weekItem_wen.innerHTML = wenDate;
  weekItem_thu.innerHTML = thuDate;
  weekItem_fri.innerHTML = friDate;
  weekItem_sat.innerHTML = satDate;

  weekItem_sun_color.classList.add("none-walking");
  weekItem_mon_color.classList.add("none-walking");
  weekItem_tue_color.classList.add("none-walking");
  weekItem_wen_color.classList.add("none-walking");
  weekItem_thu_color.classList.add("none-walking");
  weekItem_fri_color.classList.add("none-walking");
  weekItem_sat_color.classList.add("none-walking");

  for (let i in items) {
    switch (Number(items[i].date.split("/")[2])) {
      case sunDate:
        weekItem_sun_color.classList.add("done-walking");
        break;
      case monDate:
        weekItem_mon_color.classList.add("done-walking");
        break;
      case tueDate:
        weekItem_tue_color.classList.add("done-walking");
        break;
      case wenDate:
        weekItem_wen_color.classList.add("done-walking");
        break;
      case thuDate:
        weekItem_thu_color.classList.add("done-walking");
        break;
      case friDate:
        weekItem_fri_color.classList.add("done-walking");
        break;
      case satDate:
        weekItem_sat_color.classList.add("done-walking");
        break;
    }
  }
};

loadItems();
loadWeeks();
const timer = () => {
  const currentDate = new Date();
  const diffMSec = currentDate.getTime() - today.getTime();
  const diffSec = Math.round(diffMSec / 1000);
  console.log(diffSec);
  m = parseInt(diffSec / 60);
  s = diffSec - m * 60;
  fillZero();
  minute.innerHTML = mString;
  second.innerHTML = sString;

  // console.log(m.toString(),":",s.toString());
};
const fillZero = () => {
  mString = m.toString().length === 1 ? "0" + m.toString() : m.toString();
  sString = s.toString().length === 1 ? "0" + s.toString() : s.toString();
};

walkingBtn.addEventListener("click", () => {
  if (!isWalking) {
    isWalking = true;
    today = new Date();
    _year = today.getFullYear(); // 년도
    _month = today.getMonth() + 1; // 월
    _date = today.getDate(); // 날짜
    _day = today.getDay(); // 요일
    _hour = today.getHours();
    _minute = today.getMinutes();
    walkingBtn.innerHTML = "끝";
    interval = setInterval(timer, 1000);
  } else {
    isWalking = false;
    walkingBtn.innerHTML = "산책";
    clearInterval(interval);
    const li = document.createElement("li");
    li.classList.add("walking-item");
    const date = document.createElement("div");
    date.classList.add("date");
    date.innerHTML = _year + "/" + _month + "/" + _date;
    const startTime = document.createElement("div");
    startTime.classList.add("start-time");
    startTime.innerHTML = _hour + ":" + _minute;
    const walkingTime = document.createElement("div");
    walkingTime.classList.add("walking-time");
    walkingTime.innerHTML = mString + ":" + sString;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener("click", onDeleteButton);

    const newId = items.length + 1;

    li.id = newId;
    li.appendChild(date);
    li.appendChild(startTime);
    li.appendChild(walkingTime);
    li.appendChild(deleteBtn);
    walkingList.appendChild(li);

    items.push({
      id: newId,
      date: _year + "/" + _month + "/" + _date,
      startTime: _hour + ":" + _minute,
      walkingTime: mString + ":" + sString,
    });

    console.log(items);
    localStorage.setItem("items", JSON.stringify(items));

    m = 0;
    s = 0;
    fillZero();
    minute.innerHTML = mString;
    second.innerHTML = sString;
  }
});
