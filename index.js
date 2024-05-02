const endDate="20 March 2024 6:00 PM";
document.getElementById("end-date").innerHTML=endDate;
const inputs=document.querySelectorAll("input")
function clock(){
    const end=new Date(endDate);
    const now=new Date();
   const def=(end-now)/1000;
//    convert days
if(def<0)return;
inputs[0].value=Math.floor(def/3600/24);
inputs[1].value=Math.floor((def/3600)%24);
inputs[2].value=Math.floor((def/60)%60);
inputs[3].value=Math.floor((def)%60);

}
clock();
setInterval(() => {
    clock();
}, 1000);