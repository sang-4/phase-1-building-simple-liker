// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded',function(){
  const likeBtn=document.querySelector("li.like span")
  likeBtn.addEventListener('click',e=>{e.preventDefaulten()
  if(likeBtn.textContent===EMPTY_HEART){
    mimicServerCall()
    .then(()=>{
      likeBtn.textContent=FULL_HEART
      likeBtn.className='activated-heart'
    })
    .catch(error=>{
      const modal=document.getElementById('modal')
      modal.className='hidden'
      modal.innerText=error
      setTimeout(()=>modal.className='hidden',3000)

  
    })
  } else{
    likeBtn.textContent=EMPTY_HEART
    likeBtn.classlist.remove('activated-heart')

  }
})
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
