
const button = [
    {
        id: 1,
        btn_name: 'Open'
    },
    {
        id: 2,
        btn_name: 'closed'
    }
]

const btnContainer = document.getElementById('button-container')
const cardContainer = document.getElementById('card-container')



function displayBtn(){
  
button.forEach(btns=>{
   const btn = document.createElement('button')
   btn.className ="btn btn-outline ml-3"
   btn.textContent = btns.btn_name

   btnContainer.appendChild(btn)
})
}

async function loadCard() {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data = await res.json()
    displayCard(data.data)

}
function displayCard(cards){
    
    cardContainer.innerHTML = ""

    cards.forEach(card =>{
        console.log(card.labels[0])
        console.log(card.labels[1])
        
        
        

        const cardDiv = document.createElement('div')
        cardDiv.className = "card bg-white p-4 inactive-border shadow-md"
        cardDiv.innerHTML = `
          <p class="text-end">hight</p>
           <h2 class="font-semibold my-3 text-[20px]">Fix navigation menu on mobile devices</h2>
           <p class="mb-4 line-clamp-2">The navigation menu doesn't collapse properly on mobile devices</p>
         <p class="space-x-2"><span class="bg-red-200 p-1 rounded-md">bug</span>  <span  class="bg-red-200 p-1 rounded-md">help wanted</span></p>

         <hr class="my-4">

         <div>
            <p>#1by john_doe</p>
            <p>1/15/2024</p>
         </div>

        
        `
        cardContainer.appendChild(cardDiv)
    })

}


loadCard()
displayBtn()