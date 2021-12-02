
"use strict";

/** QUESTION 1 */ 
((async function() {
    let state = {}
    let color = await window.prompt("Please enter your preferred color")
    if(color) {
        state.color = color
        if(Array.from(document.querySelectorAll('a')).length) {
            document.querySelectorAll('a').style.color = state.color
        }
    }
}))()


/** QUESTION 2 */ 

/** 2a */ 
function display() {
    const form = Array.from(document.getElementsByTagName("form"))[0]
    Array.from(form.children).forEach(element => {
        console.log(element)
    })
}
/** 2b */ 
(function() {
    const inputs = Array.from(document.getElementsByTagName("input"))
    inputs.forEach(input => {
        input.addEventListener('click', (e) => {
            e.target.style.background = 'lightgray'
        })
    })
})()


/**QUESTION 3 */ 
async function generateWebpage () {
    let   webpage = await window.open("");
    (function () {
        for(let i=0; i<50 ;i++) {
            const el = document.createElement('p')
            el.innerHTML = i
            webpage.document.body.append(el)
        }
    })()
}

/**QUESTION 4 */
async function generatePrompts() {
    let fistInput = await  window.prompt("Input number A")
    let secondInput = await  window.prompt("Input number B")
    let thirdInput = await  window.prompt("Input number C")
    let fourthInput = await  window.prompt("Input number D")

    if(fistInput && secondInput && thirdInput && fourthInput) {
        if((fistInput * secondInput) < (thirdInput * fourthInput)) {
            alert(true)
        }else {
            alert(false)
        }
    }
}


/* Question 5 **/
function checkRequired() {
    const form = Array.from(document.getElementsByTagName("form"))[1]
    let validateEmail =  async email => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return Promise.resolve(true)
        }
        return   Promise.resolve(false)
    }
    Array.from(form.children).forEach(el => {
        const tableRows = Array.from(el.children[0].children)
        for(let tableRow of tableRows) {
            const elContainer = Array.from(tableRow.children)[1]
            const  formEl = Array.from(elContainer.children)[0]
            if(formEl.type === 'text') {
                if(!formEl.value || formEl.name === 'address') {
                    alert(`${formEl.name} is required`)
                    return
                }
            }
            if(formEl.name === 'email') {
                if(!formEl.value) {
                    alert("Email is required")
                    return
                }
                if(formEl.value) {
                    validateEmail().then(resp => {
                        if(!resp) {
                            alert("Invalid Email format")
                        }
                    })
                }
            }
        }

    })
}
/** Classes */ 
class Eben {
    constructor(age, height) {
        this.age = age
        this.height = height
    }
    getInfo() {
        return `${this.age} ${this.height}`
    }
    setAge(jj) {
        this.age = jj
    }
    getAge () {
        return this.age
    }
}
let julius = new Eben(50, "6'4")
// julius.setAge(100)
// console.log(julius.getInfo())
// console.log(julius.getAge())

/** Prototypes */ 
let eben = function(age, height) {
    this.age = age
    this.height = height
}
eben.prototype.getInfo = function() {
    return `${this.age} ${this.height}`
}
// let julius = new eben(40, 50)

let obj = {
    age: 40,
    height: 50,
    setAge(jj) {
        this.age = jj
    },
    getAge () {
        return this.age
    }
}
obj.setAge(90)
let newObj = {
    color: 'black'
}
obj.__proto__ = newObj

console.log(obj.color)

console.log(julius.getInfo())


const arr = [1,2,1,1,2,3,4,5,5,5,6,6]

const runArr = arr => {
    let objMap = new Map()
    for(let i=0; i<arr.length; i++) {
        objMap.set(arr[i], (objMap.get(arr[i]) + 1 || 1 )) 
    }
    return objMap
}

for(let [key, value] of Object.entries(obj)) {
    console.log(key, value)
}
console.log(runArr(arr))


let o = function() {
    let b = 2
    function getValues() {
        let e = 90
        return `${e} ${b}`
    }
    return getValues()
}

console.log(o())

let f = {
    e: "o",
    a: 8,
    aval: true
}

function trid (greeting) {
    return `${this.e} ${this.a} ${greeting}`
}
console.log(trid.call(f, 'Hello!'))
console.log(trid.apply(f, ['Hello!']))
const newVar = trid.bind(f, 'Hello!')
console.log(newVar())