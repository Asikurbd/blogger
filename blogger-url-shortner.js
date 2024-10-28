
//<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","")
var urls={

  
'fb':'https://www.facebook.com/arbd0',
'ig':'https://www.instagram.com/sysa_shoaiyb',
'soft':"https://arbd99.blogspot.com/p/pc-softwore.html",
'gh':"https://github.com/asikurbd"
  
}
if(key){
if(urls[key]){
window.location.href=urls[key]
}else{
document.write("'"+key+"' not fkkound :(");
}
}
//]]>
