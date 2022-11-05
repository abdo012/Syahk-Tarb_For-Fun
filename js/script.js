// loading
var go = document.querySelector('.go')
var loading = document.querySelector('.loading')

go.onclick = function(){
    // loading.style.display ="none"
    loading.style.top ="-100%"
    // document.querySelector('.loading').style.display ="none"
}


// ----------sounds=>1---------
function play_1(){
    var audio_1 = document.querySelector('.audio1')
    audio_1.play()
}
function play_2(){
    var audio_2 = document.querySelector('.audio2')
    audio_2.play()
}
// -----------counter=>1------------
var i = 1
function count1(){
 document.querySelector('.num1').innerHTML=`<h1>${i}</h1>`
 i++
}
// -----------counter=>2------------
var x = 1
function count2(){
 document.querySelector('.num2').innerHTML=`<h1>${x}</h1>`
 x++
}
// ----------sounds=>2---------
// --------A----------
var img1 = document.querySelector('.img1')
img1.onclick = function(){
    var a1 = document.querySelector('.a')
    a1.play()
}
// -------------------
// --------B----------
var img2 = document.querySelector('.img2')
img2.onclick = function(){
    var a2 = document.querySelector('.b')
    a2.play()
}
// -------------------
// --------C----------
var img3 = document.querySelector('.img3')
img3.onclick = function(){
    var a3 = document.querySelector('.c')
    a3.play()
}
// -------------------
// --------D----------
var img4 = document.querySelector('.img4')
img4.onclick = function(){
    var a4 = document.querySelector('.d')
    a4.play()
}
