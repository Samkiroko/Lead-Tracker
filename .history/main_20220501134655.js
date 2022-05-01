'use strict'

const buttonEl = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el').value

let myLeads = []

buttonEl.addEventListener('click', () => {
  myLeads.push(inputEl)
  console.log(myLeads)
})
