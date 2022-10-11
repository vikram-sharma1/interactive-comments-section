

async function fetchData(){
    const response = await fetch('./data.json')
const jsonData = await response.json()
// console.log(jsonData.comments)

jsonData.comments.map((singleCmtData)=>{
    document.querySelector('.data-show-from-js').innerHTML += createMessage(singleCmtData)
})


}

fetchData()

function createMessage(singleCmtData) {
    // let name = singleCmtData.user.username
    // console.log(name)
  return (`
      <div>
      <div class="comment-box">
        <div class="like-box">
            <div  class='plus-btn'>
                <img src="./images/icon-plus.svg" alt="icon-plus" width="40%">
            </div>
            <div>
                <p class="like-count">${singleCmtData.score}</p>
            </div>
            <div>
                <img src="./images/icon-minus.svg" class='minus-btn' alt="icon-minus" width="40%">
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
                <div class="reply-box">
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
    <div class="post-cmt-box" style="display:none">
                <div class="post-img-box">
                    <img src="./images/avatars/image-juliusomo.png" alt="image-juliusomo" width="80%">
                </div>
                <div class="post-input-box">
                    <input type="text" class="add-cmt-inp" placeholder="Add comment here">
                </div>
                <div class="post-button-box">
                    <button class="button-9">Send</button>
                </div>
        </div>
    </div>
    
    `)
}




// function counter(check){
//     console.log(check)
//     let num = document.querySelector('.like-count').innerHTML
//     console.log(num)
//     if(check == 'plus'){
//         let newNum = parseInt(num) +1 
//         document.querySelector('.like-count').innerHTML = newNum
//     }
//     else{
//         let newNum = parseInt(num) - 1 
//         document.querySelector('.like-count').innerHTML = newNum
//     }
// }

// let demo = document.querySelector('.data-show-from-js')
// console.log(null)


let btns=document.querySelectorAll(".plus-btn")
console.log(btns)


// btns.forEach((btn)=>{

//     btn.addEventListner('click',()=>{
//         console.log("hello")
//     })
// })


  