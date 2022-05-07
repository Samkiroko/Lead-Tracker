'use strict'

const buttonEl = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

let myLeads = ['www.example.com']
myLeads.push('www.sam.com')

myLeads = JSON.stringify(myLeads)

console.log(typeof myLeads)

buttonEl.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
})

//  localStorage.setItem('myLeads', 'www.example.com')
// localStorage.clear()

// console.log(localStorage.getItem('myLeads'))

// let myLinks = ['www.example.com']

// myLinks = JSON.stringify(myLinks)
// console.log(myLinks)

function renderLeads() {
    let listItem = ''
    for (let i = 0; i < myLeads.length; i++) {
        // listItem += "<li><a href='#' target='_blank'>" + myLeads[i] + '</a></li>'
        listItem = `<li>
    <a href="#" target="_blank">${myLeads[i]}</a>
    </li>`
    }

    ulEl.innerHTML = listItem
    console.log(ulEl.innerHTML)
}