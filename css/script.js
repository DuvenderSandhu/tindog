const left = document.getElementById('leftsign')
const right = document.getElementById('rightsign')
const para1 = document.getElementById('para1')
const para2 = document.getElementById('para2')
const click = document.getElementById('click')
const also = document.getElementById('also')


//                                              Example
// click.addEventListener('click',()=>{
//     click.style.display="none"
//     also.style.display="block"
// })
// also.addEventListener('click',()=>{
//     also.style.display="none"
//     click.style.display="block"
// })


//                                              Code
left.addEventListener('click', () => {
    if (para2.style.display == "flex"){
        para1.style.display = "flex"
        para2.style.display = "none"
        para1.style.transition="2s"
    }
    else{
        para2.style.display = "flex"
        para1.style.display = "none"
        para2.style.transition="2s"
        
    }

})
right.addEventListener('click', () => {
    if (para2.style.display == "flex"){
        para1.style.display = "flex"
        para2.style.display = "none"
    }
    else{
        para2.style.display = "flex"
        para1.style.display = "none"
    }

})
