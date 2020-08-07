// the function for sliding the im
function slideNext(i) {
  // to end loop
  if (i == 17){
    let selectedPage = document.getElementById(`page-${i}`)
    selectedPage.style.left = "-100vw"
    shade.style.transition = "3s"
    shade.style.backgroundColor = "#00000000"
    music.loop = false
    return true
  }
  else{
    // for the first slide
    if (i==0){

      // Play Music !!
      let music = new Audio("./assets/music.mp3")
      music.play()
      music.loop = true

      setTimeout(function(){
        slideNext(i+1) 
      }, 10000)

    }
    else{
      let selectedPage = document.getElementById(`page-${i}`)
      let nextPage = document.getElementById(`page-${i+1}`)
      selectedPage.style.left = "-100vw"
      nextPage.style.left = "0vw"

      // for adding more time to long text messages
      if (very_long.find(a => a==(i+1))){
        setTimeout(function(){
          slideNext(i+1) 
        }, 18000)
      }

      else{        
          if (long_list.find(a => a==(i+1))){
            setTimeout(function(){
              slideNext(i+1) 
            }, 13000)
          }
          
          // for short text messages
          else{
            setTimeout(function(){
              slideNext(i+1) 
            }, 8000)
          }
        }
      }
  }
  
}

// for adding more time to long text messages
let long_list = [3, 7, 8, 10, 11, 12, 14, 16]
let very_long = [9, 13]

// select the elements to animate
let tapMe = document.getElementById("tap-me")
let backgroundImage = document.getElementById("background-image")
let page1 = document.getElementById("page-1")
let shade = document.getElementById("shade")

tapMe.addEventListener('click', function(){

  //start the animations
  backgroundImage.style.animation = "background-animation 200s forwards"
  page1.style.animation = "text-animation 10s forwards"
  // shade.style.animation = "reveal 3s linear"
  shade.style.backgroundColor= "#0000008a"
  tapMe.style.opacity = 0

  setTimeout(function(){
    slideNext(0)
  }, 3000)

})
