let numbers = [parseInt(prompt("Enter Number"))];

let result = numbers.every((value) => {
    return value % 2 === 0;
});
 console.log("Even Number", result);
 alert("Even Number", result);


