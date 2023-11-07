
function score() {
    const Math = Number(prompt("nhập điểm toán"));
const Physics = Number(prompt("nhập điểm lý"));
const Chemistry = Number(prompt("nhập điểm hoá"));
let Average =(Math + Physics + Chemistry)/3;

console.log(Average);
document.write("Có phải là học sinh giỏi không ",Average > 8)
}
function money(){
    const USD =Number(prompt("Nhập tiền đô"));
    const VND = USD*23000;
    console.log(VND);
    document.write("Số tiền tương ứng là",VND);
}

function hello(){
    const hi = alert("wellcome to Rikkei Academy")
    console.log(hi);
}
function age() {
    const age = prompt("mời bạn nhập số tuổi")
    document.write("Số tuổi của bạn",age)
}
function age2() {
    const year = confirm("bạn đã đủ 18 tuổi chưa")
    console.log(year);
}
function myName() {
    const FirstName = prompt("họ");
    const LastName = prompt("tên");
    const FullName = (FirstName+LastName)
    document.write("tên đầy đủ của bạn",FullName)
}
function myFunction() {
    let a = 1;
    let b = 2;
    
    a=a+b;//a=1+2=3
    b=a-b;//b=3-2=1
    a=a-b;//a=3-1=2
    console.log(a,b);
}
function ConfirmNumber(){
let a = "alo";

document.write( typeof a ,a);
console.log(typeof a );
}
function ConfirmBoolean(){
    let isStudent = true;
    document.write( typeof isStudent);

}
function Count(){
    let a = Number(prompt("nhập a"));
    let b = Number(prompt("nhập b"));
    const sum = a+b;
    const minus = a-b;
    const core = a*b;
    const divide = a%b;
    document.write(" tổng a,b",sum ," Hiệu a,b",minus ," Nhân a,b",core," Chia a,b",divide);
}

function change() {
    let x = Number(prompt("Nhập x"));
    let y = Number(prompt("Nhập y"));
    
    x=x+y;//a=1+2=3
    y=x-y;//b=3-2=1
    x=x-y;//a=3-1=2
    console.log(x,y);
}
function circle(){
    let radius = Number(prompt("Nhập bán kính"));
    const area = (2*radius) * Math.PI;
    document.write("diện tích hình tròn" ,area) 
}
function divide() {
    let a = Number(prompt("Nhập a"))
   
    
if (a%2 == 0) {
    document.write(a%2,"là số chẵn")
}else{
    document.write( a,"là số lẻ")
}

}