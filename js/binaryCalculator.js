var flag='';
var ans=false;
btnClr.onclick = function () {
    res.innerHTML = "";
    a=0;
    b=0;
};
btn0.onclick=function(){
    if(ans==true)
        {
            res.innerHTML = "";
            a=0;
            b=0;
            ans=false;
        }
    res.innerHTML+=0;
};
btn1.onclick=function(){
    if(ans==true)
        {
            res.innerHTML = "";
            a=0;
            b=0;
            ans=false;
        }
    res.innerHTML+=1;
};
btnSum.onclick=function(){
    res.innerHTML+='+';
    flag='+';
};
btnSub.onclick=function(){
    res.innerHTML+='-';
    flag='-';
};
btnMul.onclick=function(){
    res.innerHTML+='*';
    flag='*';
};
btnDiv.onclick=function(){
    res.innerHTML+='/';
    flag='/';
};
btnEql.onclick=function(){
    var index;
    var text=document.getElementById("res").innerHTML;
    var len=text.length;
    for(let i=0;i<len;i++)
        {
            if(text.charAt(i)==flag)
                index=i;
        }
    var a=parseInt(text.substring(0,index));
    var b=parseInt(text.substring(index+1,len));
    if(flag=='+')
        var c=bin_dec(a)+bin_dec(b);
    else if(flag=='-')
        var c=bin_dec(a)-bin_dec(b);
    else if(flag=='/')
        var c=bin_dec(a)/bin_dec(b);
    else if(flag=='*')
        var c=bin_dec(a)*bin_dec(b);
    res.innerHTML=dec_bin(c);
    ans=true;
};
function bin_dec(x){
    var dec=0;
    var pos=0;
        while(x!=0)
        {
            dec=dec+(2**pos)*(x%10);
            x=parseInt(x/10);
            pos++;
        }
        return dec;
}
function dec_bin(x){
    var num="",str1="";
        while(x!=0)
        {
            var d=x%2;
            str1=str1+d.toString(10);
            x=parseInt(x/2);
        }
        for(let i=str1.length-1;i>=0;i--)
            num=num+str1.charAt(i);
        return (parseInt(num));
}