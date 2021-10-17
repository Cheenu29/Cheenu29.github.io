// function dO(){
//   function myFunction(){
//    document.getElementById('menu').classList.toggleClass('fa-times');
//     document.getElementsByTagName('header').classList.toggleClass('toggle');
//   }
//   window.onload('scroll load',f1());
// }
// function f1(){
//   document.getElementById('menu').classList.remove('fa-times');
//   document.getElementsByTagName('header').classList.toggleClass('toggle');
//   if(window.scrollTop>0)
//     window.top.onpageshow;
//   else
//     window.top.onpagehide;
// }

// document.addEventListener("DOMContentLoaded", function() {

//   document.getElementById("menu").click(function(){
//     this.classList.toggle("fa-times");
//     $('header').classList.toggle("toggle");
//   });

//  // window.onload('scroll load',function(){
//     window.addEventListener('scroll', function() {
//     document.getElementById("menu").classList.remove("fa-times");
//     document.querySelector('header').classList.remove("toggle");

// //    if(window.scrollTop() > 0){
//       if(window.scrollTop>0){
//         document.querySelector(".top").style.display  = "block";;
//     }else{
//       document.querySelector(".top").style.display = "none";
//     }

//   });

  

//   document.querySelector('a[href*="#"]').addEventListener('click',function(e){

//     e.preventDefault();

//     document.querySelector('html, body').animate({

//       scrollTop : document.querySelector(document.querySelector(this).attr('href')).offset().top,

//     },
//       500, 
//       'linear'
//     );

//   });

// });


// document.querySelector(document).ready(function(){

//   document.querySelector('#menu').click(function(){
//     document.querySelector(this).classList.toggle('fa-times');
//     document.querySelector('header').classList.toggle('toggle');
//   });

//   document.querySelector(window).addEventListener('scroll load',function(){

//     document.querySelector('#menu').removeClass('fa-times');
//     document.querySelector('header').removeClass('toggle');

//     if(document.querySelector(window).scrollTop > 0){
//       document.querySelector('.top').show();
//     }else{
//       document.querySelector('.top').hide();
//     }

// });

//   document.querySelector('a[href*="#"]').addEventListener('click',function(e){

//     e.preventDefault();

//     document.querySelector('html, body').animate({

//       scrollTop : document.querySelector(document.querySelector(this).attr('href')).offset().top,

//     },
//       500, 
//       'linear'
//     );

//   });

// });



// $(document).ready(function(){

//   $('#menu').click(function(){
//     $(this).toggleClass('fa-times');
//     $('header').toggleClass('toggle');
//   });

//   $(window).on('scroll load',function(){

//     $('#menu').removeClass('fa-times');
//     $('header').removeClass('toggle');

//     if($(window).scrollTop() > 0){
//       $('.top').show();
//     }else{
//       $('.top').hide();
//     }

//   });

//   // smooth scrolling 

//   $('a[href*="#"]').on('click',function(e){

//     e.preventDefault();

//     $('html, body').animate({

//       scrollTop : $($(this).attr('href')).offset().top,

//     },
//       500, 
//       'linear'
//     );

//   });

// });




function displayDate() {
  var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        document.getElementById("timerLabel").innerHTML=days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        setTimeout(displayDate, 1000);
}

displayDate();



// function displayDate1() {
//   var d = new Date(),
//         minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
//         hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
//         ampm = d.getHours() >= 12 ? 'pm' : 'am',
//         months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//         days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//         document.getElementById("timerLabel1").innerHTML=days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
//         setTimeout(displayDate1, 1000);
// }

// displayDate1();




// function displayDate2() {
//   var d = new Date(),
//         minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
//         hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
//         ampm = d.getHours() >= 12 ? 'pm' : 'am',
//         months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//         days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//         document.getElementById("timerLabel2").innerHTML=days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
//         setTimeout(displayDate2, 1000);
// }

// displayDate2();



// function displayDate3() {
//   var d = new Date(),
//         minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
//         hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
//         ampm = d.getHours() >= 12 ? 'pm' : 'am',
//         months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//         days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//         document.getElementById("timerLabel3").innerHTML=days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
//         setTimeout(displayDate3, 1000);
// }

// displayDate3();



// function displayDate4() {
//   var d = new Date(),
//         minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
//         hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
//         ampm = d.getHours() >= 12 ? 'pm' : 'am',
//         months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//         days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//         document.getElementById("timerLabel4").innerHTML=days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
//         setTimeout(displayDate4, 1000);
// }

// displayDate4();



// function displayDate5() {
//   var d = new Date(),
//         minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
//         hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
//         ampm = d.getHours() >= 12 ? 'pm' : 'am',
//         months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//         days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
//         document.getElementById("timerLabel5").innerHTML=days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
//         setTimeout(displayDate5, 1000);
// }

// displayDate5();


// function d1(){
//   displayDate();
// }


// function d2(){
//   displayDate();
// }


// function d3(){
//   displayDate();
// }


// function d4(){
//   displayDate();
// }

// function d5(){
//   displayDate();
// }
//document.addEventListener('DOMContentLoaded', function(event) { 
//    var d = new Date();
//    document.getElementById('timerLabel').innerText = d;
//});