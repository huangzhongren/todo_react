let getStyle = (dom,attr)=>{
    return dom.currentStyle?dom.currentStyle[attr]:document.defaultView.getComputedStyle(dom,false)[attr]
}

export default {
    "getStyle":getStyle
}