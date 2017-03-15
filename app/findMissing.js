module.exports = {
	findMissing :function (arr1, arr2){
  var sum1 = 0;
  var sum2 = 0;
	for (var i = 0; i <arr1.length; i++) {
	  sum1 += arr1[i]; 
	}
	for (var j = 0; j < arr2.length; j++) {	
    sum2 +=arr2[j];
	}
	var missing = sum2 - sum1;
	return missing
  }
}