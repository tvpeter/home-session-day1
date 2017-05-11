function findMinMax(ar) {
   min = max = ar[0];
  for (i=0; i<=ar.length; i++)
      if (Number(ar[i]) > max) {
      max = Number(ar[i]);
      } 
      
       for (i=0; i<=ar.length; i++)
      if (Number(ar[i]) < min) {
      min = Number(ar[i]);
      } 
      if (min === max){
        return [min];
      }else{
      return [min, max];
    }
}