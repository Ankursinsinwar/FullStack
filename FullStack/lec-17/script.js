var arr = [1,2,3,4,5,6,7,8];
alert(arr);
let e = prompt(arr);
arr.push(e);
alert(arr)

let i = prompt('index');
let r = prompt('remove');
let c = prompt('no.of element to add');
for (j=0;j<c;j++){

    let a = prompt('add');
    arr.splice(i++,r,a);
}

alert(arr);



