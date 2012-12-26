////////////////////////
//by rafaelcastrocouto//
////////////////////////

var speed=3,
  curtom,
  chs=document.getElementsByTagName('b');
curtom=chs[0].innerHTML[0];
//////////////
/*change-tom*/
//////////////
var toarr=['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
    noarr=['la', 'la#', 'si', 'do', 'do#', 're', 're#', 'mi', 'fa', 'fa#', 'sol', 'sol#'],
    oldtom,nextomn,curtom,curtomn,tomchg;
function chtom(event){
  var el=document.getElementById('tomlist'),
      inn,oi;
  for(i in el.children){el.children[i].disabled=false}
  event.target.disabled=true;
  for(i in toarr){
	   if(curtom==toarr[i]){curtomn=new Number(i)}
    if(event.target.value==toarr[i]){nextomn=new Number(i)}
  }
  tomchg=nextomn-curtomn;
  oldtom=curtom;
  curtom=event.target.value;
  for(i in toarr){
    for(l in chs){
      oi=new Number(i);
      ni=oi+tomchg;if(ni>11){ni-=12}else if(ni<0){ni+=12}
      if(chs[l].innerHTML){
        inn=chach(chs[l].innerHTML,oi,ni);
        chs[l].innerHTML=inn
	     }
  	 }  
  }
  for(i in toarr){
    for(l in chs){
      oi=new Number(i);
      if(chs[l].innerHTML){
        inn=chotonot(chs[l].innerHTML,oi);
        chs[l].innerHTML=inn
      }
    }
  }
}
function chach(str,oto,nto){
  var ni;
  while(str.indexOf(toarr[oto])!=-1){
    if(str.charAt(str.indexOf(toarr[oto])+1)=='#'){
      ni=nto+1;if(ni>11){ni-=12}else if(ni<0){ni+=12}
      str=str.replace(toarr[oto]+'#',noarr[ni])
    }else  if(str.charAt(str.indexOf(toarr[oto])+1)=='b'){
      ni=nto-1;if(ni>11){ni-=12}else if(ni<0){ni+=12}
      str=str.replace(toarr[oto]+'b',noarr[ni])
    }else{
      str=str.replace(toarr[oto],noarr[nto])
    }
  }
  return str
}  
function chotonot(str,i){
  while(str.indexOf(noarr[i])!=-1){
    str=str.replace(noarr[i],toarr[i])
  }
  return str
}
function inittom(){
  var el=document.getElementById('tomlist');
  for(i in el.children){
    if(el.children[i].value){
      if(el.children[i].value==curtom){
	       el.children[i].disabled=true
      }
    }
  }
}
///////////////
/*auto-scroll*/
///////////////
var scon=0,
    scdist=0,
    sh=document.body.scrollHeight,
    myclock;
function scrollwindow(){
  console.log(scdist,sh);
  if(scdist<sh){
    scdist+=1;
    scroll(0,scdist);
    myclock=setTimeout(scrollwindow, 1000/speed)
  }
}
function startit(){
  var r=confirm('Start scroll?');
  if(r==true){
    var nel=document.createElement('button'),
        ch=document.body.childNodes,
        el=ch[ch.length];
    nel.id='endit';
    nel.innerHTML='Stop';
    nel.onclick=endit;
    nel.style.position='fixed';
    nel.style.bottom='0';
    nel.style.right='0';
    document.body.insertBefore(nel,el);
    if(window.scrollY){scdist=window.scrollY
    }else{scdist=0}
    scrollwindow()
  }
}
function endit(){
  clearInterval(myclock);
  el=document.getElementById('endit');
  if(el) document.body.removeChild(el);
}
function initscroll(){ 
  if(!scon){startit()}else{endit()}
  scon=!scon
}
function moreit(){
  if(speed>=10){speed+=10}
  else{speed+=1}
  updspeed()
}
function lessit(){
  if(speed>1 && speed<=10){speed-=1}
  if(speed>10){speed-=10}
  updspeed()
}
function updspeed(){
  var el=document.getElementById('speedinput');
  if(el){el.innerHTML=speed}
}
function setspeed(){
  var sp=prompt('Please enter speed:','3');
  if(sp) speed=sp;
  updspeed()
}
//////////////////
/*start controls*/
//////////////////
function addcontrs(){
  var nel=document.createElement('div'),
      tomlist='';
  for(i in toarr){
    tomlist += '<button value="'+toarr[i]+'" onclick="chtom(event)">'+toarr[i]+'</button>';
  }
  nel.id='mucontrols';
  nel.innerHTML='<style>'+
    'html,body,pre{min-height:100%;border:0;margin:0}'+
    'button{background:#ddd;border-radius:8px}'+
    'button:hover{background:#ccc}'+
    'button[disabled]{background:#eee}'+
    'button,#speedinput{text-align:center;width:38px;height:38px;margin:1px}'+
    '#mucontrols{padding:4px 0;min-width:242px}'+
    '#tomlist{padding-bottom:4px}'+
    '#goscroll{margin-left:38px;width:82px}'+
  '</style>'+
  '<div id="tomlist">'+tomlist+'</div>'+
  '<div id="timecontrols">'+
    '<button onclick="lessit()">-</button>'+
    '<button id="speedinput" onclick="setspeed()">'+speed+'</button>'+
    '<button onclick="moreit()">+</button>'+
    '<button id="goscroll" onclick="initscroll()">&darr;</button>'+
  '</div>';
  var el=document.body.childNodes[0];
  document.body.insertBefore(nel,el);
}
function winload(){
  addcontrs();
  inittom()
}window.onload=winload