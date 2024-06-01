let url = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    let head={
        headers:{
            Accept:"application/json"
        }
    };
    let res = await axios.get(url,head);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}
getJokes(); //we are getting the data in the form of html
