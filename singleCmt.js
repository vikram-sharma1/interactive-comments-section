export default function singleCmt(){
    return(`<div class="comment-box">
    <div class="like-box">
        <div>
            <img src="./images/icon-plus.svg" alt="icon-plus" width="40%">
        </div>
        <div>
            <p class="like-count">1</p>
        </div>
        <div>
            <img src="./images/icon-minus.svg" alt="icon-minus" width="40%">
        </div>
    </div>
    <div class="user-cmt-box">
        <div class="user-detail-box">
            <div class="img-name-date-box">
                <div class="img-box">
                    <img src="./images/avatars/image-amyrobson.png" alt="amyrobson" width="80%">
                </div>
                <div class="user-name-box">
                    <span>amyrobson</span><span class="month-ago">1 month ago</span>
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
            <p class="user-cmt">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."</p>
        </div>
    </div>
</div>`)
}