function chzDwflb(chzWulb){
				
				var chzLbhz=$(".chz-lbhz",chzWulb)[0];
				var chzlbxhzs=$(".chz-lbxhz",chzLbhz);
				var imw=chzlbxhzs[0].offsetWidth;
				var chzLby=$(".chz-lby",chzWulb)[0];
				var chzLbz=$(".chz-lbz",chzWulb)[0];
				
				
				chzlbxhzs[0].style.left=0;
				
				var index=0;
				var next=0;
				var t=setInterval(chznflb,1000)
				function chznflb(){
					next++;
					if(next==chzlbxhzs.length){
						next=0;
					}
					chzlbxhzs[next].style.left=imw+"px";
					animate(chzlbxhzs[index],{left:-imw});
					animate(chzlbxhzs[next],{left:0});
					
					index=next;
				}
				chzWulb.onmouseover=function(){
					clearInterval(t);
				}
				chzWulb.onmouseout=function(){
					t=setInterval(chznflb,1000)
				}
				chzLby.onclick=function(){
					chznflb();
				}
				chzLbz.onclick=function(){
					next--;
					if(next==-1){
						next=chzlbxhzs.length-1;
					}
					chzlbxhzs[next].style.left=-imw+"px";
					animate(chzlbxhzs[index],{left:imw});
					animate(chzlbxhzs[next],{left:0});
					
					index=next;
				}
}
