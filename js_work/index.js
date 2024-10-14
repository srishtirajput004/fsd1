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
   
console.log("hello world");
let parent=document.getElementsByClassName("parent");
console.log(parent);
parent[0].innerHTML="<h2 style=color:red>DATA HAS CHANGED</h2>";
