let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    // let fact = await getFacts();
    // console.log(fact);
    // let p = document.querySelector("#result");
    // p.innerText = fact;
    let link = await getimage();
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
})


let url = "https://catfact.ninja/fact";
let url2= "https://dog.ceo/api/breeds/image/random";


async function getimage(){

    try{
        let res = await axios.get(url2);
        return  res.data.message;
    }
    catch (e){
        console.log("error",e);
        return "No fact found";
    }       
}


// async function getFacts(){

//     try{
//         let res = await axios.get(url);
//         return  res.data.fact;
//     }
//     catch (e){
//         console.log("error",e);
//         return "No fact found";
//     }       
// }
