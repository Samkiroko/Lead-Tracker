'use strict'

const buttonEl = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

let myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com']

buttonEl.addEventListener('click', () => {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})

function renderLeads() {
  let listItem = ''
  for (let i = 0; i < myLeads.length; i++) {
    listItem += '<li>' + myLeads[i] + '</li>'
  }

  ulEl.innerHTML = listItem
}
