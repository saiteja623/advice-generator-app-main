let id=document.getElementById("adv-id");
let advice=document.getElementById("advice");

async  function getAdvice()
{
    const response = await fetch('https://api.adviceslip.com/advice');
    const res=await response.json();
    console.log(res);
    id.innerText="ADVICE #"+res.slip.id;
    advice.innerText=`"${res.slip.advice}"`;
}