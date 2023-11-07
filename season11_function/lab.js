
function lab_01() {
    alert("xin chao")
}

function lab_02() {
    const num = 10;
    const result = increaseNumber(num);

    // In kết quả ra console
    console.log(result);

    // Hiển thị kết quả lên màn hình
    document.innerHTML += "<p>Kết quả: " + result + "</p>";
}

// Khởi tạo mảng các ngôi sao
const stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];

// Khởi tạo mảng các chòm sao
const constellations = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

// Tạo hàm tìm chòm sao
function lab_03(star) {
  // Duyệt qua mảng các ngôi sao
  for (let i = 0; i < stars.length; i++) {
    // Nếu tìm thấy ngôi sao
    if (stars[i] === star) {
      // Trả về tên chòm sao tương ứng
      return constellations[i];
    }
  }

  // Nếu không tìm thấy ngôi sao nào
  return "Không tìm thấy ngôi sao nào";
}

// Nhập tên ngôi sao từ người dùng
const starName = prompt("Nhập tên ngôi sao: ");

// Gọi hàm lab_03()
const constellation = lab_03(starName);

// Hiển thị kết quả
console.log("Chòm sao của ngôi sao " + starName + " là " + constellation);


   function addNumbers() {
       firstNum = 4;
       secondNum = 8;
       result = firstNum + secondNum;
      
       return result;
   }
   result = 0;
   result = addNumbers();
   

   function calculateSum(num1, num2) {
    // Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai
    if (num1 > num2) {
      // Hiển thị hộp thoại thông báo cho người dùng
      alert("Giá trị của tham số thứ nhất lớn hơn tham số thứ hai.");
    } else {
      // Trả về tổng của hai tham số
      return num1 + num2;
    }
  }
