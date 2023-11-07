

function score(){
    let Math = Number(prompt("Nhập điểm toán"))
    let Physics = Number(prompt("Nhập điểm lý"))
    let Chemytric = Number(prompt("Nhập điểm hoá"))

    const count = (Math + Physics + Chemytric)/3

    if (count < 5) {
        document.write("Học sinh yếu")
    }else if(count >=5 && count <= 7){
document.write("học sinh khá")
    }else{
        document.write("học sinh giỏi")
    }
}
function max(){
    let a = Number(prompt("nhập số a"))
    let b = Number(prompt("nhập số b"))
    let c = Number(prompt("nhập số c"))
 if(a > b && a>c){
    document.write("số a lớn nhất")
 }else if (b>c && b>a){
    document.write("số b lớn nhất")
 }else{
    document.write(" số c lớn nhất")
 }

}
function MyAge(){
    let age = Number(prompt("Nhập tuổi"))

    if(age <18){
        alert("Bạn dưới 18 tuổi")
    }else{
        alert("Bạn trên 18 tuổi")
    }
}
function BMI(){
        const weight = Number(prompt("nhap can nang"));
        const height = Number(prompt("nhap chieu cao"));
      
        const BMI = (weight / (height * height)).toFixed(1);
        let level = "";
        let type = "";
        console.log(BMI);
     
      
        if (BMI < 18.5) {
          type = "can nang thap (gay)";
        } else if (BMI > 18.5 && BMI <= 24.9) {
          type = "can nang binh thuong";
        } else {
          type = "thua can";
        }
      
        if (BMI > 25 && BMI <= 29.9) {
          level = "tien bao phi ";
        } else if (BMI >= 30 && BMI <= 34.9) {
          level = "beo phi do 1";
        } else if (BMI >= 35 && BMI <= 39.9) {
          level = "beo phi do 2";
        } else {
          level = "beo phi do 3";
        }
       if (BMI >= 25) {
      document.write =
        ("BMI cua ban la " + BMI + "va phan loai" + type + "cap do :" + level);
    } else {
      document.write =
        ("BMI cua ban la " + BMI + "va phan loai" + type + "cap do :" + level);
    }
    console.log(BMI,type,level);
}

    function month() {
        let num = Number(prompt("Nhập số"))
        switch (num) {
            case 1:
                document.write( num ,"có 31 ngày")
                break;
             case 2:
                document.write(num, "có 28 ngày")
            break;
            case 3:
                document.write(num,"có 31 ngày")
                break;
            case 4:
                document.write(num,"có 30 ngày")    
                break;
            case 5:
                document.write(num,"có 31 ngày")    
                break;
            case 6:
                document.write(num,"có 30 ngày")    
                break;
            case 7:
                document.write(num,"có 31 ngày")    
                break;
            case 8:
                document.write(num,"có 31 ngày")    
                break;            
             case 9:
                document.write(num,"có 30 ngày")    
                break;
             case 10:
                document.write(num,"có 31 ngày")    
                break;
            case 11:
                document.write(num,"có 30 ngày")    
                break;
            case 12:
                document.write(num,"có 31 ngày")    
                break;
                default:
                    alert("vui lòng nhâp từ tháng 1- tháng 12")
                    break;
        }
    }
    function zodiac() {
        const day = Number(prompt("nhập ngày"));
        const month = Number(prompt("nhập tháng"));
      
        const resultElement = document.querySelector("#zodiac");
        let type = "";
        let imgzodiac = "";
      
        if (
          (month == 3 && 21 <= day && day <= 30) ||
          (month == 4 && 1 <= day <= 19)
        ) {
          type = "bạch dương";
          imgzodiac = "aries";
        } else if (
          (month == 4 && 20 <= day && day <= 30) ||
          (month == 5 && 1 <= day && day <= 20)
        ) {
          type = "kim ngưu";
          imgzodiac = "taurus";
        } else if (
          (month == 5 && 21 <= day && day <= 30) ||
          (month == 6 && 1 <= day && day <= 21)
        ) {
          type = " song tử";
          imgzodiac = "geminius";
        } else if (
          (month == 6 && 22 <= day && day <= 30) ||
          (month == 7 && 1 <= day && day <= 22)
        ) {
          type = "cự giải";
          imgzodiac = "cancer";
        } else if (
          (month == 7 && 23 <= day && day <= 30) ||
          (month == 8 && 1 <= day && day <= 22)
        ) {
          type = "cung sư tử";
          imgzodiac = "leo";
        } else if (
          (month == 8 && 23 <= day && day <= 30) ||
          (month == 9 && 1 <= day && day <= 22)
        ) {
          type = "cung xữ nữ";
          imgzodiac = "virgo";
        } else if (
          (month == 9 && 23 <= day && day <= 30) ||
          (month == 10 && 1 <= day && day <= 23)
        ) {
          type = "cung thiên bình";
          imgzodiac = "libra";
        } else if (
          (month == 10 && 24 <= day && day <= 30) ||
          (month == 11 && 1 <= day && day <= 21)
        ) {
          type = "cung bò cạp";
          imgzodiac = "escorpio";
        } else if (
          (month == 11 && 22 <= day && day <= 30) ||
          (month == 12 && 1 <= day && day <= 21)
        ) {
          type = "cung nhân mã";
          imgzodiac = "sagitarius";
        } else if (
          (month == 12 && 22 <= day && day <= 30) ||
          (month == 1 && 1 <= day && day <= 19)
        ) {
          type = "cung ma kết";
          imgzodiac = "capricorn";
        } else if (
          (month == 1 && 20 <= day && day <= 30) ||
          (month == 2 && 1 <= day && day <= 18)
        ) {
          type = "cung bảo bình";
          imgzodiac = "aquarius";
        } else if (
          (month == 2 && 19 <= day && day <= 30) ||
          (month == 3 && 1 <= day && day <= 20)
        ) {
          type = "cung song ngư";
          imgzodiac = "pisces";
        }
      resultElement.innerHTML = `<p> bạn thuộc  ${type}<img src="./img/${imgzodiac}.png" alt="ảnh cung hoàng đạo"/></p>`;
       
      }
   
  