function all() {
    let html = ""
    let bloglist = document.getElementById('blogs');
    for (i = 0; i < data.length; i++) {
        
        html = `${html} <div class="boxs box1">
    <div class="boximg">
       <img src="${data[i].img}" alt="">
    </div>
    <div class="boxbottom">
        <p>
            ${data[i].des}
        </p>
        <a href=" ${data[i].file} "><button>View</button></a>
        <div class="timestamp">
            ${data[i].categ}
        </div>
    </div></div>`;

    }
    bloglist.innerHTML=html;

    
}

function GetSelectedTextValue(cate) {
    let option=cate.value
    let html = ""
    let bloglist = document.getElementById('blogs');
    for (i = 0; i < data.length; i++) {
    if (data[i].categ==option){
        html = `${html} <div class="boxs box1">
    <div class="boximg">
       <img src="${data[i].img}" alt="">
    </div>
    <div class="boxbottom">
        <p>
            ${data[i].des}
        </p>
        <a href=" ${data[i].file} "><button>View</button></a>
        <div class="timestamp">
            ${data[i].categ}
        </div>
    </div></div>`;
    }
    }
    bloglist.innerHTML=html;

    
}
all()
