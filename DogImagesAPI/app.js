let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");
let img=document.querySelector("img");

let randomHeading=["This looks really pretty","I love this dog","This is the best dog i have ever seen","Have you ever seen this dog before"];
let h2=document.querySelector("h2")
let cnt=1;

btn.addEventListener("click",async()=>{
   let image= await getRandomDog();
   img.setAttribute("src",image);
   btn.innerText=`Dog ${cnt}`;
   cnt++;
   let randInx=Math.floor(Math.random()*randomHeading.length);
   let radHead=randomHeading[randInx];
   h2.innerText=`${radHead}`;
   
})

async function getRandomDog() {
   try{
    let res=await axios.get(url);
    let data=await res.data;
    let image=data.message;
    console.log(image);
    return image
   }
   catch(err){
    console.log(err);
   }
}