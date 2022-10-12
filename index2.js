// console.log("hello")

import data from "./data.json" assert{type:'json'}

// console.log(data)
// console.log("numcheck", Math.round((Math.random()) * 100));

var {comments}=data


// Working on localStorage

localStorage.setItem('InteractiveCmts', JSON.stringify(comments))



let startData = JSON.parse(localStorage.getItem('InteractiveCmts'))
appendData(startData)

function appendData(startData){

    const main=document.querySelector(".data-show-from-js")
comments.forEach((comment)=>{
    main.innerHTML+=createMessage(comment)

    let repliesBox = document.querySelector(`#list-replies_${comment.id}`)
    let num = repliesBox.classList[1]
    
    if(comment.replies.length > 0){
        comment.replies.forEach((singleReply) => {
            repliesBox.innerHTML += createMessage(singleReply)
        })
    }
})

}


function createMessage(singleCmtData) {
    return(
        `<div>
<div class="comment-box">
  <div class="like-box">
      <div class='plus-btn ${singleCmtData.id}'>
          <img src="./images/icon-plus.svg" alt="icon-plus" width="40%">
      </div>
      <div>
          <p class="like-count" id="like-count${singleCmtData.id}">${singleCmtData.score}</p>
      </div>
      <div class='minus-btn ${singleCmtData.id}'>
          <img src="./images/icon-minus.svg" alt="icon-minus" width="40%">
      </div>
  </div>
  <div class="user-cmt-box">
      <div class="user-detail-box">
          <div class="img-name-date-box">
              <div class="img-box">
                  <img src=${singleCmtData.user.image.png} alt="${singleCmtData.username}" width="80%">
              </div>
              <div class="user-name-box">
                  <span class="user-name">${singleCmtData.user.username}</span><span class="month-ago">${singleCmtData.createdAt}</span>
              </div>
          </div>
          <div class="reply-box ${singleCmtData.id}">
              <span>
                  <img src="./images/icon-reply.svg" alt="">
              </span>
              <span>reply</span>
          </div>
      </div>
      <div>
          <p class="user-cmt">${singleCmtData.content}</p>
      </div>
  </div>
</div>
<div class="none ${singleCmtData.id}" id='reply-box${singleCmtData.id}'>
          <div class="post-img-box">
              <img src="./images/avatars/image-juliusomo.png" alt="image-juliusomo" width="80%">
          </div>
          <div class="post-input-box">
              <input type="text" class="add-cmt-inp" id="add-cmt${singleCmtData.id}" placeholder="Add comment here">
          </div>
          <div class="post-button-box">
              <button class="button-9 ${singleCmtData.id}" id="send-btn" >Send</button>
          </div>
  </div>
<div id="list-replies_${singleCmtData.id}" class="list-replies"></div>

</div>

`
    )
}
mixUp()
dataReply()

function mixUp(){

// Increase the Like Count

const plusBtn =document.querySelectorAll(".plus-btn")

plusBtn.forEach((btn) => {
    btn.addEventListener("click",()=>{
        let classnum=btn.classList[1]
        console.log(classnum)
        let score = document.querySelector(`#like-count${classnum}`).innerHTML
        // console.log(score)
        document.querySelector(`#like-count${classnum}`).innerHTML = parseInt(score) + 1
    })
    
})

// Decrease the Like Count

const minusBtn =document.querySelectorAll(".minus-btn")

minusBtn.forEach((btn) => {
    btn.addEventListener("click",()=>{
        let classnum=btn.classList[1]
        let score = document.querySelector(`#like-count${classnum}`).innerHTML
        // console.log(score)
        document.querySelector(`#like-count${classnum}`).innerHTML = parseInt(score) - 1
    })
    
})

// To open the Reply Box 

let replyBtns = document.querySelectorAll('.reply-box')
console.log(replyBtns)

replyBtns.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        let btnclass=btn.classList[1]
        let replyBox = document.querySelectorAll('.none')
        let replyBoxList = replyBox.classList
        replyBox.forEach(e=>{
            let classnum=e.classList
            // console.log(classnum);
            classnum.forEach((ele)=>{
                // console.log(ele);
                if(ele===btnclass){
                    // console.log(ele)
                    let commentBox=document.querySelector(`#reply-box${ele}`)
                    commentBox.className = `post-cmt-box ${ele}`
                }
            })
        })

    })


})

}
// To Close the Reply Box 


// console.log(sendBtns);
function dataReply(){
    let sendBtns = document.querySelectorAll('.button-9')

sendBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
       let num =  btn.classList[1]
       let commentBox=document.querySelector(`#reply-box${num}`)
       commentBox.className = `none ${num}`
        comments.forEach((cmt)=>{
            if(cmt.id == num){
                let replyObj = {
                    "id" : Math.round((Math.random()) * 100),
                    "content" : document.querySelector(`#add-cmt${num}`).value,
                    "createdAt" : "2 days ago",
                    "score" : Math.round((Math.random()) * 100),
                    "user" :{
                        "image": { 
                            "png": "./images/avatars/image-juliusomo.png",
                            "webp": "./images/avatars/image-juliusomo.webp"
                        },
                        "username" : data.currentUser.username ,
                }
                }
                 
                cmt.replies.push(replyObj)
                console.log(cmt)
                console.log(comments)

                localStorage.setItem('InteractiveCmts', JSON.stringify(comments))
                let startData = JSON.parse(localStorage.getItem('InteractiveCmts'))
                document.querySelector('.data-show-from-js').innerHTML = ""
                appendData(startData)

                dataReply()
                mixUp()
            }
        })
        console.log(num)

    })  
})
}


