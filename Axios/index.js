let url = "https://catfact.ninja/fact";
let btn=document.querySelector("button");
let p=document.querySelector("p");

btn.addEventListener("click",async()=>{
   let data=await getFacts();
    p.innerText=`${data}`
})

async function getFacts() {
   try {
    let res=await axios.get(url);
    let data=await res.data;
    // console.log(data.fact);
    // p.innerText=`${data.fact}`
    return data.fact;
    
   } catch (err) {
    console.log(err);
   }
}
