document.getElementById("year") && (document.getElementById("year").textContent=new Date().getFullYear());
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
 if(entry.isIntersecting){
   entry.target.animate([{opacity:0,transform:"translateY(22px)"},{opacity:1,transform:"translateY(0)"}],
   {duration:650,fill:"both",easing:"cubic-bezier(.16,1,.3,1)"});
   observer.unobserve(entry.target);
 }
}),{threshold:.08});
document.querySelectorAll("section h2,.cards article,.product-grid article,.products-grid article,.values article").forEach(el=>observer.observe(el));
const menu=document.querySelector(".menu"),nav=document.querySelector("header nav");
if(menu&&nav){menu.addEventListener("click",()=>nav.classList.toggle("open"));}