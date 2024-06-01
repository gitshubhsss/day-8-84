let url = "http://universities.hipolabs.com/search?country=";
let ul = document.querySelector("#list");
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let p = document.querySelector("p");
let h1=document.querySelector("h1");

function showCollage(colArr) {
  ul.innerText="";
  for (collage of colArr) {
    let collageWebsite = collage.web_pages[0];
    let colName=collage.name;
    let li=document.createElement("li");
    li.innerHTML=`<a href="${collageWebsite}" target="_blank">${colName}</a>`;
    ul.appendChild(li);
  }
}
btn.addEventListener("click", async () => {
  h1.innerText=`Heres the Top univercities from ${inp.value}`
  let country = inp.value;
  let colArr = await getCollages(country);
  showCollage(colArr);
  inp.value="";
});

async function getCollages(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}



