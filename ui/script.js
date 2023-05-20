// TODO LIST APP

// console.log(localStorage.getItem('todo'));


const fun = () => {
   bt1.addEventListener('click', (e) => {
      e.preventDefault()
      let value = input.value
      if(value == ""){
         return
      }
   
      let todos;
      if( window.localStorage.getItem('todo') == null ) {
         todos = []
      }
      else {
         todos = JSON.parse(window.localStorage.getItem('todo'))
      }
      console.log(todos);
      window.localStorage.setItem('todo', JSON.stringify([...todos, value]))
      
      func1()
      input.value = ""   
   })  
}
fun()



const func1 = () => {

   console.log(window);

   let el = document.getElementById("dc2")
      let matter = window.localStorage.getItem('todo')
      let display = JSON.parse(matter)
      let displayEnd = display[display.length - 1]
      console.log(displayEnd);
      console.log(display);
      // console.log(matter);
      // console.log("display " ,typeof display);
      // console.log(typeof todos);
      // console.log(typeof display);
      // console.log(typeof localStorage.getItem('todo'));
      // console.log(localStorage.getItem('todo').length);
      
         let newEl = document.createElement("h3")
         newEl.innerHTML = displayEnd
         newEl.style.border = "1px black solid"
         newEl.style.padding = "10px"
         newEl.style.borderRadius = "10px"
         
         el.insertAdjacentElement('afterbegin', newEl) 
}

window.onload = function () {
   let el = document.getElementById("dc2")
      let matter = window.localStorage.getItem('todo')
      let display = JSON.parse(matter)
      let displayEnd = display[display.length - 1]
      console.log(displayEnd);
      console.log(display);
      // console.log(matter);
      // console.log("display " ,typeof display);
      // console.log(typeof todos);
      // console.log(typeof display);
      // console.log(typeof localStorage.getItem('todo'));
      // console.log(localStorage.getItem('todo').length);
      
      display.forEach(element => {
            let newEl = document.createElement("h3")
            newEl.innerHTML = element
            newEl.style.border = "1px black solid"
            newEl.style.padding = "10px"
            newEl.style.borderRadius = "10px"
            
            el.insertAdjacentElement('afterbegin', newEl) 
         });
}






bt2.addEventListener("click", (e) => {
   e.preventDefault()
   // let el = document.getElementById("dc2")
   // el.innerHTML = null
   window.localStorage.removeItem("todo");
   window.location.reload()
})


// console.log(localStorage.getItem('todo'))

