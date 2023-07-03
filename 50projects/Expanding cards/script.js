const panels = document.querySelectorAll('.panel')




function removeActiveClass(){
   panels.forEach(panel=>{
    panel.classList.remove('active')
   })
}

const addActiveClass = function(){
    console.log(this.textContent)
    // add the class
    removeActiveClass()

    this.classList.add("active")
}

for(let i of panels){
    // console.log(i)
    // if there is an active class present remove it 
    i.addEventListener('click', addActiveClass)
}