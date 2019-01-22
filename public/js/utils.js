export default {
    //设置cookies
    setCookie(name,value) {
        let Days = 30;
        let exp = new Date();
        exp.setTime(exp.getTime() + 30*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    },

    //读取cookies
    getCookie(name) {
        let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

        if(arr=document.cookie.match(reg))

            return unescape(arr[2]);
        else
            return null;
    },

    //删除cookies
    delCookie(name) {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval=getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}