// alert(1)

function getClass(classname,range){
	if(range.getElementsByClassName){
		return range.getElementsByClassName(classname)
	}else{
		var arr=[];
		var all=range.getElementsByTagName("*");
		for(var i=0;i<all.length;i++){
			all[i].className==classname
			if(checkClass(all[i].className,classname)){
               arr.push(all[i]);
			}
		}
		return arr;
	}
}



function checkClass(tagClass,aclass){
     var brr=tagClass.split(" ");
     for(var i=0;i<brr.length;i++){
     	if(brr[i]==aclass){
     		return true;
     	}
     }
     return false;
}




// function $(selector,range){
// 	var range=range||document;
// 	if(typeof selector=="string"){
// 		if(selector.charAt(0)=="#"){
// 			return range.getElementById(selector.slice(1));
// 		}
// 		if(selector.charAt(0)=="."){
// 			return getClass(selector.slice(1),range)
// 		}
// 		//正则
// 		if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
// 			return range.getElementsByTagName(selector)
// 		}
// 		if (/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)) {
// 			return document.createElement(selector.slice(1,-1))
// 		};
// 	}
// 	//页面加载事件
// 	if(typeof selector=="function"){
//         return window.onload=selector;
// 	}

 function $(selector,content){
	if(typeof selector=="string"){
		content=content||document;
		if (selector.charAt(0)=="#") {
			return  document.getElementById(selector.substr(1))
		}else if(selector.charAt(0)=="."){
			return getClass(selector.substr(1),content)
		}else if (/^[a-zA-Z][A-Za-z1-6]*$/.test(selector)) {
                  return content.getElementsByTagName(selector)
		}else if(/^<[a-zA-Z][A-Za-z1-6]{0,10}>$/.test(selector)){
                 return document.createElement(selector.slice(1,-1))
		 }

	} else if(typeof selector=="function"){
		 // window.onload=function(){
			// selector()
			on(window,'load',selector)
		}
	
} 


function getStyle(obj,attr){
    if (obj.currentStyle) {
    	return obj.currentStyle[attr]
    }else{
    	return getComputedStyle(obj,null)[attr]
    }
}

// function getStyle(obj,attr){
//    if (obj.currentStyle) {
//    	return window.getComputedStyle(obj,null)[attr]
   
//    }else{
//    		return obj.currentStyle[attr]
//    };
// }




// 获取所有的子节点

// function getChilds(obj){
// 	var childs=obj.childNodes
// 	var newArr=[]
// 	for (var i = 0; i < childs.length; i++) {
// 		if (!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==""))) {
// 			newArr.push(childs[i])
// 		};
		
// 	}
// 	return newArr;
// }
//获取子节点的集合 
  //a 代表获取文本的子节点 或者获取 元素的子节点（默认）
  //b 获取元素的子节点
function getChilds(obj,type){
   type=type||"a"
    var childs=obj.childNodes;
    var arr=[]
  if(type=="a"){
    for (var i = 0; i < childs.length; i++) {
    	if(childs[i].nodeType==1||(childs[i].nodeType==3&&trim(childs[i].nodeValue)!="")){
    		arr.push(childs[i])
    	}
    }
    return arr;
}
else if(type=="b"){
	for (var i = 0; i < childs.length; i++) {
    	if(childs[i].nodeType==1){
    		arr.push(childs[i])
    	}
    }
    return arr;
}
}

function trim(str){
	return str.replace(/^\s+|\s+$/g,"")
}

// !((childs[i].nodeType==8)||(childs[i].nodeType==3&&trim(childs[i].nodeValue=="")))

// 获取第一个
function getFirst(obj){
  return getChilds(obj)[0]	
}

// // 获取最后一个

function getLast(obj){
	return getChilds(obj)[getChilds(obj).length-1]
}


// // 任何一个
function getIndex(obj,num){
   return getChilds(obj)[num]
}

// 获取下一个兄弟
function getNext(obj,type){
	var next=obj.nextSibling
    if (next==null) {
    	return false
    };
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
        next=next.nextSibling
}
    if (next==null) {
    	return false
    };
     return next;
}    




// 获得上一个兄弟节点

function getUp(obj){
	var up=obj.previousSibling;
if(!up){return false}
  while(up.nodeType==8||(up.nodeType==3&&trim(up.nodeValue)=="")){
      up=up.previousSibling;
      if(!up){return false}
  }
  return up;
     
}



// 插入到父对象之前

function insertBefore(obj1,obj2){
    var parent=obj2.parentNode;
     parent.insertBefore(obj1,obj2)
}

// 插入到某个对象之后
function  insertAfter(obj,eobj){
         var parent=eobj2.parentNode;
         var next=getNext(eobj)
       if (next) {
       	parent.insertBefore(obj,next)
       }
       	else{
      parent.appendChild(obj)
       	}; 

}


function remove(obj,type){
     obj.parentNode.removeChild(obj)
}  

// on(box,'click',function(){
// 	alert(100)
// })


// 添加
function on(obj,ev,callback){
   if (obj.addEventListener) {
   	 obj.addEventListener(ev,callback)
   }else{
   	// IE6-8
   	// obj.fffnnn=function(){
   	// 	callback.call(obj);
   	// }
   	// obj.attachEvent('on'+ev,obj.fffnnn)
   	obj.attachEvent('on'+ev,callback)
   }
}

// 移出
function off(obj,ev,callback){
	
	if (obj.removeEventListener) {
		obj.removeEventListener(ev,callback)
	}else{
		obj.detachEvent('on'+ev,callback)
	};
}


// this问题



function mouseWheel(obj,upcallback,downcallback){
  if(document.attachEvent){
   obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
    }else if(document.addEventListener){
        obj.addEventListener("mousewheel",scrollFn,false);

       obj.addEventListener("DOMMouseScroll",scrollFn,false);
}


function scrollFn(e){
   var ev=e||window.event;
   // console.log(ev.detail)
  if (ev.preventDefault ){
      ev.preventDefault()
   }
  else{
      ev.returnValue = false;
    }
   
var dir=ev.wheelDelta||ev.detail;
if (dir==120||dir==-3) {
  // 上
  upcallback.call(obj)
};
if (dir==-120||dir==3) {
  // 下
    downcallback.call(obj)
};


}



}

