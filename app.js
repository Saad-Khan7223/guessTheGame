const subHeading=document.querySelector('.subHeading');
const input=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newWords="";
let randomWords="";
let words=["python","javascript","php","c#","java","html","css",
"reactjs","angular","flutter"];
const createNewWords=()=>{
    let random=Math.floor(Math.random()*words.length);
    let newtemp=words[random];
    return newtemp

}
const scramble=(arr)=>{
    for (let i=arr.length-1; i>0 ; i--){
        let temp=arr[i];
        let j=Math.floor(Math.random()*(i+1))
         arr[i]=arr[j];
         arr[j]=temp
         return arr;
    }
}
btn.addEventListener('click',function(){
    if(!play){
       play=true;
       btn.innerHTML="Guess" ;
       input.classList.toggle('hidden');
       newWords=createNewWords();
       randomWords=scramble(newWords.split("")).join("");
       subHeading.innerHTML=`Guess The Word ${randomWords}`;
    }
    else{
        let tempwords=input.value;
        if(newWords===tempwords)
        {
            play=false;
            subHeading.innerHTML= `Correct it is ${newWords}`;
            btn.innerHTML='Start Again';
            input.classList.toggle('hidden');
            input.value="";
        }
        else{
            subHeading.innerHTML= `Wrong it is ${randomWords}`;
            btn.innerHTML='Guess Again';
            input.value="";
        }
    }
})