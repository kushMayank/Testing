
// input : "Hi, How r u?. I am fine"
// output: 4

function getNumOfString(A) {
    let arr = A.split(".");
    let maxlength = 0;
    arr.map((list) => {
        let arr1 = list.split(" ");
        let filtered = arr1.filter((list) => list);
        if (maxlength <= filtered.length) {
            maxlength = filtered.length;
        }
    });
    console.log("max length", maxlength)
    return maxlength;
}

let str = "Hi, How r u?. I am fine bhbc jbdhj jhdj jbdj"
// getNumOfString(str);


// Iterable vs Enumerable in JavaScript
let name = ['mayank', 'ankit', 'akki', 'mike'];
name.address = 'gkp'
// console.log("name", name);
Object.defineProperty(name, 'state', { value: 'UP', enumerable: true });
// console.log("name", name);

for (let property in name) {
    // console.log("-->", property);
}
let details = {
    'name': ['mayank', 'ankit'],
    'address': ['gkp', 'Hyd']
}

Object.defineProperty(details, 'profession', {
    value: 'Engineer',
    enumerable: true
})

// for(let p in details){
//     // console.log("==>", p);
// }

// for (let p of details){
//     console.log("==>", p)
// } 


//Iterator & Generator

function* genny() {
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
    // return 'f'
}

const geen = genny();
// console.log("geen", geen.next( ));
// console.log("geen", geen.next( ))
// console.log("geen", geen.next( ))
// console.log("geen", geen.next( ))
// console.log("geen", geen.next( ))


let companyDetails = {
    'name': 'peoplelink',
    'address': 'hyd',
    'year': 2019,
}

// for(p of companyDetails){
//     console.log("p",p )
// }

//---------------------------------------------------//
// sum of the number untill get the single didgit


const getSingleDigit = (num) => {
    let sum = 0;
    while (num > 0 || sum > 9) {
        if (num == 0) {
            num = sum;
            sum = 0;
        }
        sum += Math.floor(num) % 10;
        num /= 10;
    }
    return sum;
}

// console.log(getSingleDigit(8287387));



//---------------------------------------------------//


// find if the the given string is the sub sequemnce of the given string


function ifSubSequenceOrNot(string1, string2) {
    let stringArr = string1.split('');
    let subString = string2.split('');
    let index;
    subString.map((char) => {
        index = stringArr.indexOf(char);

    })
}



//---------------------------------------------------//


//closer POC


const closurePoc = () => {
    this.fname = "mayank";
    let lname = "kushwaha";

    return function () {
        // console.log(`My name is ${this.fname} ${lname}`)
    }
}
// const g = closurePoc();
// console.log(closurePoc().bind(closurePoc));
closurePoc()()


//closure

function makeAdder(x) {
    return function (y) {
        return x + y
    }
}


const add3 = makeAdder(3);
// console.log("=>",add3(2))


//---------------------------------------------------//


// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.


const getTheNumberOfDeletionRequired = (s) => {
    let stringArr = s.split('');
    let count = 0;
    let preNode = stringArr[0];
    let length = stringArr.length;
    for (let i = 1; i <= stringArr.length; i++) {
        if (preNode === stringArr[i]) {
            // stringArr.splice(i,1);
            count = count + 1;
            preNode = stringArr[i]
            // continue;
        } else {
            preNode = stringArr[i]
            // continue;
        }
    }

    return count
}
//AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

// console.log("==>", getTheNumberOfDeletionRequired('AAABBB'))

//---------------------------------------------------//


const isValid = (s) => {
    const ç = s.split('');
    if (stringArr.length === 0) {
        return 'No'
    } else if (stringArr.length <= 3) {
        return 'Yes'
    }

    for (let i = 0; i < stringArr.length; i++) {

    }

}


//-----------------------------------------------------//

const superReduceString = (s) => {
    let strArr = s.split('');
    // for(let i = 0 ; i< strArr.length ; i++){
    //     console.log("strArr",strArr,i)
    //     if( strArr[i] === strArr[i+1]){
    //         console.log("-",i,strArr)
    //         strArr.splice(i,2);
    //         i = -1;
    //         continue;
    //     }
    // }


    let w = 0;
    while (w < strArr.length) {
        if (strArr[w] === strArr[w + 1]) {
            console.log("-", w, strArr)
            strArr.splice(w, 2);
            w = -1;
            continue;
        }
        w++
    }
    if (strArr.length === 0) {
        return 'Empty string'
    } else {
        return strArr.join('')
    }
}

// console.log("-->",superReduceString('llsjjdddggabbballs'))



//==================================================//

// find the number of words in camele case string

const findTheNumberOfWord = (s) => {
    let strArr = s.split('');
    let i = 0;
    let count = 0;
    if (strArr.length < 1) {
        return 'Zero'
    } else {
        count = count + 1
    }
    while (i < strArr.length) {
        if (strArr[i].toUpperCase() == strArr[i]) {
            console.log("egere")
            count = count + 1;
        }
        i++
    }

    return count
}

// console.log("****>",findTheNumberOfWord('howRhU'))



//===========================================//


function twoCharacters(s) {

    let strArr = s.split('');
    console.log("===strArr", strArr)

    let set = new Set(strArr);
    console.log("===set", set)
    let newArr = [...set]
    console.log("===setaerr", newArr)


}

// console.log("===>", twoCharacters('fjdfhjhhhdjdjjdj'))


//=============================================//

const caesarCipher = (s, k) => {
    let arrString = s.split('');
    let i = arrString.length - 1;
    let newArr = []
    while (i !== -1) {
        if (/^([a-zA-Z])$/.test(arrString[i])) {
            console.log("here-", arrString[i])
            if (arrString[i] === arrString[i].toUpperCase()) {
                newArr.unshift(String.fromCharCode(((arrString[i].charCodeAt(0) - 64 + k) % 26) + 64));
            } else {
                newArr.unshift(String.fromCharCode(((arrString[i].charCodeAt(0) - 97 + k) % 26) + 97));
            }
            i--;
        }
        else {
            newArr.unshift(arrString[i]);
            i--;
        }
    }
    return newArr.join('')
}

// console.log("==>", caesarCipher('Hello_World!', 2))


//   Who Wins Between Array

// arr1 = [3,4,5,6,3,2,4];
// arr2 = [2,6,5,5,3,2,8];
// str = "odd"/"even"

const whoWins = (arr1, arr2, str) => {
    let diff = 0;
    if (str == "odd") {
        for (let i = 1; i <= arr1.length / 2; i++) {
            diff = diff + arr1[i] - arr2[i];
            i++;
        }
    } else {
        for (let i = 0; i <= arr1.length / 2; i++) {
            diff = diff + arr1[i] - arr2[i];
            i++;
        }
    }
    if (diff < 0) {
        return "arr2 Wins"
    } else {
        return "arr1 Wins"
    }

}
console.log(whoWins([1, 2, 8, 4], [2, 3, 4, 5], 'even'));

//Strong Password

function strongPassword(n, password) {
    if (password.length < 6) {
        return 6 - password.length
    } else {
        if (/^(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{6,}$/.test)
    }

}


