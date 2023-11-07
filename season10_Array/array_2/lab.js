const Arr = [1, 2, 3, 4, 5, 6, 7]

//forEach() lặp qua từng phần tử và k trả về gì hết , truyền vào 1 function (element,index)
//forEach function k có return
Arr.forEach(function (element, index) {
    console.log(index + ":" + element); 
})

//map() lặp qua từng phần tử nhưng sẽ trả về 1 mảng mới k làm ảnh hưởng tới mảng cũ
//cú pháp giống y forEach() nhưng có return

const num2 = Arr.map(function(element,index){
    if(element % 2== 0) {
        return element * 2
    }else {
        return element
    }
})
console.log("map array",num2);

//filter() lặp qua từng phần tử và trả về mảng mới giống map nhưng có điều kiện k làm ảnh hưởng mảng cũ
// cú pháp giống y map()

const evenArray = Arr.filter(function(element,index){
    return element % 2 == 0
})

console.log("mảng chẵn" , evenArray);
const oddArray = Arr.filter(function (element,index) {
    return element % 2 !== 0;
})
console.log("mảnh lẻ",oddArray);
//every() nó sẽ lặp qua và trả về true/false theo điều kiện
//cú pháp giống mấy th trên

const isCheckEveryNumber = Arr.every(function(element,index){
    return element > 1
})

console.log(isCheckEveryNumber);
//some() nó sẽ giống every() nhưng ngược lại là chỉ cần 1 element thoả mãn điều kiện

const isCheckSomeNumber = Arr.some(function(element,index){
    return element > 1
})

console.log(isCheckSomeNumber);

//find() sẽ lặp qua kiểm tra điều kiện và trả element đúng với điều kiện (tìm thấy thằng đầu tiên thoả điều kiện và kết thúc vòng lặp)
//cú pháp giống vs filter()

const findElment = Arr.find(function(element,index){
    return element % 2 == 0
})

console.log(findElment);


//bài 1
// Khởi tạo mảng số nguyên gồm 10 phần tử
function lab_01() {
    const arr = [11,8,5,2,20,6,50,90,29,1];

// Nhập các phần tử của mảng
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
}

// Sử dụng phương thức filter() để tạo mảng mới chỉ chứa các phần tử lớn hơn hoặc bằng 10
const arrLargerThan10 = arr.filter((element) => element >= 10);

// Hiển thị kết quả
console.log("Có " + arrLargerThan10.length + " số nguyên lớn hơn hoặc bằng 10.");
}


// bài 2
// Khởi tạo mảng số nguyên gồm 10 phần tử
function lab_02() {
    const arr = ["","","","","","","","","",""];

// Nhập các phần tử của mảng
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
}

// Khởi tạo biến lưu giá trị lớn nhất và vị trí của phần tử đó
let max = arr[0];
let index = 0;

// Duyệt qua mảng
for (let i = 0; i < arr.length; i++) {
  // Nếu phần tử hiện tại lớn hơn giá trị lớn nhất hiện tại, thì cập nhật giá trị lớn nhất và vị trí của nó
  if (arr[i] > max) {
    max = arr[i];
    index = i;
  }
}

// Hiển thị kết quả
console.log("Phần tử có giá trị lớn nhất là " + max + " ở vị trí thứ " + (index + 1));
}


function lab_03() {
    // Khởi tạo mảng số nguyên
const arr = [];

// Nhập các phần tử của mảng
for (let i = 0; i < 10; i++) {
  arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
}

// Khởi tạo biến lưu giá trị lớn nhất và giá trị trung bình
let max = arr[0];
let sum = 0;

// Duyệt qua mảng
for (let i = 0; i < arr.length; i++) {
  // Nếu phần tử hiện tại lớn hơn giá trị lớn nhất hiện tại, thì cập nhật giá trị lớn nhất
  if (arr[i] > max) {
    max = arr[i];
  }

  // Tính tổng các phần tử trong mảng
  sum += arr[i];
}

// Tính giá trị trung bình
const avg = sum / arr.length;

// Hiển thị kết quả
console.log("Giá trị lớn nhất trong mảng là " + max);
console.log("Giá trị trung bình của các phần tử trong mảng là " + avg);
}
function lab_04() {
    // Khởi tạo mảng số nguyên
const arr = [];

// Nhập các phần tử của mảng
for (let i = 0; i < 10; i++) {
  arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
}

// Khởi tạo mảng mới để lưu các phần tử đã đảo ngược
const arrReversed = [];

// Duyệt qua mảng từ cuối lên đầu
for (let i = arr.length - 1; i >= 0; i--) {
  // Thêm phần tử hiện tại vào mảng mới
  arrReversed.push(arr[i]);
}

// Hiển thị kết quả
console.log("Mảng đã đảo ngược: " + arrReversed);
}

function lab_05() {
    // Khởi tạo biến đếm số nguyên âm
let count = 0;

// Nhập chuỗi
const str = prompt("Nhập chuỗi: ");

// Duyệt qua chuỗi
for (let i = 0; i < str.length; i++) {
  // Nếu phần tử hiện tại là một số nguyên âm, thì tăng biến đếm lên 1
  if (Number(str[i]) < 0) {
    count++;
  }
}

// Hiển thị kết quả
console.log("Có " + count + " số nguyên âm trong chuỗi.");
}


function lab_06() {
    // Khởi tạo mảng số nguyên
const arr = [];

// Nhập các phần tử của mảng
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
}

// Nhập số cần tìm
const num = Number(prompt("Nhập số cần tìm: "));

// Tìm kiếm số cần tìm trong mảng
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    found = true;
    break;
  }
}

// Hiển thị kết quả
if (found) {
  console.log("Number " + num + " is in the array");
} else {
  console.log("Number " + num + " is not in the array");
}
}

function lab_07() {
    // Khởi tạo mảng số nguyên
const arr = [];

// Nhập các phần tử của mảng
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
}

// Nhập số cần xóa
const num = Number(prompt("Nhập số cần xóa: "));

// Tìm kiếm số cần xóa trong mảng
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    found = true;
    break;
  }
}

// Nếu tìm thấy, thì xóa số đó khỏi mảng
if (found) {
  arr.splice(i, 1);
}

// Hiển thị kết quả
console.log("Mảng sau khi xóa: " + arr);
}
function lab_08() {
    // Khởi tạo mảng số nguyên
const arr = [];

// Nhập các phần tử của mảng
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ": "));
}

// Sắp xếp mảng theo thứ tự giảm dần
arr.sort((a, b) => b - a);

// Hiển thị kết quả
console.log("Mảng đã được sắp xếp theo thứ tự giảm dần: " + arr);
}

function lab_09() {
    // Khởi tạo mảng ký tự
const arr = ["a", "-", "b", "c", "-"];

// Duyệt qua mảng
for (let i = 0; i < arr.length; i++) {
  // Nếu phần tử hiện tại là (-)
  if (arr[i] === "-") {
    // Thay thế bằng ký tự ( _ )
    arr[i] = "_";
  }
}

// Hiển thị kết quả
console.log(arr);
}
//bài 6 luyện tập 2
function lab_10() {
    // Khởi tạo mảng ký tự
const arr = ["a", "-", "b", "c", "-"];

// Duyệt qua mảng
for (let i = 0; i < arr.length; i++) {
  // Nếu phần tử hiện tại là (-)
  if (arr[i] === "-") {
    // Thay thế bằng ký tự ( _ )
    arr[i] = "_";
  }
}

// Hiển thị kết quả
console.log(arr);
}


function lab_11() {
  
}