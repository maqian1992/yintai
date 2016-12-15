// alert(1)
// $(function(){
        
//        var ones=getClass('commodity-right',document)
//        // alert(ones.length)
        
//         for (var i = 0; i < ones.length; i++) {
            
//             ones[i].onmouseover=function(){
//                 animate($('.bt',this)[0],{width:270},500)
//                 animate($('.bl',this)[0],{height:180},500)
//                 animate($('.br',this)[0],{height:180},500)
//                 animate($('.bb',this)[0],{width:270},500)

            
//             }
//              ones[i].onmouseout=function(){
//                 animate($('.bt',this)[0],{width:0},500)
//                 animate($('.bl',this)[0],{height:0},500)
//                 animate($('.br',this)[0],{height:0},500)
//                 animate($('.bb',this)[0],{width:0},500)}
//         };
        
//     })

window.onload=function(){
	var banner=getClass('banner',document);
    
    var rotate=getClass('rotate',banner[0]);
	var aimg=rotate[0].getElementsByTagName('a');
	


    var uls=getClass('uls',rotate[0]);
	var li=$('li',uls[0])
    // console.log(li)

	var botton=getClass('botton',rotate[0]);
	var left=getClass('left',botton[0]);
	var right=getClass('right',botton[0]);
	
    var index=0;
    aimg[0].style.zIndex=10;
    li[0].style.background="#e5004f";
    
    //轮播图
	var t=setInterval(k,1000)
	
	function k(){
		index++;
        if(index==aimg.length){index=0};  
        for(var i=0;i<aimg.length;i++){
		aimg[i].style.zIndex=0;
		li[i].style.background="";
	    }
		aimg[index].style.zIndex=10;
		li[index].style.background="#e5004f";
		}

	// 鼠标移入 图片停止
	rotate[0].onmouseover=function(){
        
			clearInterval(t)
	}
	rotate[0].onmouseout=function(){
			t=setInterval(k,2000)
	}
        
    
    //选项卡
    for(var i=0;i<li.length;i++){
    li[i].index=i;
	li[i].onmouseover=function(){
	    for(var j=0;j<li.length;j++){
			li[j].style.background="";
				aimg[j].style.zIndex=0;
	    }
	this.style.background='#e5004f';
	aimg[this.index].style.zIndex=30;
	index=this.index;
	}
	}




	// 切换图片
    right[0].onclick=function(){
    	index++;
    	if(index==aimg.length){
    		index=0;
    	}
    	for(var i=0;i<aimg.length;i++){
        aimg[i].style.zIndex=0;
        li[i].style.background="";
    	}
    	aimg[index].style.zIndex=40;
    	li[index].style.background='#e5004f';
    }
	
    // 和下边效果一样
    left[0].onclick=function(){
    	if(index<1){
    		index=aimg.length;
    	}
    	for(var i=0;i<aimg.length;i++){
        aimg[i].style.zIndex=0;
        li[i].style.background="";
    	}
    	aimg[index-1].style.zIndex=40;
    	li[index-1].style.background='red'; 
    	index--;   	
    }

    left[0].onclick=function(){
        index--; 
        if(index<0){
            index=aimg.length-1;
        }
        for(var i=0;i<aimg.length;i++){
        aimg[i].style.zIndex=0;
        li[i].style.background="";
        }
        aimg[index].style.zIndex=40;
        li[index].style.background='#e5004f'; 
    }

    
    right[0].onmouseover=function(){
        this.style.cursor="default"
    }
    left[0].onmouseover=function(){
    	this.style.cursor="default"
    }
  
   // for(var h=0;h<list.length;h++){
   //  list[h].onmouseover=function(){
   //    this.style.background='#e5004f';
   //  }
   //  list[h].onmouseout=function(){
   //    this.style.background='#333';
   //  }
   //  }


  



  var sixxxk=getClass('six-xxk',document);

    var link=getClass('link',sixxxk[0]);
    var a=link[0].getElementsByTagName('a');
    var lists=getClass('list',sixxxk[0]);
    var lis=$('li',$('.six-xxk',document)[0])

    lis[0].className="sanjiao";
   

    a[0].style.borderBottom="5px solid #e5004f"
    for(var i=0;i<a.length;i++){
        a[i].index=i;
        a[i].onmouseover=function(){
        //循环时，先将所以的隐藏，再将点击对应的list显示出来
          for(var j=0;j<lists.length;j++){
            lists[j].style.display="none";
            lis[j].className="";
            // a[j].style.background='transparent';
            a[j].style.borderBottom="5px solid black"
          }
            lists[this.index].style.display="block";
            this.style.borderBottom="5px solid #e5004f";
            lis[this.index].className="sanjiao";
        }

  
}

var wwa=getClass('www',document)

var qqq=getClass('qqq',document)
// console.log(qqq)
var lis2=$('li',$('.aa',document)[0])
// console.dir(lis2)

// var six-xxk=getClass('six-xxk',document)[0]
// alert(six-xxk.length)
// var xxk-left=getClass('xxk-left',six-xxk)[0]
// var link=getClass('link',xxk-left)[0]
wwa[0].style.borderBottom='3px solid  #e5004f'
lis2[0].className='sanjiao2'
for (var i = 0; i < wwa.length; i++) {
// lis[i].className="";
        
        wwa[i].index=i;
        // console.log(aa[i].index)
        wwa[i].onmouseover=function(){
            
            for (var j= 0; j< qqq.length; j++) {
                qqq[j].style.display='none';
                lis2[j].className='';
                
                wwa[j].style.background='transparent';
                // wwa[j].style.color='#ccc';
                // aa[j].style.fontSize='40px';
                wwa[j].style.borderBottom='3px solid black'
            };
            qqq[this.index].style.display='block';
            lis2[this.index].className='sanjiao2';
           

            // this.style.background='yellow';
            // this.style.color='blue';

            this.style.borderBottom='3px solid  #e5004f';
            
            // this.style.fontSize='60px';
           
        }
    };



      


      var ones=getClass('commodity-right-img',document)
       // alert(ones.length)
        
        for (var i = 0; i < ones.length; i++) {
            
            ones[i].onmouseover=function(){
                animate($('.bt',this)[0],{width:270},500)
                animate($('.bl',this)[0],{height:180},500)
                animate($('.br',this)[0],{height:180},500)
                animate($('.bb',this)[0],{width:270},500)

            
            }
             ones[i].onmouseout=function(){
                animate($('.bt',this)[0],{width:0},500)
                animate($('.bl',this)[0],{height:0},500)
                animate($('.br',this)[0],{height:0},500)
                animate($('.bb',this)[0],{width:0},500)}
        };
        


  // var hh=getClass('dakk',document);
  // var hs=$('.botton',document)[0];

  // var hl=$('.left',hs)
  // // console.dir(hl)


  // // console.dir(hl)

  //  hh.onmouseover=function(){
  //      hh[0].style.opacity=0.8
  //  }



// 中间
var wheelBox=$('.wheel-boxa')
for (var i = 0; i < wheelBox.length; i++) {
    ssa(wheelBox[i])
};

function ssa(wheelBox){

   var imgs=$('img',wheelBox)
   
   var liss=$('li',$('.list1',wheelBox)[0]);
   // console.dir(liss)
   var lbtn=$('.left1',wheelBox)[0];
   var rbtn=$('.right1',wheelBox)[0];

   var iw=parseInt(getStyle(imgs[0],'width'));
   
   imgs[0].style.left=0 ;



var index1=0;
var next1=0;


 // var t=setInterval(moves,2000)
  function moves(){
    next1++;
    // if (next1==imgs.length) {next1=0};
    for (var i = 0; i < liss.length; i++) {
            liss[i].className="";
        };
    liss[next1].className='hot1';
    
    imgs[next1].style.left=iw+'px';
   
    animate(imgs[index1],{left:-iw},500)
    animate(imgs[next1],{left:0},500)
    index1=next1;
   }

// // wheelBox.onmouseover=function(){
// //     clearInterval(t)
// // }
// // wheelBox.onmouseout=function(){
// //     t=setInterval(moves,2000)
// // }


var f=true;
rbtn.onclick=function(){
    if (f) {
         if (next1==0) 
        moves()
    };
       
   f=false
    
}

// var f2=true;

lbtn.onclick=function(){
    if (!f) {
        next1--;
    if (next1==0) {
        // if (next1==-1) {next1=imgs.length-1};
    for (var i = 0; i < liss.length; i++) {
        liss[i].className="";
    };
    liss[next1].className='hot1';
    imgs[next1].style.left=-iw+'px';
    animate(imgs[index1],{left:iw},500)
    animate(imgs[next1],{left:0},500)
    index1=next1;
    };
   f=true;
}

}
}

   


// 左边

var leftBottom=$('.left-bottom')
// alert(leftBottom.length)
for (var i = 0; i <leftBottom.length; i++) {
   ss(leftBottom[i])
};


function ss(leftBottom){
var imgss=$('img',leftBottom)
// alert(imgss.length)

var lbtna=$('.sanjiaoa1',leftBottom)[0];
// alert(lbtna.length)
var rbtna=$('.sanjiaoa2',leftBottom)[0];
var iwss=parseInt(getStyle(imgss[0],'width'));

imgss[0].style.left=0 



var index3=0;
var next3=0;

var t=setInterval(move1,2000)
  function move1(){
     next3++;
     if (next3==imgss.length) {next3=0};
     imgss[next3].style.left=iwss+'px';
     animate(imgss[index3],{left:-iwss},500)
     animate(imgss[next3],{left:0},500)
     index3=next3;
   }

rbtna.onclick=function(){
    move1()
}

lbtna.onclick=function(){
    next3--;
   if (next3==-1) {next3=imgss.length-1};   
    
    imgss[next3].style.left=-iwss+'px';
    animate(imgss[index3],{left:iwss},500)
    animate(imgss[next3],{left:0},500)
    index3=next3;
    };

}
}


