window.onload=function(){
    // var canvas=document.getElementById("tshirtCanvas");//得到画布的一个引用,画布对象的一个句柄
    // var context=canvas.getContext("2d");//需要画布的“2d”上下文进行绘制
    // context.fillRect(10,10,100,100);//使用2d上下文在画布上绘制一个填充的矩形，以x，y（10，10）为起点，宽度和高度都为100的矩形
    var button=document.getElementById("previewButton");
    button.onclick=previewHandler;
}

function previewHandler(){
    var canvas=document.getElementById("tshirtCanvas");
    var context=canvas.getContext("2d");

    var selectObj=document.getElementById("shape");
    var index=selectObj.selectIndex;
    var shape=selectObj[index].value;

    if(shape=="squares"){
        for(var squares=0;squares<20;squares++){ //绘制20个
            drawSquare(canvas,context);
        }
    }
}

function drawSquare(canvas,context){
    var w=Math.floor(Math.random()*40);

    var x=Math.floor(Math.random()*canvas.width);

    var y=Math.floor(Math.random()*canvas.height);

    context.fillStyle="lightblue";
    context.fillRect(x,y,w,w);
}














// function drawText(canvas,context){
//     var selectObj=document.getElementById("foregroundColor");
//     var index=selectObj.selectIndex;
//     var fgColor=selectObj[index].value;
    
//     context.fillStyle=fgColor;
//     context.font="bold 1em sans-serif";
//     context.textAlign="left";//设置对齐方式
//     context.fillText("I saw this tweet",20,40);

//     selectObj=document.getElementById("tweets");
//     index=selectObj.selectIndex;
//     var tweet=selectobj[index].value;
//     context.font="italic 1.2em serif";
//     context.fillText(tweet,30,100);

//     context

// }