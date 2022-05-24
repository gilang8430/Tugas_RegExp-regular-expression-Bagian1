function panggilRequlerReqex(){
  let str = "1abcdefghijklmnopqrstuvwxyz-a b c d e f g h i j k  m n o p q r s t u v w x y z"

  var ambilData = str.match(/[c]/g);
  var ambilData2 = str.match(/[k]/g);
  var ambilData3 = str.match(/[1,l]/g);

  console.log(ambilData);
  console.log(ambilData2);
  console.log(ambilData3);
}

panggilRequlerReqex();
