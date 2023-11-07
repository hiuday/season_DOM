
function nhan() {
    document.write("<table border=1 width=100%>")
    for(i=1;i<=9;i++)   
    {
	document.write("<br>")
    for(j=1;j<=9;j++) {
        document.write( "|"+j+ "x" + i +"="+ (j*i) +"|");
     }  
    
    }

}
function perfect() {
    // so hoan hao --> tong cac uoc bang chinh no
    const number = Number(prompt("Nhập một số dương để kiểm tra "));
  
    const resultElement = document.querySelector("#perfect");
    if (number < 1) {
      alert("không phải là 1 số hoàn hảo");
      return;
    }
    let sum = 0;
    // không lấy chính number % chính nó

    for (let i = 0; i < number; i++) {
      if (number % i == 0) {
        //lúc này i là ước của N
        sum += i; //cộng các ước lại với nhau và bằng Number
      }
    }
    if (sum === number) {
    console.log(sum,"ok");   resultElement.innerHTML = "<p> số đã cho là số hoàn hảo</p>";
    } else {
      console.log(sum,"ko ok"); resultElement.innerHTML = "<p> số đã cho không phải là số hoàn hảo</p>";
    }
  }
  function fizzbuzz() {
    for (let i = 0; i <= 100; i++) {
       if (i % 3 == 0 && i%5== 0) {
      console.log("FizzBuzz");
    }else if (i%3==0) {
      console.log("fizz");
    }else if (i%5==0) {
      console.log("buzz");
    }else{
      console.log(i);
    }
      
    }
   
  }
  function pow() {
    const N = Number(prompt("nhap so N"));
    if (N < 2 || N > 100) {
      alert("vui lòng nhập lại");
     } else {
      for (let i = 2; i <= N; i++) {
        if ((i * i) % 2 == 0) {
          console.log(` bình phương của ${i} chia hết cho  2`);
        }
      }
    }
  }
  function factorial() {
    
 
      const number = Number(prompt("nhap mot so duong de kiem tra giai thua"));
    
      if (number < 1) {
        alert(`${number} bang 1`);
        return;
      }
      let factorial = 1;
      for (let i = 1; i <= number; i++) {
        factorial *= i;
      }
      console.log(factorial);
    }
  
  function rengtale() {
    let n = 10;
    let str ="";
    for (let i = 1;i<=n; i++) {
      for (let j = 1; j <=i; j++) {
        str += "*";
        
      }
      str += "\n"
      
    }
    console.log(str);
  }
  function rengtale1() {
    let u = 10;
    let str ="";
    //tạo sao cho 1 hàng j của tam giác
    for (let i = u; i >=1; --i) {
      // j:tạo hàng cho tam giác 
      for (let j = 1; j <= i; ++j) {
        str += "*";
        
      }
      str+="\n"
      
    }
    console.log(str);
  }
  function rengtale2() {
    const height = +prompt("Nhập vào chiều cao")
    for (let i = height; i >= 0; i--) {
        let result = ""

        for (let k = 0; k <= height - i; k++) {
            result += " "
        }

        for (let j = 1; j <= i; j++) {
            result += "*"
        }
        console.log(result);
    }
  }
  function rengtale3() {
    const height = +prompt("Nhập vào chiều cao")
    for (let i = height; i >= 0; i--) {
        let result = ""

        for (let k = 0; k <= height - i; k++) {
            result += " "
        }

        for (let j = 1; j <= i; j++) {
            result += "*"
        }
        console.log(result);
  }
  }

function fibonaci() {
    let a = 0;
    let b = 1;
    let c = 0;
    let count = 0;
    while (count < 21) {
        console.log(a, "fibo");
        c = a + b; // 1
        a = b; // 1
        b = c; // 1
        count++;
    }
}
function total(){


const TOTAL_ALLOW_INPUT_TIME = 3;
  const guessNumber = Math.floor(Math.random() * 10) + 1;
  let countInputTimes = 0;
  do {
    const number = Number(
      prompt(
        `nhap so   (ban con ${TOTAL_ALLOW_INPUT_TIME - countInputTimes} luot)`
      )
    );
    

    if (!number) {
      alert("Game over!");
      break;
    }

    if (number === guessNumber) {
      alert("You won! Game over");
      break;
    }
    countInputTimes++;
    alert(`${number} <  guessNumber  `);
  } while (countInputTimes < TOTAL_ALLOW_INPUT_TIME);

  if (countInputTimes >= TOTAL_ALLOW_INPUT_TIME) {
    alert("Your lost! Game over");
  }
}
function money() {
  const revenue = Number(prompt("nhap vao doanh thu"));

  const resultElement = document.querySelector("#result_14");
  let profit = "";
  if (revenue <= 10000000) {
    profit = (revenue * 3) / 100;
  } else if (revenue >= 1000001 && revenue <= 10000000) {
    profit = (revenue * 3) / 100 + (revenue * 5) / 100;
  } else if (revenue >= 10000001 && revenue <= 50000000) {
    profit = (revenue * 3) / 100 + (revenue * 5) / 100 + (revenue * 5) / 100;
  }
  console.log(resultElement);
  resultElement.innerHTML = "hoa hong cua ban thang nay la :" + profit;
}
function number() {
  const a = Number(prompt("nhap vao a"));
  const b = Number(prompt("nhap vao b"));

  let c = "";
  switch (c) {
    case 1:
      a == 0;
      b == 0;
      console.log(c, "phuong trinnh có nghiệm");
      break;
    case 2:
      a == 0;
      b !== 0;
      console.log(c, "phuong trinnh vo nghiem");
      break;
    case 3:
      a !== 0;
      console.log(c, "phuong trinnh có nghiệm la" + -b / a);
    default:
      break;
  }
}
function year() {
  const year = Number(prompt("nhap vao mot nam"));
  let isLeapyear = false;
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        isLeapyear = true;
       }
    } else {
      isLeapyear = true;
      
    }
  }
  if (isLeapyear) {
    console.log(year+"là năm nhuận");
  }else{
console.log(year+"là năm không nhuận");
  }
}



