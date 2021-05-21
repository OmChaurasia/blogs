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

function searchdata(val){
    val=val.toLowerCase()
    // console.log(val)
    let html=""
    for (i = 0; i < data.length; i++) {
        title=data[i].title.toLowerCase()
        des=data[i].des.toLowerCase()
        categ=data[i].categ.toLowerCase()
        let str=`${title} ${des} ${categ}`
        // console.log(str)
        if(str.indexOf(val) > -1){
            html=`${html} <div class="boxs box1"><div class="boximg"><img src="${data[i].img}" alt=""></div><div class="boxbottom"><p>${data[i].des}</p><a href=" ${data[i].file} "><button>View</button></a><div class="timestamp">${data[i].categ}</div></div></div>`;
        
        }


    }
    if(html==""){
        console.log("No blogs related to val")
        document.getElementById("blogs").innerHTML=`No blogs related to "${val}""`;
    }else{

        document.getElementById("blogs").innerHTML=html;
    }
}

let geturl = window.location.search;

if (geturl!=""){
    document.getElementById("jumbo").style.display="None";
    document.getElementById("filter").style.display="None";
    geturl=geturl.slice(1);

    geturl=geturl.replace(/=/g,`":"`)
    geturl=geturl.replace(/&/g,`","`)
    geturl=geturl.replace("+"," ")
    
    
    
    geturl=`{"${geturl}"}`
    geturl=JSON.parse(geturl)
   
    searchdata(geturl.search)
}
