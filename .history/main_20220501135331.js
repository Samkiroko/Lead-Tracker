'use strict'

const buttonEl = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')

let myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com']

buttonEl.addEventListener('click', () => {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})

for (i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i])
}
