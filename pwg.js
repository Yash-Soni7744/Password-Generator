document.addEventListener('DOMContentLoaded',()=>{

    const numbers = '0123456789'
    const loweredAlpha = 'abcdefghijklmnopqrstuvwxyz'
    const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const specialChar = '!@#$%^&*()_+{}[]:;<>,.?~\\/-'
    
    let input = document.getElementById('input-area');
    let number = document.getElementById('number')
    let upper = document.getElementById('upper')
    let lower = document.getElementById('lower')
    let special = document.getElementById('special')
    let password = '';
    let searchButton = document.querySelector('.button')
    
    
    function getRandom(set){
        let random = Math.floor(Math.random()*set.length)
        return set[random]
    }
    
    searchButton.addEventListener('click',()=>{
        // console.log(password)
        password = ''
        if(!number.checked && !upper.checked && !lower.checked && !special.checked) {
            alert("Please select at least one option.");
            return;
        }

        while(password.length<input.value){

            if(number.checked){
                password+=getRandom(numbers)
            }
            if(upper.checked){
                password+=getRandom(upperAlpha)
            }
            if(lower.checked){
                password+=getRandom(loweredAlpha)
            }
            if(special.checked){
                password+=getRandom(specialChar)
            }
            password = password.slice(0,input.value)
        }
        document.querySelector('p').innerHTML = password
        // if(duplicate.checked){
            
            // }
    })
})