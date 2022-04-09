
const arr = [1, 2, 3, -1, -2, -3]

function checkingNumbers (arr) {
    let checkedArr = []
    let i
    for (i = 0; i <= arr.length; i++) {
        if (typeof arr[i] === "number") {
            checkedArr.push(arr[i])
        }   else if (typeof arr[i] === "string") {
            return console.log("Insert numbers")
        }
    }
    if (arr.length === 0 || typeof arr[i] === "string") {
        // alert("Insert numbers in array")
        return console.log("Insert numbers")
    }
    console.log(positiveNumbers(arr))
}

function positiveNumbers (arr) {
    const funcArr = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            funcArr.push(arr[i])
        }
    }
    if (funcArr.length >= 1) {
        return funcArr
    }   else if (funcArr.length === 0) {
        return null
    }
}

checkingNumbers(arr)
checkingNumbers(-1, -2, -3)
checkingNumbers([-1, 2, -3, 4, -5, 6])
checkingNumbers([])
checkingNumbers([null, "a", "*", "i", undefined])

// function positiveNumbers (arr) {
//     const funcArr = []
//     if (arr.length === 0) {
//         alert("array is empty")
//     }   else {
//         for (let i = 0; i <= arr.length; i++) {
//             if (arr[i] > 0) {
//                 funcArr.push(arr[i])
//                 // console.log("В цикле нет положительных чисел")
//             }
//         }
//         // функция и цикл уже есть для проверки полож. чисел, проверить положительные числа консоль логом?
//         if (funcArr.length >= 1) {
//             return funcArr
//         }   else if (funcArr.length === 0) {
//             return null
//         }
//     }
// }

// console.log(positiveNumbers(arr))
// console.log(positiveNumbers(-1, -2, -3))