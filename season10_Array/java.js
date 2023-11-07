// khai báo 1 mảng => từ khoá khai báo + tên mảng = []
// Phần tử của mảng có thể lưu trữ bất kì dữ liệu nào
// Phần tử :element  
//chỉ số:index
// ví dụ:

const number=[1,23,5,51,213]
//cách truy xuất đến mảng
//đi đến địa chỉ của index 0
document.write(number[0]) 
// đi đến địa chỉ chiều dài của mảng với N-1
document.write(number[number.length -1])

// phân biệt 2 for of và for in
//for of:lấy giá trị của mảng;lặp qua và truy xuất ra element(giá trị)
for (let element of number) {
    console.log(element);
}
// for in: lặp qua và truy xuất ra vị trí của index (0,1,2,3,4,5)
for (let index in number) {
console.log(index+"for in");
    }
// for thường: lặp qua for thường và có điều kiện là bé hơn độ dài của mảng
for (let i = 0; i < number.length; i++) {
      console.log(">>>>>",number[i]);
    
}    
//Push: Thêm phần tử vào vị trí cuối cùng của mảng
number.push(30)
console.log(number,">>push");

// join(): sẽ biến đổi mảng thành kiểu string và nối lại với nhau,mặc định là dấu phẩy
console.log(number.join("--")); 

//reverse() sẽ đảo ngược mảng 
console.log(number.reverse().join("/"));

//sort() sắp xếp mảng                        
console.log(number.sort());

//concat() là để nối mảng

const a=[1,2,3]
const b= [4,5,6]
a.concat(b)
console.log(a.concat(b),"<><><>");
console.log(a);
//phân biệt concat và push
//concat: là nối 2 mảng với nhau và tạo mảng mới mà không thay đổi mảng a
//push: cũng là nối 2 mảng và thay đổi cả mảng a

// pop():để xoá phần tử cuối cùng và lấy ra phần đó => sẽ làm thay đổi  

