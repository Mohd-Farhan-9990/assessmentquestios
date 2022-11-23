//Q.2 You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
// N= 10, K = 9
//Arr = [1,2,3,4,5,6,7,8,9,10]
//after K rotations
//Arr = [4,5,6,7,8,9,10,1,2,3]
let arr =[1,2,3,4,5,6,7,8,9,10]
let k = 9
for(let i=0; i<k; i++){
    arr[arr.length]=arr[i]
}
let newArr = []
for(let i=0; i<arr.length-k; i++){
    newArr[i]= arr[i+k]
}

console.log(newArr)

//Q.1 Create a function that takes a number as an input and returns the
//number in words( without using third-party packages).
//Range 1-1000(both number inclusive)
//For example
//Input -555 Output - FIve hundred and fifty five
//Input -560 Output - FIve hundred and sixty
let n = 999
let inttochar = function(n){
    let ones = ['One','two','three','four','five','six','seven','eight','nine']
    let arr = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventenn','eighteen','nineteen']
    let tens = ['ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']
    let hundred = ['one hundred','two hundred','three hundre','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred']

    let len = n.toString().length
    let res = ""
    if(n==0){
        return "zero"
    }
    if(len==1){
        res +=ones[n-1]
        return res
    }
    if(len==2){
        let x = n%10
        let y = Math.floor(n/10)
        if(y==1){
            res += arr[x-1]
        }
        if(y!=0 && y>1){
        res += tens[y-1]
        }
        if(x!=0 &&y>1){
                    res+=" "+ones[x-1]
        }
        return res

    }
    if(len ==3){
        let x = n%10
        
        let z=Math.floor(n/100)
        let a = z*100
        let y = Math.floor((n-a)/10)
        res+=hundred[z-1]
        if(y!=0 && y>1){
        res +=" and "+ tens[y-1]
        }else if(y==1){
            res +=" "+arr[x-1]
        }
        if(x!=0 && y>1){
                    res+=" "+ones[x-1]
        }else if(x!=0 && y==0){
            res += " " +ones[x-1]
        }
        
        return res

    }


    
}
console.log(inttochar(n))



