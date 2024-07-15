
const menuToggle = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.off-screen-menu');
menuToggle.addEventListener('click', function () {
navLinks.classList.toggle('active');
menuToggle.classList.toggle('active');
});
// section section-four

function show_data() {
  
  for(const sp of load_more){
    // p.innerText = "load_more";
  
    sp.addEventListener("click", () => {
      read_more.innerText = `• They can make better decisions regarding their daily activities with the aid of forecasts along
      with additional weather-related data.`
      let p = load_more;
      p.innerText = "minimize";
      // for(s of sp ){
      //   s.addEventListener("click", () => {
      //     console.log("hi")
      //     sp.innerText = "load_more";
      //     read_more.innerText = "";
      //   })

      // }
      minimize(p);
      show_data();
    
  })
  }
}
function minimize(p)
{
  for(const st of p)
  st.addEventListener("click", () => {
        console.log("hi")
        sp.innerText = "load_more";
        read_more.innerText = "";
      })
}

let load_more = document.querySelectorAll("span");
let read_more = document.querySelector(".read_more");
show_data();

//********************************************************************
// let load_more = document.querySelectorAll("span");

// let read_more = document.querySelectorAll(".read_more");
// let arr=[
//   { id:"1", project1: "These content types may include games, entertainment, and news derived from APIs using HTML, CSS, and JavaScript"}
//  ,{id:"2",project2: "They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data"}
//  ,{ id:"3",project2: "They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data"}
//  ,{ id:"4",project2: "They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data"}

// ]
// let arr1=[
//   "These content types may include games, entertainment, and news derived from APIs using HTML, CSS, and JavaScript",
// "They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data",
//  "They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data",
//  "They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data"

// ]

// // let obj = {
// //   project1: "These content types may include games, entertainment, and news derived from APIs using HTML, CSS, and JavaScript",
// //   project2: "They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data",
// //   project3: " They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data.",
// //   project4: " They can make better decisions regarding their daily activities with the aid of forecasts along with additional weather-related data."
// // }

// for(const p of load_more)
//   p.addEventListener("click",()=>{
// if(p.id==="project1"){
// let s=arr1[0]
//  read_more.innerText ="jdkjkdkjs";

//   // console.dir(p)
//   // console.log("hi")
// }
// if(p.id==="project2"){

//   // console.dir(p)
//   // console.log("hi")
// }
// if(p.id==="project3"){

//   // console.dir(p)
//   // console.log("hi")
// }
// if(p.id==="project4"){

//   // console.dir(p)
//   // console.log("hi")
// }
// console.dir(p)


//   })

// // getdata(arr);
// // function getdata(arr){
  
// //   load_more.addEventListener("click",(el)=>{
// //     //  if(lm.id=="project1"){

// //     // }
// //     // console.log(arr[0])
// //       console.log(lm)
// //       console.log(el)


// //     })
  

// //   // console.dir(obj);
// //   // console.log(obj.project1);
// // }
// let load_more = document.querySelectorAll("span");
// let read_more = document.querySelector(".read_more");
// for(const lm of load_more)
// {
//   lm.addEventListener("click",()=>{
//     // console.log("access")
//     let ele =lm.getAttribute("id");
//     // console.log(ele)
//     // console.dir(lm)
//     // print(ele)
//     show_data(ele)
//   })
// }
// function show_data(ele){
// // console.log(ele)
// switch(ele){
//   case("p1"):{

//     console.log(ele)
//     read_more.innerText="hi"
//     break
//   }
//   case("p2"):{
//     console.log("p2")

//     console.log(ele)
//     break;
//   }
//   case("p3"):{

//     console.log(ele)
//     break;
//   }
//   default:
//     console.log("nothing")
//     console.log(ele)
// }
// }