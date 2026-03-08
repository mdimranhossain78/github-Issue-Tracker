



console.log(newopen)
function displayBtn(){
  
button.forEach(btns=>{
   const btn = document.createElement('button')
   btn.className ="btn btn-outline ml-3"
   btn.textContent = btns.btn_name
   btn.onclick = () => selectedBtn(btns.id, btn)

   btnContainer.appendChild(btn)
})
}

// button click and work;

function selectedBtn(id, btn){
  
 
 const allButton = document.querySelectorAll("#button-container button, #btn-all")
 console.log(allButton)
 allButton.forEach((btn)=>{
    btn.classList.remove('active')
    btn.classList.add("btn-outline")
    
 })
 btn.classList.add('active')
 btn.classList.remove('btn-outline')
  

 

}




function showLoding(){
lodingSpener.classList.remove('hidden')
cardContainer.innerHTML = ""

}
function hiddenLoding(){
    lodingSpener.classList.add('hidden')
}


async function loadCard() {
    showLoding()
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data = await res.json()
    hiddenLoding()
    displayCard(data.data)
    openData(data.data)

}
// id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"

function displayCard(cards){
    
    cardContainer.innerHTML = ""

    cards.forEach(card =>{
        // console.log(card.labels[0])
        // console.log(card.labels[1])
        const cardDiv = document.createElement('div')
        let bdrClass = ""
         
        if(card.status === "open"){
            bdrClass = "active-border"
        }
        else{
            bdrClass = "inactive-border"              
        }

    
        cardDiv.innerHTML = `
         <div id = "card" class = "card bg-white p-4 ${bdrClass} shadow-md h-[100%]" >
         
          <p class="text-end">${card.priority}</p>
           <h2 class="font-semibold my-3 text-[20px]">${card.title}</h2>
           <p class="mb-4 line-clamp-2">${card.description}</p>
         <p class="space-x-2"><span class="bg-red-200 p-1 rounded-md text-[12px]">${card.labels[0]}</span>  <span  class="bg-red-200 p-1 rounded-md text-[12px]">${card.labels[1]}</span></p>

         <hr class="my-4">

         <div>
            <p>#1by <span>${card.author}</span></p>
            <p>${card.createdAt}</p>
         </div>

         
         
         </div>
        
        `
        cardContainer.appendChild(cardDiv)
    })

}





loadCard()
