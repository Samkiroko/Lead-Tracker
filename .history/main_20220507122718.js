let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteEl = document.getElementById('delete-btn')

//  Listen for double clicks on the delete button (google it!)
deleteEl.addEventListener('dblclick', function(e) {
    e.preventDefault()
    leadsFromLocalStorage = ''
})

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
    // console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderLeads()

    // To verify that it works:
    console.log(localStorage.getItem('myLeads'))
})

function renderLeads() {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}