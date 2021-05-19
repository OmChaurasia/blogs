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
    bloglist.innerHTML=html
    
    
 
}
function get_option(){
    let option= document.getElementById("search").value
    for (i = 0; i < data.length; i++) {
        if(data[i].title==option){
            window.open(data[i].file)
            // window.open(data[i].file,"_self")
        }
    }
}
function set_option(){
    let html=""
    for (i = 0; i < data.length; i++) {
        html=`${html} <option value="${data[i].title}"></option>`
    }
    let datalist= document.getElementById("listblogs");
    datalist.innerHTML=html
}
set_option()
all()

function GetSelectedTextValue(cate) {
    let option=cate.value
    let html = ""
    let bloglist = document.getElementById('blogs');
    
    if(option=="All"){
    
        all();
    }
    else{
        for (i = 0; i < data.length; i++) {
            if (data[i].categ==option){
            html = `${html} <div class="boxs box1"><div class="boximg"><img src="${data[i].img}" alt=""></div><div class="boxbottom"><p>${data[i].des}</p><a href=" ${data[i].file} "><button>View</button></a><div class="timestamp">${data[i].categ}</div></div></div>`;
            }
        }
        bloglist.innerHTML=html;
    }

    
}

