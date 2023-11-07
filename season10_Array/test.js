// thực hành về mảng

const number = [1,2,3,4,5]

// console.log(number[0]);

for (let index = 0; index < number.length; index++) {
    console.log("vị trí" + index +"có giá trị là"+number[index]);
    
}

for (let index of number) {
    console.log("vị trí"+[index-1]+"có giá trị "+number[index-1]);

}

//thực hành về mảng không dùng reverse();


let x =[-3,5,1,7,4,5,90]
let first =0;
let last =x.length-1;
while (first < last) {
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
 }


 //bài tập

 const animal=["lion","crab","rabbit","cat","dog"]
document.write(`"${animal.join(",")}"`)

 // chèn dấu - vào giữa số chẵn
function Numberchange() {
    let myNumber=prompt("nhập số vào")
 let str = myNumber.toString(); 
 let result = [str[0]]
 for (let i = 1; i < str.length; i++) {
        
    if ((str[i-1] % 2 === 0) && (str[i] %2 === 0)) 
    {
        result.push("-" ,str[i]);
    }else{
        result.push(str[i]);
    }

}
console.log(result.join(""));
}
 

//dịch

function trans() {
    const search = prompt("nhap vao ten tim kiem");
    const Vietnamese = ["heo", "tho", "meo", "cho", "ga","tớ cầu mình cận"];
    const English = ["pig", "rabbit", "cat", "dog", "chicken","tớ cần mình cậu"];

   let index = Vietnamese.indexOf(search);
   console.log(index,"vị trí");
   if (index != -1) {
    alert(English[index]);
   }else{
    alert("không tìm thấy")
   }
}