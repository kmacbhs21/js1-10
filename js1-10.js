//1-10

function sleep_in(weekday,vacation) {
    var sleep_in = true;

    if(weekday == false || vacation == true){
        return true;
    }
    return false;

}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == true && b_smile == true) {
        return true;
    }
    if(a_smile == false && b_smile == false){
        return true;
    }
    return false;
}
//3

//add 2-10 below here...
function string_times(Hi,num){
    var Hi2 = "";
    for(var i = 0; i < num; i++){

        Hi2 += Hi;
    }
    return Hi2;
}
//4
function front_times(word,num){
    var word2 = word.substring(0,3);
    var z = word2;
    if(num > 0 ) {
        for (var i = 1; i < num; i++) {
            z = z + word2;
        }
    }else{
        return "";
    }
    return (z);
}
//5
function string_bits(str){
    var name = "";
    for(var i = 0; i < str.length; i = i + 2){
        if(i % 2 == 0){
            name += str.substring(i,i + 1)
        }
    }
    return name;
}
//6
function caughtSpeeding(speed,bDay) {
    var smallTicket = 1;
    var noTicket = 0;
    var bigTicket = 2;
    while(true){
        if(bDay == true){
            speed = speed - 5
        }
        if (speed <= 60) {
            return noTicket;
        }
        if (speed >= 61 && speed <= 80) {
            return smallTicket;
        } else {
            if (speed >= 81) {
                return bigTicket;
            }
        }
    }
}
//7
function fizz_buzz(num){

    if(num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz";
    }
    else if(num % 3 == 0){
        return "Fizz";
    }
    else if(num % 5 == 0){
        return "Buzz";
    }
    else {
        return num + "!";
    }
}
//8
function teaParty(tea,candy) {
    var bad = 0;
    var good = 1;
    var great = 2;
    if(candy < 5 || tea < 5){
        return bad;
    }
    else if((tea / 2) >= candy || (candy / 2) >= tea ){
        return great;
    }
    else {
        return good;
    }
}
//9
function blackjack(num1,num2){
    if(num1 > 21 && num2 > 21){
        return 0;
    }else if(num1 > num2 && num1 <= 21){
        return num1;
    }else if(num2 > num1 && num2 <= 21){
        return num2;
    }else if(num1 > num2 && num1 >=21){
        return num2;
    }else if(num2 >  num1 && num2>= 21){
        return num1;
    }
}
// 10
function loneSum(int1,int2,int3) {
    if(int1 == int2 && int1 == int3 && int3 == int2){
        return 0;
    }else if(int1 == int2){
        return int3;
    }else if(int1 == int3) {
        return int2;
    }else if(int2 == int3){
        return int1;
    }else{
        return int1 + int2 + int3;
    }

}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
    //test third method, etc
}

