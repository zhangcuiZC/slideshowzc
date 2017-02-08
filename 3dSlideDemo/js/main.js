$(function(){
	var degree=0,
		$rightarrow=$(".rightarrow"),
		$leftarrow=$(".leftarrow"),
		$box=$(".box");

	$rightarrow.click(function(event) {
		degree-=90;
		if(Math.abs(degree)===360){
			degree=0;
		}
		$box.css('transform', "rotateY("+degree+"deg)");
	});

	$leftarrow.click(function(event) {
		degree+=90;
		if(Math.abs(degree)===360){
			degree=0;
		}
		$box.css('transform', "rotateY("+degree+"deg)");
	});
});