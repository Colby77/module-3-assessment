console.log('connected')
let colorBtn = document.querySelector('#color')
let foodBtn = document.querySelector('#food')
let musicBtn = document.querySelector('#music')
let spaceFavs = document.querySelector('#space-favs')


function colorShow(){
    spaceFavs.classList.remove()
    spaceFavs.classList.toggle('fav-color')
    
}

function foodShow(){
    spaceFavs.classList.remove()
    spaceFavs.classList.toggle('fav-food')
}

function musicShow(){
    spaceFavs.classList.remove()
    spaceFavs.classList.toggle('fav-music')
}

// function musicShow(){
//     spaceFavs.classList.remove()
//     for(let i = 0; i < 3; i++){
//         artist = document.createElement('img')
        
//     }
// }

colorBtn.addEventListener('click', colorShow)
foodBtn.addEventListener('click', foodShow)
musicBtn.addEventListener('click', musicShow)