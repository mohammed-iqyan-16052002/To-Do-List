let a=document.getElementById('in')
let b=document.getElementById('btn')
let c=document.getElementById('pp')

btn.addEventListener('click',()=>{  
   if(a.value==''){
      alert('please enter the Notes')
      d.style.display='none'
   }

   let d=document.createElement('li')
   d.innerHTML=`${a.value} <i  class="fa-solid fa-xmark"></i>`
   a.value=''
   c.appendChild(d) 
   d.style.background='linear-gradient(to right bottom, #4d65bc, #5b59a6, #604e90, #60447b, #5c3c67)'
   d.style.listStyle='none'
   d.style.padding='5px 10px'
   d.style.margin='10px 0px'
   d.style.color='white'
   d.style.borderRadius='8px'
   d.style.display='flex'
   d.style.justifyContent='space-between'

   d.addEventListener("click",()=>{
    d.remove()
   })
})
