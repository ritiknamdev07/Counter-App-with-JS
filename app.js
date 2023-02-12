
let count = 0
let value = document.getElementById("value")

const btns = document.querySelectorAll(".btn")

btns.forEach((btn)=>{
   btn.addEventListener('click', (e)=>{
    const classList = e.target.classList
    
      if(classList.contains('decrease')){
       console.log("in ")
        count--
      }
      else if(classList.contains("increase")){
        count++
      }
      else{count = 0}

      if(count<0){
        value.style.color = "red"
      }
      if(count>0){
        value.style.color = "green"
      }
      if(count === 0){
        value.style.color = "black"
      }
      value.textContent = count
    
   })
})