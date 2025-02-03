//find and output (console) the index of a character 'g' in an array of characters arr, if it exists

//let arr=['a', 'b', 'c','d','e', 'f','g'];//index of the array is never equals the length of the array.
//function solveProblem(inputs){
   // let result;
   // let arr=inputs;
    
  //  for(let i=0; i<arr.length; i++){
  //  if(arr[i]=='g')
 //   result=i;
//}
//return result;
//}
//solveProblem([1,2,'g']);

    //for(let j=-1; j>-10;j--){
    //    console.log('hi from negative:', j)
   // };


//Exercise: Given a string: 'wslaoqushdasasdoqsdasda'. Count the total number of character 'a' in it, and output it.
   
    function solveProblem(allString, charToCompare){
    let result=0;
    
    for(let i=0; i<allString.length; i++){
        if(allString[i]==charToCompare){
            result=result+1; //result++;
        }
    }
    return result;
   }

   console.log(solveProblem('wslaoqushdasasdoqsdasda', 'a'));

   let i=1;
   while(i<=10) {
    console.log('iteration#', i);
    i++;
   }


   //You are given a word (string) and check if its palindrome (civic, radar, level). Output if it's true or false.

   function isPalindrome(string){
    let i=0;
    while (i<stringth.length/>2){
        if(string(i)!==string[string.length-1-i]){
            result= false;
            return console.log(result)
        }
    }
    result=true;
    return result;
   }
   console.log(isPalindrome('kayak'))