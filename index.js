setInterval(()=>{
    const element = document.querySelector('.clock');
    const sound =document.querySelector('audio');
// console.log(element);
const time = new Date();
const option = {
    timeZone :'Asia/kolkata',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
}
element.textContent=time.toLocaleTimeString('en-us',option);
sound.play();
},1000);