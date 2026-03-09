
const cardContainer = document.getElementById("card-container")

let storeApiData = [];

const currenTab = 'all'
let active = ['active']
let inactive = ['btn-outline']

function showTab(tab){

    const tabs = ['all','open', 'closed'];

    for(let t of tabs){

       const tabName = document.getElementById('btn-' + t)

       if(t === tab){
        tabName.classList.add(...active)
        tabName.classList.remove(...inactive)
       }else{
        tabName.classList.remove(...active)
        tabName.classList.add(...inactive)
       }
       

    }

}


// function showLoding(){
// lodingSpener.classList.remove('hidden')
// cardContainer.innerHTML = ""

// }
// function hiddenLoding(){
//     lodingSpener.classList.add('hidden')
// }


async function loadCard() {

  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
  const data = await res.json()
  console.log(data)
    storeApiData = data.data
    displayCard(storeApiData)
   
    
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
         <div class="space-x-2">${card.labels.map(lebel=>`<span class="bg-red-200 p-1 rounded-md text-[12px]">${lebel}</span>`).join("")}</div>

         <hr class="my-4">

         <div>
            <p>#1by <span>${card.author}</span></p>
            <p>${new Date(card.createdAt).toLocaleString('en-US')}</p>
         </div>

         
         
         </div>
        
        `
        cardContainer.appendChild(cardDiv)
    })

}





loadCard()
