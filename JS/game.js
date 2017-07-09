<script type="text/javascript" >
document.getElementById("music2").play();
	var print = true;
	var arr = [];
	var arr2=[];
	document.getElementById("fire").play(); 
	$('.ingr').click(function (){
		setTimeout(function(){
		document.getElementById("water").play(); 
 },4000);

	var element = $(this).text();

	if (arr.includes(element)) {
		}else{arr.push(element);}
		console.log(arr);

	$('.ingr').click(function (){

		$(this).animate({left: "690px", top: '490px'}, 150);


});


	$('button').click(function (){
		var temp;
		var el =[];
		var myLen = arr.length;
		var temp , el1 , el2 , el3 ,el4 , el5;
		var arr2=[];

		for (var i = 0; i < myLen*300; i++) {
			var rand=Math.floor(Math.random()*myLen);
			var rand2=Math.floor(Math.random()*myLen);
			temp = arr[rand2];
			arr[rand2]=arr[rand];
			arr[rand] = temp;
		if (arr2.includes(arr.join())) {}
			else{
			

		switch(myLen){
			case 2:
			 //console.log('elements 2');
			el1 =arr[0].split('  ')
			el2 =arr[1].split('  ')
      		  if (el1[1]!==el2[1]){
		 		arr2.push(arr.join());
		 }
        break;
   			 case 3:
   			  //console.log('elements 3');
     		el1 =arr[0].split('  ')
			el2 =arr[1].split('  ')
			el3 =arr[2].split('  ')
      		  if (el1[1]!==el2[1] && el2[1]!==el3[1]){
		 		arr2.push(arr.join());
		 	}
        break;
  			  case 4:
  			  //console.log('elements 4');
     		el1 =arr[0].split('  ')
			el2 =arr[1].split('  ')
			el3 =arr[2].split('  ')
			el4 =arr[3].split('  ')
      		  if (el1[1]!==el2[1] && el2[1]!==el3[1] && el3[1]!==el4[1]){
		 		arr2.push(arr.join());
		 	}
        break;
        		 case 5:
  			  //console.log('elements 5');
     		el1 =arr[0].split('  ')
			el2 =arr[1].split('  ')
			el3 =arr[2].split('  ')
			el4 =arr[3].split('  ')
			el5 =arr[4].split('  ')
      		  if (el1[1]!==el2[1] && el2[1]!==el3[1] && el3[1]!==el4[1] && el4[1]!==el5[1]){
		 	     arr2.push(arr.join());
		 	}
        break;
        		 case 6:
  			  //console.log('elements 6');
     		el1 =arr[0].split('  ')
			el2 =arr[1].split('  ')
			el3 =arr[2].split('  ')
			el4 =arr[3].split('  ')
			el5 =arr[4].split('  ')
			el6 =arr[5].split('  ')
      		  if (el1[1]!==el2[1] && el2[1]!==el3[1] && el3[1]!==el4[1] && el4[1]!==el5[1] && el5[1]!==el6[1]){
		 		arr2.push(arr.join());
		 	}
        break;
        		 case 7:
  			  //console.log('elements 7');
     		el1 =arr[0].split('  ')
			el2 =arr[1].split('  ')
			el3 =arr[2].split('  ')
			el4 =arr[3].split('  ')
			el5 =arr[4].split('  ')
			el6 =arr[5].split('  ')
			el7 =arr[6].split('  ')
      		  if (el1[1]!==el2[1] && el2[1]!==el3[1] && el3[1]!==el4[1] && el4[1]!==el5[1] && el5[1]!==el6[1]&& el6[1]!==el7[1]){
		 	      arr2.push(arr.join());
		 	}
        break;
        		 case 8:
  			  //console.log('elements 8');
     		el1 =arr[0].split('  ')
			el2 =arr[1].split('  ')
			el3 =arr[2].split('  ')
			el4 =arr[3].split('  ')
			el5 =arr[4].split('  ')
			el6 =arr[5].split('  ')
			el7 =arr[6].split('  ')
			el8 =arr[7].split('  ')
      		  if (el1[1]!==el2[1] && el2[1]!==el3[1] && el3[1]!==el4[1]&& el4[1]!==el5[1] && el5[1]!==el6[1]&& el6[1]!==el7[1]&& el7[1]!==el8[1]){
		 	     arr2.push(arr.join());
		 	}
        break;
        		 case 9:
  			  //console.log('elements 9');
     		el1 =arr[0].split('  ')
			el2 =arr[1].split('  ')
			el3 =arr[2].split('  ')
			el4 =arr[3].split('  ')
			el5 =arr[4].split('  ')
			el6 =arr[5].split('  ')
			el7 =arr[6].split('  ')
			el8 =arr[7].split('  ')
			el9 =arr[8].split('  ')
      		  if (el1[1]!==el2[1] && el2[1]!==el3[1] && el3[1]!==el4[1]&& el4[1]!==el5[1] && el5[1]!==el6[1]&& el6[1]!==el7[1]&& el7[1]!==el8[1]&& el8[1]!==el9[1]){
		 		arr2.push(arr.join());
		 	}
        break;
        		 case 10:
  			  console.log('elements 10');
     		el1 =arr[0].split('  ')
			el2 =arr[1].split('  ')
			el3 =arr[2].split('  ')
			el4 =arr[3].split('  ')
			el5 =arr[4].split('  ')
			el6 =arr[5].split('  ')
			el7 =arr[6].split('  ')
			el8 =arr[7].split('  ')
			el9 =arr[8].split('  ')
			el10 =arr[9].split('  ')
      		  if (el1[1]!==el2[1] && el2[1]!==el3[1] && el3[1]!==el4[1]&& el4[1]!==el5[1] &&el5[1]!==el6[1]&& el6[1]!==el7[1]&& el7[1]!==el8[1]&& el8[1]!==el9[1]&& el9[1]!==el10[1]){
		 		  arr2.push(arr.join());
		 	}
        break;
		}
		
		}
	}





		if (print) {
			for (var i = 0; i < 30; i++) {
			console.log(arr2[i]);
}
		var len = arr2.length;
		$('#result').text('Ти удължи съществуването на света с ' +len+ ' дни !!!');
		print=false;
}


		$('id').fadeIn(1000);
});
});

</script>