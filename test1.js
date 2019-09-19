
// let arr = [2,4,9,5,5,7,10] d = 2
const pairTheChopsTics = (arr,d)=>{
    let Pair = [];
    for(let i = 0 ; i < arr.length ; i++){
        if((arr[i] - arr[i+1]) <= d){
            Pair.push(arr[i]);
            Pair.push(arr[i+1]);
            arr.splice(i,2);
            i = -1
        } else{

        }
    }
}