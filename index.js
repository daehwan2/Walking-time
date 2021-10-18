const walkingBtn = document.querySelector('.walking-button');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const ol = document.querySelector('ol');
let today = new Date();   

let _year = today.getFullYear(); // 년도
let _month = today.getMonth() + 1;  // 월
let _date = today.getDate();  // 날짜
let _day = today.getDay();  // 요일
let _hour = today.getHours();
let _minute = today.getMinutes();

let m=0;
let s= 0;
let mString;
let sString;

let isWalking=false;

let interval;

let items;
if(localStorage.getItem('items')){
    items=JSON.parse(localStorage.getItem('items'));
}else{
    items=[];
}
const timer = ()=>{
    s++;
    if(s === 60){
        m++;
        s=0;
    }
    fillZero();
    minute.innerHTML=mString;
    second.innerHTML=sString;

    // console.log(m.toString(),":",s.toString());
}
const fillZero = ()=>{
    mString= m.toString().length===1 ?"0"+m.toString():m.toString();
    sString= s.toString().length===1 ?"0"+s.toString():s.toString();
}

for(let i in items){
    const li = document.createElement("li");
        li.classList.add("working-item");
        const date = document.createElement("div");
        date.classList.add("date");
        date.innerHTML=items[i].date;
        const startTime = document.createElement("div");
        startTime.classList.add("start-time");
        startTime.innerHTML = items[i].startTime;
        const workingTime = document.createElement("div");
        workingTime.classList.add("working-time");
        workingTime.innerHTML = items[i].workingTime;
        li.appendChild(date);
        li.appendChild(startTime);
        li.appendChild(workingTime);
        ol.appendChild(li);
}
walkingBtn.addEventListener('click',()=>{
    if(!isWalking){
        isWalking=true;
        walkingBtn.innerHTML="끝";
        interval = setInterval(timer,1000);
        
    }else{
        isWalking=false;
        walkingBtn.innerHTML="산책";
        clearInterval(interval);
        const li = document.createElement("li");
        li.classList.add("working-item");
        const date = document.createElement("div");
        date.classList.add("date");
        date.innerHTML=_year+"/"+_month+"/"+_date;
        const startTime = document.createElement("div");
        startTime.classList.add("start-time");
        startTime.innerHTML = _hour+":"+_minute;
        const workingTime = document.createElement("div");
        workingTime.classList.add("working-time");
        workingTime.innerHTML = mString+":"+sString;
        li.appendChild(date);
        li.appendChild(startTime);
        li.appendChild(workingTime);
        ol.appendChild(li);

        items.push(
            {date:_year+"/"+_month+"/"+_date,
            startTime:_hour+":"+_minute,
            workingTime:mString+":"+sString,
        });

        console.log(items);
        localStorage.setItem('items',JSON.stringify(items));

        m=0;s=0;
        fillZero();
        minute.innerHTML=mString;
        second.innerHTML=sString;
    }
    
})
