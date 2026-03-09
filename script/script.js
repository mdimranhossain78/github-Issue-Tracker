
const cardContainer = document.getElementById("card-container")
const loadingSpinner = document.getElementById("loding-spinner")



const count = document.getElementById("count")
const ditalsContainer = document.getElementById('ditals-container')

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


function showLoding(){
loadingSpinner.classList.remove('hidden')
cardContainer.innerHTML = ""

}
function hiddenLoding(){
    loadingSpinner.classList.add('hidden')
}


async function loadCard() {
showLoding()
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
  const data = await res.json()
  console.log(data)
    storeApiData = data.data
    displayCard(storeApiData)
   hiddenLoding()
    
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
         <div onclick ="modal(${card.id})" id = "card" class = "card bg-white p-4 ${bdrClass} shadow-md h-[100%]" >
         
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
 count.innerText = cardContainer.children.length
}

// all Data filtering

function filterData(filters){
 if(filters === 'all'){
    displayCard(storeApiData)
    return
 }
 const filtered = storeApiData.filter(find=>find.status === filters)
displayCard(filtered)
}
 

//modal

async function modal(id){
    console.log(id)
 const url = (`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
 
 const res = await fetch(url)
const data = await res.json()
dusplayModal(data.data)
}


function dusplayModal(modal){
const ditalsContainer = document.getElementById('ditals-container')
ditalsContainer.innerHTML =`
 <div class=" space-y-4">
        <h2 class="p-4 text-2xl font-semibold">${modal.title}</h2>
        <div class="flex gap-4">
          <p>${modal.status}</p>
          <div class="flex gap-4">
            <p class="text-[14px]  text-gray-500"><span class=""><i class="fa-solid fa-circle text-[8px] pr-4"></i> </span>Opened by ${modal.assignee ||"not found"}</p>
            <p class="text-[14px] text-gray-500"><span class=""><i class="fa-solid fa-circle text-[8px] pr-4"></i> </span>${new Date(modal.createdAt).toLocaleString('en-US')}</p>
          
          </div>
        </div>
       <div class="space-x-2">${modal.labels.map(lebel=>`<span class="bg-red-200 p-1 rounded-md text-[12px]">${lebel}</span>`).join("")}</div>

        <p class="line-clamp-2 text-[#64748B py-5]">${modal.description}</p>

        <div class="bg-[#F8FAFC] p-4 flex">

          <div class="flex-1">
          
            <p>Assignee:</p>
             <p class="font-semibold">${modal.assignee}</p>
         
          </div>
          <div class="flex-1">
            <p>Priority:</p>
            <p class="bg-lime-200 py-1 px-3 inline font-semibold rounded-md">${modal.priority}</p>
          </div>
        </div>
      </div> 


`
document.getElementById("my_modal_5").showModal()
}

async function searchData(){
    showLoding()
const text = document.getElementById('search').value
 
const res = await fetch (` https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)
const data = await res.json()
displayCard(data.data)
 hiddenLoding()
}


loadCard()
