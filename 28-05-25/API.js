const URL = "https://catfact.ninja/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => 
{
    console.log("GETTING DATA:");
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json();
    factPara.innerText=data[0].text;
};
btn.addEventListener("click", getFacts);