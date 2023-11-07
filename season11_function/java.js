function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}

let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);
// đo nhiệt độ
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}


//chuyển đổi chữ cái đầu thành chữ in hoa

function capitalize(str) {
    let words= str.toLowerCase().split("");
    for (let i = 0; i< words.length; i++) {
        words[0] = words[0].toUpperCase() + words[i].slice(1);

    }
return words.join("");

}
 
let a = "hello WORD";
let b = "rIkkEi acaDEMY";
console.log(capitalize(a)); // Hello word
console.log(capitalize(b)); // Rikkei Academy

// tính tổng của các mảng được nhập vào

function sum(array) {
    let sum = 0;
    for (let i = 0; i< array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  let arr = [1, 2, 3, 4, 5, 6]; 
  let arr2 = [10, 20, 30, 40, 50];
  let arr3 = [1, 3, 5, 7, 9];

  console.log(sum(arr)); // 21
  console.log(sum(arr2)); // 150
  console.log(sum(arr3)); // 25

    function celsiusToFahrenheit(celsius1) {
    let fahrenheit1 = celsius1 * 1.8 + 32;
    return fahrenheit1;
  }

  function fahrenheitToCelsius(fahrenheit1 ) {
    let celsius1 = (fahrenheit1 - 32) / 1.8 ;
    return celsius1 ;
  }

  console.log(celsiusToFahrenheit1(25)); // Kết quả: 77
console.log(fahrenheitToCelsius1(77)); // Kết quả: 25


  