// import data from "./data.json" assert{type:'json'}
// console.log(data)


function createMessage(e) {
  return `<div class="comment-box">
    <div class="like-box">
        <div>
            <img src="./images/icon-plus.svg" alt="icon-plus" width="40%">
        </div>
        <div>
            <p class="like-count">${e.score}</p>
        </div>
        <div>
            <img src="./images/icon-minus.svg" alt="icon-minus" width="40%">
        </div>
    </div>
    <div class="user-cmt-box">
        <div class="user-detail-box">
            <div class="img-name-date-box">
                <div class="img-box">
                    <img src=${e.user.image.png} alt="${e.username}" width="80%">
                </div>
                <div class="user-name-box">
                    <span>${e.user.username}</span><span class="month-ago">${e.createdAt}</span>
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
            <p class="user-cmt">${e.content}</p>
        </div>
    </div>
</div>`
}

fetch('./data.json')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    // console.log(data)

    data.comments.map((singleCmtData) => {
    //   console.log(singleCmtData)

      document.querySelector('.data-show-from-js').innerHTML += createMessage(singleCmtData)
    })
  })
  .catch((err) => {
    console.log(err)
  })

