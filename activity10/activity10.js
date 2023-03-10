console.log('Thierno Diallo')

// Example 23
// How to remove a child 
let div2 = document.querySelector('.d2')
div2.removeChild(div2.children[1])

// Example 24
let part1 = document.querySelector('.p1')
part1.remove()

//Example 22
let subtitle = document.createElement('h2')
subtitle.append('PARKS TO VISIT IN NYC')

let parks = document.querySelector('.nyc')
parks.insertAdjacentElement('afterend', subtitle)
//Example 17 - append a new element into a document
// step 1 - create the element
let myPara = document.createElement('p')
// step 2 - create the element content and 
//append it to the new element.
let mySentence =  document.createTextNode('Appended paragraph')
myPara.appendChild(mySentence)
// step 3 append the new element into an existing DOM element
let newP = document.querySelector('.d')
newP.appendChild(myPara)
// Example 15
let list = document.querySelectorAll('li')[2]
//Example 10
let n2 = document.querySelectorAll('#special .name')[1]
n2.className ='bgBlue'

//Example 6
let my = document.querySelector('.qcc')
my.textContent ='WEBSITE OFF! <b> Queens </b>'

//Example 5 
let names = document.querySelectorAll('#special .name')
for(let i=0; i<names.length ; i++){
    names[i].style.fontWeight ='bolder'
    names[i].style.fontStyle ='italic'
    names[i].style.fontSize ='2em'
}


//Example 4 just select one paragraph between the paragraphs 
let firstP = document.querySelector('#special p')
firstP.style.color='magenta'

//Example 3
let n = document.getElementsByClassName('name')
for(let i=0; i<n.length; i++){
    n[i].style.color = 'orange'
}
//Example 2
let ps = document.getElementsByTagName('p')
console.log(ps)
//Example 1
let p1 = document.getElementById('one')
p1.style.color='olive';

