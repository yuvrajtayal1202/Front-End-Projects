console.log("gfbkhj");
//navigation
document.querySelector('.cross').style.display = 'none';
document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.nav').classList.toggle('navgo');

    if(document.querySelector('.nav').classList.contains('navgo')){
        document.querySelector('.ham').style.display = 'inline';
        // document.querySelector('.ham').style.filter = 'invert(100%)';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() =>{
            document.querySelector('.cross').style.display = 'inline';
        },50)
    }
})
document.querySelector('.cross').addEventListener("click",()=>{
    document.querySelector('.nav').classList.toggle('navgo');

    if(document.querySelector('.nav').classList.contains('navgo')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() =>{
            document.querySelector('.cross').style.display = 'inline';
        },500)
    }
 })
 

 //hide/see
 /*
 // method 1 (wrong)
 document.querySelector('.ahide').style.display = 'none';
 document.querySelector('.nunigo').style.display = 'none';

document.querySelector('.asee').addEventListener("click",()=>{
    // document.querySelector('nunigo').classList.toggle('nunigogo');
    document.querySelector('.nunigo').style.display = 'block';
    document.querySelector('.asee').style.display = 'none';
    document.querySelector('.ahide').style.display = 'block';

})
document.querySelector('.ahide').addEventListener("click",()=>{
    // document.querySelector('nunigo').classList.toggle('nunigogo');
    document.querySelector('.nunigo').style.display = 'none';
    document.querySelector('.asee').style.display = 'block';
    document.querySelector('.ahide').style.display = 'none';
})
*/

// method 2
document.querySelector('.ahide').style.display = 'none';
document.querySelector('.asee').addEventListener("click",()=>{
    document.querySelector('.nuni').classList.toggle('nunigo');
    document.querySelector('.nuni').classList.toggle('nunigo');
    document.querySelector('.nuni').classList.toggle('nunigo');

    if(document.querySelector('.nuni').classList.contains('nunigo')){
        document.querySelector('.asee').style.display = 'inline';
        // document.querySelector('.ham').style.filter = 'invert(100%)';
        document.querySelector('.ahide').style.display = 'none';
    }
    else{
        document.querySelector('.asee').style.display = 'none';
        setTimeout(() =>{
            document.querySelector('.ahide').style.display = 'inline';
        },50)
    }
})
document.querySelector('.ahide').addEventListener("click",()=>{
    document.querySelector('.nuni').classList.toggle('nunigo');
    document.querySelector('.nuni').classList.toggle('nunigo');
    document.querySelector('.nuni').classList.toggle('nunigo');

    if(document.querySelector('.nuni').classList.contains('nunigo'))
    if(document.querySelector('.nuni').classList.contains('nunigo'))
    if(document.querySelector('.nuni').classList.contains('nunigo')){
        document.querySelector('.asee').style.display = 'inline';
        document.querySelector('.ahide').style.display = 'none';
    }
    else{
        document.querySelector('.asee').style.display = 'none';
        setTimeout(() =>{
            document.querySelector('.ahide').style.display = 'inline';
        },500)
    }
 })