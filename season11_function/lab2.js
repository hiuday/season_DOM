
// const str= "abcba"
// function isPalindrome(a) {
//     //split làm cho từ chuỗi thành mảng
//     const arr = a.split("");
//   let newStr = ""
//     // So sánh chuỗi gốc và chuỗi đảo ngược
//      for (let i = arr.length -1; i>= 0 ; i--) {
//         newStr += arr[i]
        
//      }
//      console.log(newStr);
//      if (a == newStr) {
//       alert("là đối xứng")
//      }else{
//       alert("sai")
//      }
//   }


//  check từ phần tử trùng lặp trong mảng hay không
 // thầy làm
function checkFrequency(str) {
   // cắt chuỗi thành array
   const arr = str.split("");
   for (const word of arr) {
      let check = 0;
      for (const wordCheck of arr) {
         if (word === wordCheck) {
            check++;
         }
      }
      console.log(`"từ"${word} xuất hiện ${check} lần `);
   }
}
const text = "hello word"
checkFrequency(text);

    function Find(num1, num2, num3) {
   // Khởi tạo biến để lưu trữ số bé nhất
   let MinNumber = num1;
 
   // So sánh số 1 với số 2
   if (num2 < MinNumber) {
     MinNumber = num2;
   }
 
   // So sánh số 3 với số nhỏ nhất hiện tại
   if (num3 < MinNumber) {
     MinNumber = num3;
   }
 
   // Trả về số bé nhất
   return MinNumber;
 }
 // Nhập 3 số từ người dùng
 const num1 = Number(prompt("Nhập số thứ nhất: "));
 const num2 = Number(prompt("Nhập số thứ hai: "));
 const num3 = Number(prompt("Nhập số thứ ba: "));
 
 // Gọi hàm findMinNumber()
 const MinNumber = Find(num1, num2, num3);
 
 // Hiển thị kết quả
 console.log("Số bé nhất là " + MinNumber);


 //bài 4: tổng hợp kiểm tra số vừa nhập có phải là số nguyên tố không

 function isPrime(num) {
   if (num <=1) {
      return false;
   }
   for (let i = 2; i <= Math.SQRT(num); i++) {
      if (num % i === 0) {
         return false;
        }
      }
       return true;
   }
   // Nhập số từ người dùng
const num = Number(prompt("Nhập số: "));

// Gọi hàm isPrime()
const isPrime = isPrime(num);

// Hiển thị kết quả
if (isPrime) {
  console.log(num + " là số nguyên tố.");
} else {
  console.log(num + " không phải là số nguyên tố.");
}

// bài 4: 3 lặp các phần tử sau đó tổng của 2 phần từ bằng 10
 let arr =[1,2,3,4,5,6,7,8,9,10]
 function findPairs(arr) {
   // Khởi tạo mảng để lưu trữ các cặp số
   const double = [];
 
   // Duyệt qua các số trong mảng
   for (let i = 0; i < arr.length; i++) {
     // Duyệt qua các số còn lại trong mảng
     for (let j = i + 1; j < arr.length; j++) {
       // Nếu tổng của hai số bằng 10
       if (arr[i] + arr[j] === 10) {
         // Thêm cặp số vào mảng
         double.push([arr[i], arr[j]]);
       }
     }
   }
 
   // Trả về mảng các cặp số
   return double;
 }
 
 // Gọi hàm findPairs()
 const double = findPairs(arr);
 
 // Hiển thị kết quả
 console.log(double);

 //viết hàm năm nhuận 
 function isLeapYear(year) {
   // Nếu năm chia hết cho 4 nhưng không chia hết cho 100 thì là năm nhuận
   if (year % 4 === 0 && year % 100 !== 0) {
     return true;
   }
 
   // Hoặc nếu năm chia hết cho 400 thì là năm nhuận
   else if (year % 400 === 0) {
     return true;
   }
 
   // Ngược lại là năm không nhuận
   else {
     return false;
   }
 }
 
 // Nhập năm từ người dùng
 const year = Number(prompt("Nhập năm: "));
 
 // Gọi hàm isLeapYear()
 const isLeapYear = isLeapYear(year);
 
 // Hiển thị kết quả
 if (isLeapYear) {
   console.log(year + " là năm nhuận.");
 } else {
   console.log(year + " không phải là năm nhuận.");
 }
 
//bài 4 câu 5 tìm giai thừa của 1 số nguyên bất kì
 function factorial(n) {
   // Nếu n = 0 thì giai thừa của n là 1
   if (n === 0) {
     return 1;
   }
 
   // Ngược lại, giai thừa của n là tích của n và giai thừa của n - 1
   else {
     return n * factorial(n - 1);
   }
 }
 
 // Nhập số nguyên từ người dùng
 const n = Number(prompt("Nhập số nguyên: "));
 
 // Gọi hàm factorial()
 const factorialResult = factorial(n);
 
 // Hiển thị kết quả
 console.log("Giai thừa của " + n + " là " + factorialResult);

 //bài 4 câu 6: hàm sort sắp xếp từ bé đến lớn
 function sortNumbers(numbers) {
   // Khởi tạo mảng tạm để lưu trữ các số đã được sắp xếp
   const sortedNumbers = [];
 
   // Duyệt qua các số trong chuỗi
   for (const number of numbers) {
     // Thêm số vào mảng tạm
     sortedNumbers.push(number);
   }
 
   // Sắp xếp mảng tạm
   sortedNumbers.sort((a, b) => a - b);
 
   // Trả về mảng đã được sắp xếp
   return sortedNumbers;
 }
 
 // Nhập chuỗi số từ người dùng
 const numbers = prompt("Nhập chuỗi số: ");
 
 // Gọi hàm sortNumbers()
 const sortedNumbers = sortNumbers(numbers);
 
 // Hiển thị kết quả
 console.log("Chuỗi số sau khi sắp xếp: " + sortedNumbers);
 function sortedNumbers(numbers) {
   const sortedNumbers = [];
   for (const number of numbers){
      sortedNumbers.push(number)
   }
   
 }