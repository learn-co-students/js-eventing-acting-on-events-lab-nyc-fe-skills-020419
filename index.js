// step 1: find the element
const dodger = document.getElementById('dodger')

// step 3 define the function that you want trigger by the event listener below
function onKeyDown(event) {
  if (event.keyCode === 37) {
    const currentPosition = parseInt(dodger.style.left)
    if (currentPosition - 5 >= 0){
      dodger.style.left = currentPosition - 5 + 'px'
    }
  } else if (event.keyCode === 39) {
    const currentPosition = parseInt(dodger.style.left)
    dodger.style.left = currentPosition + 5 + 'px'
}
}

// step 2: add event listener to the found element 
document.addEventListener('keydown', onKeyDown)

//step 4 make it into a function



function moveDodgerRight(){
   const currentPosition = parseInt(dodger.style.left)
   if (currentPosition + 5 <= 360){
   dodger.style.left = currentPosition + 5 + 'px'
   }
   
  }

  