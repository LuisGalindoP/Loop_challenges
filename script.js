for (var i = 1; i < 21; i++) {  //1. log all odd values from 1 to 20
    if (i % 2 != 0) {
        console.log(i);
    }
}

for (var i = 100; i > 0; i--) {     //2. log all the values evenly divisible by 3 from 100 donw to 0
    if (i % 3 == 0) {
        console.log(i);
    }
}

for (var i = 4; i >= -3.5; i-= 1.5) {   //3. log this sequence 4, 2.5, 1, -0.5, -2, -3.5
    console.log(i);
}

var sum = 0;
var i = 0;                            //4. add values from 1 to 100 and log the total 
while (i < 101) {
    sum += i;
    i++;
}
console.log(sum);

var product = 1;                        //5. multiple all the numbers from 1 to 12 and log the result
for (var i = 1; i < 13; i++) {
    product *= i;
}
console.log(product);