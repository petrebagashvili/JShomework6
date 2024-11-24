let passwords = [];
passwords.push("password1", "pass", "password3");
console.log(passwords);
// let lowerPaswords = passwords.toLowerCase();
// console.log(lowerPaswords);
for (let i = 0; i  < passwords.length ;i++) {
    if (passwords[i].length >= 8 ) {
        console.log(`strong password`);
    } else {
        console.log(`weak password`);
    }
    
}
let i = 0;
let counter = 0;
for (let b = 0; b < passwords[0].length ; b++) {
    if (passwords[i].charAt(b) == "0") {
        counter+=0;
    } else if (passwords[i].charAt(b) == "1"){
        counter+=0;
    }else if (passwords[i].charAt(b) == "2"){
        counter+=0;
    }else if (passwords[i].charAt(b) == "3"){
        counter+=0;
    }else if (passwords[i].charAt(b) == "4"){
        counter+=0;
    }else if (passwords[i].charAt(b) == "5"){
        counter+=0;
    }else if (passwords[i].charAt(b) == "6"){
        counter+=0;
    }else if (passwords[i].charAt(b) == "7"){
        counter+=0;
    }else if (passwords[i].charAt(b) == "8"){   
        counter+=0;
    }else if (passwords[i].charAt(b) == "9"){    
        counter+=0;
    }else {
        counter++;
    }
}
console.log(`first password contains : ${counter}`);


let counter2 = 0;
for (let c = 0; c < passwords[1].length ; c++) {
    if (passwords[i].charAt(c) == "0") {
        counter2+=0;
    } else if (passwords[i].charAt(c) == "1"){
        counter2+=0;
    }else if (passwords[i].charAt(c) == "2"){
        counter2+=0;
    }else if (passwords[i].charAt(c) == "3"){
        counter2+=0;
    }else if (passwords[i].charAt(c) == "4"){
        counter2+=0;
    }else if (passwords[i].charAt(c) == "5"){
        counter2+=0;
    }else if (passwords[i].charAt(c) == "6"){
        counter2+=0;
    }else if (passwords[i].charAt(c) == "7"){
        counter2+=0;
    }else if (passwords[i].charAt(c) == "8"){   
        counter2+=0;
    }else if (passwords[i].charAt(c) == "9"){    
        counter2+=0;

    }else {
        counter2++;
    }
}
console.log(`second password contains : ${counter2}`);


let counter1 = 0;
for (let j = 0; j < passwords[2].length ; j++) {
    if (passwords[i].charAt(j) == "0") {
        counter1+=0;
    } else if (passwords[i].charAt(j) == "1"){
        counter1+=0;
    }else if (passwords[i].charAt(j) == "2"){
        counter1+=0;
    }else if (passwords[i].charAt(j) == "3"){
        counter1+=0;
    }else if (passwords[i].charAt(j) == "4"){
        counter1+=0;
    }else if (passwords[i].charAt(j) == "5"){
        counter1+=0;
    }else if (passwords[i].charAt(j) == "6"){
        counter1+=0;
    }else if (passwords[i].charAt(j) == "7"){
        counter1+=0;
    }else if (passwords[i].charAt(j) == "8"){   
        counter1+=0;
    }else if (passwords[i].charAt(j) == "9"){    
        counter1+=0;
    }else {
        counter1++;
    }
}
console.log(`third password contains : ${counter1}`);


passwords.shift();
console.log(passwords);
passwords.unshift("password0")
console.log("updated pass : " , passwords);