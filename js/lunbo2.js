function (){
	var wheelBox=$('.wheel-box')[0]
   var imgs=$('img',$('.img')[0])
   // alert(imgs.length)
  
   var lis=$('li',$('.list1')[0]);
   var lbtn=$('.left')[0];
   var rbtn=$('.right')[0];

   var iw=parseInt(getStyle(imgs[0],'width'));
  
   // imgs[0].style.left=0 



var index=0;
var next=0;


 var t=setInterval(move,2000)
  function move(){
   	next++;
   	if (next==imgs.length) {next=0};
   	for (var i = 0; i < lis.length; i++) {
        	lis[i].className="";
        };
	lis[next].className='hot';
   	
   	imgs[next].style.left=iw+'px';
   
   	animate(imgs[index],{left:-iw},500)
   	animate(imgs[next],{left:0},500)
   	index=next;
   }

wheelBox.onmouseover=function(){
    clearInterval(t)
}
wheelBox.onmouseout=function(){
	t=setInterval(move,2000)
}



}