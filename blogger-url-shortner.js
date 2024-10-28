
//<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","")
var urls={

  
'fb':'https://www.facebook.com/arbd0',
'ig':'https://www.instagram.com/sysa_shoaiyb',
'twitter':"https://twitter.com/shoaiybsysa",
'gh':"https://github.com/asikurbd"
  
}
if(key){
if(urls[key]){
window.location.href=urls[key]
}else{
document.write("'"+key+"' not found :(");
}
}
//]]>
