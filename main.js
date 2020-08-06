// function nextPage(){
function slideNext(i) {
  if (i == 9){
    return true
  }
  else{
    let j=i+1
    console.log(j)
    if (i==0){

      //  PLAY MUSIC !!
      // let audio = new Audio('./assets/music.mp3')
      // audio.play()

      setTimeout(function(){
        slideNext(j) 
      }, 10000)

    }
    else{
      let selectedPage = document.getElementById('page-'+i)
      let nextPage = document.getElementById('page-'+(i+1))
      selectedPage.style.left = "-100vw"
      nextPage.style.left = "0vw"
      setTimeout(function(){
        slideNext(j) 
      }, 3000)
    }
  }
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let images = [0,'cafe.jpg', 'penguin.jpg']
let background = document.getElementById("main-page")
let i = 0
slideNext(i)