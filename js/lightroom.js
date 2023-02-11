let saturation=document.getElementById("saturation");
let contrast=document.getElementById("contrast");
let brightness=document.getElementById("brightness");
let sepia=document.getElementById("sepia");
let grayscale=document.getElementById("grayscale");
let blur=document.getElementById("blur");
let hueRotate=document.getElementById("hue-rotate");

let Reset=document.getElementById("Reset");
let download=document.getElementById("download");

let upload=document.getElementById("upload");

let canvaImg=document.getElementById('imgEdited')
let img=document.querySelector("img");
let imgBox=document.querySelector(".img-box");

let canvas=document.getElementById("canvas");
let ctx=canvas.getContext('2d');

upload.onchange=function(){
    download.style.display="block";
    Reset.style.display="block";
    imgBox.style.display="block";
    let file=new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        img.src=file.result;
    }
    img.onload=function(){
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display="none"
    }
    resetValue();
    canvaImg.style.display="none";

    
}
window.onload=function(){
    download.style.display="none";
    Reset.style.display="none";
    imgBox.style.display="none";

}
let filters=document.querySelectorAll("ul li input");
filters.forEach(filter=>{
    filter.addEventListener("input",function(){
       ctx.filter=`
            saturate(${saturation.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        
        `
        console.log(saturation.value);
        ctx.drawImage(img,0,0,canvas.width,canvas.height);

    })

})
function resetValue(){
    saturation.value="100";
    contrast.value="100";
    brightness.value="100";
    sepia.value="100";
    grayscale.value="0";
    blur.value="0";
    hueRotate.value="0";
    img.style.display="block";
   
    img.style.filter="none";

    let file=new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        canvaImg.src=file.result;
    }
    canvaImg.onload=function(){
        canvas.width=canvaImg.width;
        canvas.height=canvaImg.height;
        ctx.drawImage(canvaImg,0,0,canvas.width,canvas.height);
        canvas.style.display="block"
    }

    // saturation.value="100";
    // contrast.value="100";
    // brightness.value="100";
    // sepia.value="100";
    // grayscale.value="0";
    // blur.value="0";
    // hueRotate.value="0";
    // img.style.display="block";
   
    // img.style.filter="none";

}
Reset.addEventListener("click",function(){
    resetValue();
    canvas.style.display="none"
    canvaImg.style.display="none"
})
download.addEventListener("click",function(){
    download.href=canvas.toDataURL();
})