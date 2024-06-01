let url = "https://catfact.ninja/fact";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data)=>{
    console.log(`data 1 : ${data.fact}`);
    return fetch(url)
  })
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log(`data 2 : ${data.fact}`);
    return fetch(url)
  })
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log(`data 3 : ${data.fact}`);
    return fetch(url);
  })
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log(`data 4 :${data.fact}`);
  })
  .then((err) => {
    console.log(err);
  });
