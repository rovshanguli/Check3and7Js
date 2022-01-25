"use strict";
let a = 21;
let b = 37;
function check(num) {
    if (num % 3 == 0 && num % 7 == 0) {
        console.log("3 ve 7ye bolunur");
    } else {
        console.log("3 ve ya 7ye bolunmur");
    }
}
check(a);
check(b);