// let a=12;
// let b="12";
// console.log(typeof b);
// let today=Date();
// console.log(typeof today);
// if(a===b){
//     console.log("welcome");
// }
// else{
//     console.log("hello");
// }
// let myname="amit";
// let college="abesec";
// let result=`hi,my name is ${myname} and i am doing engineering from ${college}`;
// console.log(result);

// object in js,     works on key-value,  keyname in string 
// let key="sname";
// const students=[{
//     sname:"amit",
//     course:"btech", 
//     college:"abesec"
// },
// {sname:"tommy",
//     course:"mba", 
//     college:"ims"

// }]
// console.log(students);
// console.log("name="+students.sname+" course="+students.course);
// object destructuring
// const {sname}=students;
// console.log(sname);
// // students[key]="rahul";
// console.log(students[1].sname,students[1].college);

// function
// function greeting(msng="welcome"){
//     console.log("gm"+msng);
// }
// greeting("tadainggg");

// function sum(a,b,c=23){
//     return a+b+c;
// }
// let data=sum(12,20);
// console.log(data);

// callback function
// function ccompiler(){
//  return "C COMPILER SELECTED";
// }
// function javacompiler(){
//  return "JAVA COMPILER SELECTED";
// }
// function selectlang(clbk){
//   console.log("you have:"+clbk());
// }
// selectlang(javacompiler);
// selectlang(ccompiler);

//    function selectlang(language){
//     let data;
//     if(language=="c"){
//      function ccompiler(){
//         return "C COMPILER SELECTED";
//        }
//        data=ccompiler();
//     }
//     if(language=="java"){
//        function javacompiler(){
//         return "JAVA COMPILER SELECTED";
//        }
//        data=javacompiler();
//     }
//     return data;
//    }
//    let data1=selectlang("c");
//    console.log(data1);
   
// console.log("hello world");
// // parent[0].innerText="hello js";
// // parent[0].innerHTML="<h2 style=color:red>DATA HAS CHANGED</h2>";
// const h1=document.createElement("h1");
// console.log(h1);
// h1.innerText="abes engineering college";
// console.log(h1);
// h1.style.backgroundColor="bisque";
// h1.style.color="black";
// h1.style.padding="20px";
// h1.style.marginLeft="300px";
// parent[0].appendChild(h1);

// const img=document.createElement("img");
// img.src="../images/ama logo.png";
// console.log(img);
// img.setAttribute("height","300");
// img.setAttribute("width","500");
// parent[0].appendChild(img);
// parent[0].removeChild(img);

// function getdata(){
//     console.log("hi, inside getdata function");
//     parent[0].innerHTML="<h2 style=color:red>hi, event handled </h2>";
// }

// const button=document.getElementsByClassName("btn");
// console.log(button);
// button[0].addEventListener("click",getdata);

// const promise=new Promise((resolve,reject)=>{
//     let a=12;
//     if(a>10){
//         resolve("accepted");
//     }
//     else{
//         reject("not accepted");
//     }

// })
// promise.then((msg)=>{console.log(msg)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{console.log("all resources are closed")});

// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"srishti", Stack:"mern stack"});
// })
// promise2.then((data)=>{console.log("hi "+data.name)})
// .catch(x=>{console.log(x)});

const response=fetch("https://dummyjson.com/products");
response.then((data)=>{console.log(data);
    data.json().then((res)=>{
        console.log(res);
    })
})