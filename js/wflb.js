function chzDwflb(){
	
	
	
	
				var tusjj=$(".disanhang-lbox",dshbgj);
				console.log(tusjj)
				tusjj[0].style.left=0;
				var indexdsh=0;
				var next=0;
				var dshleft=$(".dshzzz",dshbgj)[0];
				var dshright=$(".dshyyy",dshbgj)[0];
				var t=setInterval(mmove,1000)
				
				function mmove(){
					next++;
					if(next==tusjj.length){
						next=0;
					}
					
					
					tusjj[next].style.left=167+"px";
					animate(tusjj[indexdsh],{left:-167})
					animate(tusjj[next],{left:0})
					indexdsh=next;
				}
				dshbgj.onmouseover=function(){
					clearInterval(t)
				}
				dshbgj.onmouseout=function(){
					t=setInterval(mmove,1000)
				}
				
				dshleft.onclick=function(){
					
					next--;
					if(next==-1){
						next=tusjj.length-1;
					}
				
					tusjj[next].style.left=-167+"px";
					animate(tusjj[indexdsh],{left:167})
					animate(tusjj[next],{left:0})
					indexdsh=next;
				}
				dshright.onclick=function(){
					mmove();
				}
}
