import data from "./data.json" assert{type:'json'}

var {comments}=data


// Working on localStorage

localStorage.setItem('InteractiveCmts', JSON.stringify(comments))



let startData = JSON.parse(localStorage.getItem('InteractiveCmts')) 
appendData(startData)

function appendData(startData,dell){

    const main=document.querySelector(".data-show-from-js")
    startData.forEach((comment)=>{
    main.innerHTML+=createMessage(comment)

    let repliesBox = document.querySelector(`#list-replies_${comment.id}`)
    if(comment.replies.length > 0){
        comment.replies.forEach((singleReply) => {
            if(singleReply.content.length > 0){

                repliesBox.innerHTML += createMessage(singleReply)
            }
        })
    }
})

}




function createMessage(singleCmtData) {
    if(singleCmtData.user.username == "juliusomo"){
        return (`<div>
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
                <div class="">
                    <span class="edit-icon ${singleCmtData.id}">
                        <img src="./images/icon-edit.svg" alt="">
                    </span>
                    <span class="delete-icon ${singleCmtData.id}">
                        <img src="./images/icon-delete.svg" alt="">
                    </span>
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
                    <input type="text" class="add-cmt-inp" id="add-cmt${singleCmtData.id}" placeholder="Add reply here">
                </div>
                <div class="post-button-box">
                    <button class="button-9 ${singleCmtData.id}" id="send-btn" >Send</button>
                </div>
        </div>
        <div id="list-replies_${singleCmtData.id}" class="list-replies"></div>
    
    </div>`)
    }
    else{

    
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
                    <input type="text" class="add-cmt-inp" id="add-cmt${singleCmtData.id}" placeholder="Add reply here">
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
}


dataReply()
newCmtAdd()
replyBoxOn()
like()
disLike()


function like(){

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
}

function disLike(){

    const minusBtn =document.querySelectorAll(".minus-btn")

    minusBtn.forEach((btn) => {
        btn.addEventListener("click",()=>{
            let classnum=btn.classList[1]
            let score = document.querySelector(`#like-count${classnum}`).innerHTML
            // console.log(score)
            document.querySelector(`#like-count${classnum}`).innerHTML = parseInt(score) - 1
        })
        
    })
    }
    


function replyBoxOn(){

    let replyBtns = document.querySelectorAll('.reply-box')

replyBtns.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        let btnclass=btn.classList[1]
        let replyBox = document.querySelectorAll('.none')
        let replyBoxList = replyBox.classList
        replyBox.forEach(e=>{
            let classnum=e.classList
            classnum.forEach((ele)=>{
                if(ele===btnclass){
                    let commentBox=document.querySelector(`#reply-box${ele}`)
                    commentBox.className = `post-cmt-box ${ele}`
                }
            })
        })

    })


})
dataReply()

}


function dataReply(){

    let sendBtns = document.querySelectorAll('.button-9')

    sendBtns.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            let num =  btn.classList[1]
            let commentBox=document.querySelector(`#reply-box${num}`)
            
            let newData = JSON.parse(localStorage.getItem('InteractiveCmts')) || []
            newData.forEach((cmt)=>{
            if(cmt.id == num){
                let replyObj = {
                    "id" : Math.round((Math.random()) * 100) + 5,
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
                
                localStorage.setItem("InteractiveCmts", JSON.stringify(newData))

                document.querySelector('.data-show-from-js').innerHTML = ""
                appendData(newData)
                replyBoxOn()
                like()
                disLike()
                deletCmt()
                // dataReply()
            }

        })
    })  
})
}


function newCmtAdd(){
  
    let addCmtBtn = document.querySelector('#send-btn-cmt')
    addCmtBtn.addEventListener("click", ()=> {
        let startData = JSON.parse(localStorage.getItem('InteractiveCmts')) || []


        let replyObjCmt = {
            "id" : Math.round((Math.random()) * 100) + 5,
            "content" : document.querySelector('.add-new-cmt-inp').value,
            "createdAt" : "2 days ago",
            "score" : Math.round((Math.random()) * 100),
            "replies": [],
            "user" :{
                "image": { 
                    "png": "./images/avatars/image-juliusomo.png",
                    "webp": "./images/avatars/image-juliusomo.webp"
                },
                "username" : data.currentUser.username ,
            }
        }
        startData.push(replyObjCmt)
        localStorage.setItem("InteractiveCmts", JSON.stringify(startData))
        document.querySelector('.data-show-from-js').innerHTML = ""
        appendData(startData)
        
        replyBoxOn()
        like()
        disLike()
        deletCmt()
    })
}


function deletCmt(){
    let deleteIcon = document.querySelectorAll('.delete-icon')

    deleteIcon.forEach((del) => {
        del.addEventListener('click', ()=>{
            let storageData = JSON.parse(localStorage.getItem('InteractiveCmts')) || []
            let id = del.classList[1]
            console.log(id)
                let newData = storageData.filter((ele) => {
                     
                        if(ele.replies.length>0){
                           let arr= ele.replies.filter(e=>{
                                if(e.id!=id){
                                    return e
                                }
                            })
                            ele.replies=arr
                        }
                        if(ele.id!=id){
                            return ele
                        }
                        
                        
                        
                })
            localStorage.setItem("InteractiveCmts", JSON.stringify(newData))

                document.querySelector('.data-show-from-js').innerHTML = ""
                appendData(newData)
                
                dataReply()
                replyBoxOn()
                like()
                disLike()
                deletCmt()

        })
   })

}
