let backgroudimg = ["../image/backgroud/backgroud image.jpg","../image/backgroud/backgroud image1.jpg","../image/backgroud/backgroud image2.jpg","../image/backgroud/backgroud image3.jpg"];
const Bac=document.getElementById('Bac');
let index=0;
const icleft=document.getElementById('ic-left');
icleft.onclick=function(){
    if(index==0){
        index=4;
    }
    index--;
    Bac.src=backgroudimg[index];
}
setInterval(function(){
    if(index == 4){
        index = 0;
    }
    Bac.src=backgroudimg[index];
    index++;
},4000);

