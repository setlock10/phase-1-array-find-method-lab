// code your solution here
function superbowlWin(data){

   console.log( data.find(isWin));
   if (data.find(isWin)==undefined)
    return undefined;
    else
   return data.find(isWin).year;

   // const ans =data.find(isWin);
  //  return ans.year;

     //return data.find(isWin);

//      if(record.find(isWin)==undefined)
//    return undefined;
//    else
//    return data.year;



   // if (ans.result)
    //    return ans.year;


    // return record.find(isWin);
    // else
    // return record.find(isWin).year;


};


function isWin(record){
  //  console.log (record.year+" "+record.result);

       if (record.result=='W'){
 
            console.log (record.year);
             return record.year;
        }
//     return record.result=='W';
    
    
}


// const record = [
//     { year: "2018", result: "N/A"},
//     { year: "2017", result: "N/A"},
//     { year: "2016", result: "N/A"},
//     { year: "2015", result: "W"},

//   ]