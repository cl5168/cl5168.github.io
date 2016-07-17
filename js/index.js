function toDouble(n){
    return n<10?'0'+n:''+n;
}
window.onload=function(){
    //导航
    ;(function(){
        var oHeader_nav=document.getElementById('header_nav');
        var aBtn=oHeader_nav.children;
        var oNav_icon=document.getElementById('nav_icon');
        var bFlag=false;
        nav(aBtn[0],0);
        nav(aBtn[1],800);
        nav(aBtn[2],1600);
        nav(aBtn[3],2400);
        oNav_icon.onclick=function(){
            move(oHeader_nav,{top:0})
        };
        aBtn[4].onclick=function(){
            move(oHeader_nav,{top:-60})
        };
        function nav(obj,iTarget){
            obj.onclick=function(){
                var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
                var start=scrollTop;
                var dis=iTarget-start;
                var count=Math.floor(1200/30);
                var n=0;
                clearInterval(timer);
                var timer=setInterval(function(){
                    n++;
                    var a=n/count;
                    var cur=start+dis*a;
                    document.documentElement.scrollTop=document.body.scrollTop=cur;
                    if(n==count){
                        clearInterval(timer);
                    }
                }, 30);
            };
        }
    })()
    //技能
    ;(function(){
        var oSkill=document.getElementById('skill');
        var aSkill=oSkill.children;
        var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        var oSpan1=document.getElementById('skill1_bar');
        var oSpan2=document.getElementById('skill2_bar');
        var oSpan3=document.getElementById('skill3_bar');
        var oSpan4=document.getElementById('skill4_bar');
        var oSpan5=document.getElementById('skill5_bar');
        var oSkill1_con=document.getElementById('skill1_con');
        var oSkill2_con=document.getElementById('skill2_con');
        var oSkill3_con=document.getElementById('skill3_con');
        var oSkill4_con=document.getElementById('skill4_con');
        var oSkill5_con=document.getElementById('skill5_con');
        move(oSpan1,{width:400},{duration:2000});
        move(oSpan2,{width:420},{duration:2000});
        move(oSpan3,{width:380},{duration:2000});
        move(oSpan4,{width:290},{duration:2000});
        move(oSpan5,{width:360},{duration:2000});
        show(aSkill[0],oSkill1_con);
        show(aSkill[1],oSkill2_con);
        show(aSkill[2],oSkill3_con);
        show(aSkill[3],oSkill4_con);
        show(aSkill[4],oSkill5_con);
        function show(obj1,obj2){
            obj1.onmouseenter=obj2.onmouseenter=function(){
                obj2.style.display='block';
            };
            obj1.onmouseleave=obj2.onmouseleave=function(){
                    obj2.style.display='none';
            }
        }
    })();
    //作品导航
        var oOpus_nav=document.getElementById('opus_nav');
        var oOpus=document.getElementById('opus');
        var aUl=oOpus.getElementsByTagName('ul');
        var aLi=oOpus_nav.getElementsByTagName('li');
        var oOpa=document.getElementById('nav_opa');
        for(var i=0;i<aLi.length-1;i++){
            aLi[i].index=i;
            aLi[i].onclick=function(){
                for(var j=0;j<aLi.length-1;j++){
                    elastic(aLi[i],this.offsetLeft);
                    aUl[j].style.display='none';
                }
                aUl[this.index].style.display='block';
            }
        }
    //html
    ;(function(){
        function removeSpan(id){
            var oOpus_con=document.getElementById(id);
            var aLi=oOpus_con.children;
            var oLeft=400;
            var oTop=260;
            for(var i=0;i<aLi.length;i++){
                aLi[i].onmouseenter=function(ev){
                    var oEvent=ev || event;
                    var n=hoverDir(this, oEvent);
                    var oSpan=this.children[0].children[1];
                    switch(n){
                        case 0:
                            oSpan.style.left=oLeft+'px';
                            oSpan.style.top=0;
                            break;
                        case 1:
                            oSpan.style.left=0;
                            oSpan.style.top=oTop+'px';
                            break;
                        case 2:
                            oSpan.style.left=-oLeft+'px';
                            oSpan.style.top=0;
                            break;
                        case 3:
                            oSpan.style.left=0;
                            oSpan.style.top=-oTop+'px';
                            break;
                    }
                    move(oSpan, {left: 0, top: 0});
                };
                aLi[i].onmouseleave=function(ev){
                    var oEvent=ev || event;
                    var n=hoverDir(this, oEvent);
                    var oSpan=this.children[0].children[1];
                    switch(n){
                        case 0:
                            move(oSpan, {left: 400, top: 0});
                            break;
                        case 1:
                            move(oSpan, {left: 0, top: 260});
                            break;
                        case 2:
                            move(oSpan, {left: -400, top: 0});
                            break;
                        case 3:
                            move(oSpan, {left: 0, top: -260});
                            break;
                    }
                };
            }
            function hoverDir(obj, ev){
                var x=obj.offsetLeft+obj.offsetWidth/2-ev.clientX;
                var y=obj.offsetTop+obj.offsetHeight/2-ev.clientY;

                return Math.round((Math.atan2(y, x)*180/Math.PI+180)/90)%4;
            }
        }
        removeSpan('opus_html');
        removeSpan('opus_js');
        removeSpan('opus_h5');
        removeSpan('opus_ajax');
    })()
    //js作品
    ;(function(){
        var oOpus_opa=document.getElementById('opus_opa');
        var oOpus_show=document.getElementById('opus_show');
        var oOpus_js=document.getElementById('opus_js');
        var aLi=oOpus_js.children;
        var oShow_con=document.getElementById('show_con');
        var aShow=oShow_con.children;
        var oClose=oOpus_show.children[0];
        aLi[0].onclick=function(){
            oOpus_show.style.display='block';
        };
        oClose.onclick=function(){
            oOpus_show.style.display='none';
        }
    })();
    //无缝滚动
    ;(function(){
        var oShow_con1=document.getElementById('show_con1');
        var oUl=oShow_con1.children[0].children[2];
        var aLi=oUl.children;
        var oBtn=oShow_con1.children[0].children[0];
        var oBtn2=oShow_con1.children[0].children[1];
        oUl.innerHTML+=oUl.innerHTML;
        oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
        var left=0;
        var timer;
        function toLeft(){
            clearInterval(timer);
            timer=setInterval(function(){
                left-=2;
                if(left<=-getStyle(oUl,'width')/2){
                    left=0;
                }
                oUl.style.left=left+'px';
            }, 30);
        }
        toLeft();
        function toRight(){
            clearInterval(timer);
            timer=setInterval(function(){
                left+=2;
                if(left>=0){
                    left=-getStyle(oUl,'width')/2;
                }
                oUl.style.left=left+'px';
            }, 30);
        }

        oBtn.onclick=function(){
            toLeft();
        };
        oBtn2.onclick=function(){
            toRight();
        };
    })()
    //照片墙
    ;(function(){
        var oShow_con2=document.getElementById('show_con2');
        var oUl=oShow_con2.children[1];
        var aLi=oUl.children;
        var oBtn=oShow_con2.children[0];
        // 随机换位置
        oBtn.onclick=function(){
            aPos.sort(function(){
                return Math.random()-0.5;
            });
            for(var i=0; i<aLi.length; i++){
                move(aLi[i], aPos[aLi[i].index]);
            }
        };
        // 布局转换
        var aPos=[];
        var zIndex=999;
        for(var i=0; i<aLi.length; i++){
            aPos[i]={
                left: aLi[i].offsetLeft,
                top: aLi[i].offsetTop
            };
        }
        for(var i=0; i<aLi.length; i++){
            aLi[i].style.position='absolute';
            aLi[i].style.left=aPos[i].left+'px';
            aLi[i].style.top=aPos[i].top+'px';
            aLi[i].style.margin=0;
        }
        // 拖拽
        for(var i=0; i<aLi.length; i++){
            drag(aLi[i]);
            // 添加索引
            aLi[i].index=i;
        }
        function drag(obj){
            obj.onmousedown=function(ev){
                clearInterval(obj.timer);
                obj.style.zIndex=zIndex++;
                var oEvent=ev || event;
                var disX=oEvent.clientX-obj.offsetLeft;
                var disY=oEvent.clientY-obj.offsetTop;

                document.onmousemove=function(ev){
                    var oEvent=ev || event;

                    obj.style.left=oEvent.clientX-disX+'px';
                    obj.style.top=oEvent.clientY-disY+'px';
                    // 清除class
                    for(var i=0; i<aLi.length; i++){
                        aLi[i].className='';
                    }
                    var oNear=findNearest(obj);

                    if(oNear){
                        oNear.className='active';
                    }
                };
                document.onmouseup=function(){
                    document.onmousemove=null;
                    document.onmouseup=null;

                    // 交换位置
                    var oNear=findNearest(obj);
                    if(oNear){
                        move(oNear, aPos[obj.index]);
                        move(obj, aPos[oNear.index]);

                        oNear.className='';
                        var tmp;
                        tmp=oNear.index;
                        oNear.index=obj.index;
                        obj.index=tmp;
                    }else{
                        move(obj, aPos[obj.index]);
                    }
                };
                return false;
            };
        }
        // 碰撞检测
        function collTest(obj, obj2){
            var l1=obj.offsetLeft;
            var r1=obj.offsetWidth+l1;
            var t1=obj.offsetTop;
            var b1=obj.offsetHeight+t1;

            var l2=obj2.offsetLeft;
            var r2=obj2.offsetWidth+l2;
            var t2=obj2.offsetTop;
            var b2=obj2.offsetHeight+t2;
            if(r1<l2 || b1<t2 || l1>r2 || t1>b2){
                return false;
            }else{
                return true;
            }
        }
        // 求两个物体的距离
        function getDis(obj, obj2){
            var l1=obj.offsetLeft+obj.offsetWidth/2;
            var l2=obj2.offsetLeft+obj2.offsetWidth/2;

            var t1=obj.offsetTop+obj.offsetHeight/2;
            var t2=obj2.offsetTop+obj2.offsetHeight/2;

            var a=l1-l2;
            var b=t1-t2;

            return Math.sqrt(a*a+b*b);
        }
        // 找离我最近的人
        function findNearest(obj){
            var iMin=9999999;
            var iMinIndex=-1;
            for(var i=0; i<aLi.length; i++){
                if(obj==aLi[i])continue;
                if(collTest(obj, aLi[i])){
                    var dis=getDis(obj, aLi[i]);

                    if(dis<iMin){
                        iMin=dis;
                        iMinIndex=i;
                    }
                }
            }
            if(iMinIndex==-1){
                return null;
            }else{
                return aLi[iMinIndex];
            }
        }
    })()
    //回到顶部
   ;(function(){
        var oToTop = document.getElementById('toTop');
        window.onscroll=function(){
            var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;

            if(scrollTop>100){
                oToTop.style.display='block';
            }else{
                oToTop.style.display='none';
            }
        };

        var timer;
        oToTop.onclick=function(){
            var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
            var start=scrollTop;
            var dis=0-start;

            var count=Math.floor(1000/30);
            var n=0;
            clearInterval(timer);
            timer=setInterval(function(){
                n++;
                var a=n/count;
                var cur=start+dis*a;
                document.documentElement.scrollTop=document.body.scrollTop=cur;
                if(n==count){
                    clearInterval(timer);
                }
            }, 30);
        };
   })()
    ;(function(window) {
        var iSpeed = 0;
        var oLeft = 0;
        var timer;
        window.elastic=function elastic(obj, iTarget) {
            clearInterval(timer);
            timer = setInterval(function () {
                iSpeed += (iTarget - oLeft) / 5;
                iSpeed *= 0.7;
                oLeft += iSpeed;
                obj.style.left = Math.round(oLeft) + 'px';
            }, 30);
            if (Math.abs(iSpeed) < 1 && Math.round(oLeft) == iTarget) {
                clearInterval(timer);
            }
        }
    })(window);
};