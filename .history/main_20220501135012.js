'use strict'

const buttonEl = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')

let myLeads = []

buttonEl.addEventListener('click', () => {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})
