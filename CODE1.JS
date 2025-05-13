const box = document.getElementById("box");
const popup = document.querySelector(".popup");
const butt = document.querySelector(".butt");
const countries = [];
async function fetchData(){
    try {
       const getresponse = await fetch 
       ("https://restcountries.com/v3.1/all",{
        method:"get",
        headers:{
            "content-type":"application/json",
        },
       });
       const dat =await getresponse.json();

       countries.push(...dat);
       

    //    box.innerHTML ="";

       countries.map((count, index) =>{
        let g =`
        <div class="back">
    <img src="${count.flags.png}" alt="${count.name.common}"/>
    <h2>Name: ${count.name.official}</h2>
    <h2>Region: ${count.region}</h2>
    <h2>Population: ${count.populations 
        ? count.population.toLocaleString() : "N/A"}</h2>
        <h2>continent:: ${count.continents
        ?  count.continents[0] : "N/A" }</h2>
        <h3>Capital ${count.capital 
        ? count.capital[0] : "N/A"}</h3>
       </div>
             `;
             box.innerHTML += g;
       });
    } catch(error) {
        console.log(error);
        box.innerHTML = `<p style="color: red;"></p>`;
    }
}
fetchData();

function displayData(c) {
    c.map((count, index) =>{
        let g =`
        <div class="back" onclick="showMore(${index})">
    <img src="${count.flags.png}" alt="${count.name.common}"/>
    <h2>Name: ${count.name.official}</h2>
    <h2>Region: ${count.region}</h2>
    <h2>Population: ${count.populations 
        ? count.population.toLocaleString() : "N/A"}</h2>
        <h2>continent:: ${count.continents
        ?  count.continents[0] : "N/A" }</h2>
        <h3>Capital ${count.capital 
        ? count.capital[0] : "N/A"}</h3>
       </div>
             `;
             box.innerHTML += g;
            //  console.log(count);
       });
}
function showMore(count){
    // if (popup.classList.contains("show")) {
    //     popup.classList.remove("show");
    // }else {
    //     popup.classList.add("show");
    // }
    
    popup.classList.add("show");
    console.log(i);
    
    countries[1]
    const country = countries[i]
    console.log(country);


    let r =` <div>
                <p>${start0FWeek}</p>
                <h3>${count.name.common}</h3>
             </div>
        `;
        box.innerHTML = g;
}       


butt.addEventListener("click", () =>{
    popup.classList.remove("show");
})

search.addEventListener("click", ()=>{
    const  ivalue =document.getElementById("input").value;
    const result = countries.filter(country =>
    
        return country.name.common.toLowecase().includes(ivalue.
            toLowecase());
    )
    displayData(result);
    console.log(result);
    
})