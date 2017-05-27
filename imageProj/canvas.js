export function drawBackground(ctx) {
    ctx.font = '48px serif';
    ctx.strokeText('选择图片以编辑', 100, 170);
}

function reSizeImg(width, height){
    let new_width, new_height;
    if(width >= 600 && height >= 400){
        if(width >= height*1.5){
            new_width = 600;
            new_height = (600/width)*height;
        }else{
            new_height = 400;
            new_width = (400/height) * width;
        }
    }else if(width >= 600 && height <= 400){
        new_width = 600;
        new_height = (600/width)*height;
    }else if(width < 600 && height >= 400){
        new_height = 400;
        new_width = (400/height) * width;;
    }else{
        new_width = width;
        new_height = height;
    }
    return {width: new_width, height: new_height};
}

export function drawImage(img, ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let {width, height} = reSizeImg(img.width, img.height);
    ctx.drawImage(img, (600-width)/2, (400-height)/2,width, height); // 居中放置
}

export function changeOpcity(canvas, ctx, opcity, r, g, b, style) {
    let image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = image.data;
    for(let i = 0; i < image.data.length - 4; i +=4){
        data[i] = r * data[i];
        data[i+1] = g * data[i+1];
        data[i+2] = b * data[i+2];        
        data[i+3] = opcity * data[i+3];
    }
    if(style === 'lose_color'){
        for(let i = 0; i < image.data.length - 4; i +=4){
            let average = (data[i]+data[i+1]+data[i+2])/3;
            data[i] = average;
            data[i+1] = average;
            data[i+2] = average;
        }
    }else if(style === 'reverse_color'){
        for(let i = 0; i < image.data.length - 4; i +=4){
            data[i] = 255-data[i];
            data[i+1] = 255-data[i+1];
            data[i+2] = 255-data[i+1];
        }
    }
    ctx.putImageData(image, 0, 0);
}

export function saveImage(canvas){
    let dataurl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    let a = document.createElement('a');
    a.href = dataurl;
    a.target = '_blank';
    a.click();    
}