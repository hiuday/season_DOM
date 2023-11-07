
const MainList=document.getElementById("ul");

const arr=[]
function cre() {
    const button = prompt("nhập công việc")
arr.push(button)
MainList.innerHTML = ""
for (let index in arr) {
   
        MainList.innerHTML+=` <div class="main-list"><p>${arr[index]}</p><button>Hoàn thành</button><button onclick="deleteClick()">Xoá</button></div> `
    }
}

function deleteClick() {

    
 
        const input = +prompt("nhập vào vị trí muốn xoá")
        delete arr[input]
    
        list.innerHTML = ""
        for (let index in arr) {
            list.innerHTML += `<li>${arr[index]}</li>`
        }
    }
    
    
    
   

