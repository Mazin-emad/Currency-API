
let input = document.querySelector(".input");
let inputValue = input.value;
let botom = document.querySelector(".change")
let egp = document.querySelector(".egp span")
let sar = document.querySelector(".sar span")

fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b06fac6067cb4bdf85706e113fa5288c")
.then((result) =>{
  let mydata = result.json();
  return mydata;
}).then((result) => {
  let pound = result.rates.EGP
  let riyl = result.rates.SAR

  addEventListener("click", (e) => {
    if(e.target == botom){
      egp.innerHTML = "";
      sar.innerHTML = "";
      inputValue = input.value
      egp.innerHTML = (inputValue * pound).toFixed(2)
      sar.innerHTML = (inputValue * riyl).toFixed(2)
    }
  })
})





