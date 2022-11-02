var elH = document.querySelector('.orta');
var elSelect = document.querySelector('.non')
var elRazmer2 = document.querySelector('.razmer')
var elRazmer = document.querySelector('.katta')
var elBtn = document.querySelector('.button2')
var elBtn2 = document.querySelector('.button3')
var elBtn3 = document.querySelector('.button4')
var elLabel = document.querySelector('.label')
var elPomidor = document.querySelector('.pomidor')
var elBodring = document.querySelector('.bodring')
var elSir = document.querySelector('.sir')
var elAchiq = document.querySelector('.achiq')
var elPishloq = document.querySelector('.pishloq')
var elGorko = document.querySelector('.gorko')
var elSirok = document.querySelector('.sirok')
var elPomid = document.querySelector('#pomid')
var elTuz = document.querySelector('#tuz')
var elKurka = document.querySelector('#kurka')
var elQoziq = document.querySelector('#qoziqorin')
var elZaytun = document.querySelector('#zaytun')
var elQazi = document.querySelector('#qazi')

var elItem1 = document.querySelector('#item1')
var elItem2 = document.querySelector('#item2')
var elItem3 = document.querySelector('#item3')
var elItem4 = document.querySelector('#item4')
var elItem5 = document.querySelector('#item5')
var elItem6 = document.querySelector('#item6')
var elItem7 = document.querySelector('#item7')
var elItem8 = document.querySelector('#item8')

var elButton123 = document.querySelector('#btn')


var a = ''


elSelect.addEventListener('click', ()=>{
    elH.textContent = elSelect.value
})
elBtn.addEventListener('click', ()=>{
    elRazmer2.textContent = ' 25 cm' 

})
elBtn2.addEventListener('click', ()=>{
    elRazmer2.textContent = ' 30 cm'

})
elBtn3.addEventListener('click', ()=>{
    elRazmer2.textContent = ' 35 cm'

})


elTuz.addEventListener('click', ()=>{
    if(elTuz.checked){
        elItem2.textContent = '+ Tuzlangan bodring'
        elPomidor.textContent = a
        elBodring.textContent = a
        elSir.textContent = a
    }else if(elTuz.checked == false){
        elItem2.textContent = ''
        if(elPomid.checked == false && elQazi.checked == false && elKurka.checked == false && elQoziq.checked == false && elZaytun.checked == false){
    }}
    
})
elPomid.addEventListener('click', ()=>{

    if(elPomid.checked){
        elItem1.textContent = '+ Pomidor'
        elPomidor.textContent = ''
        elBodring.textContent = ''
        elSir.textContent = ''
    }else if(elPomid.checked == false){
        elItem1.textContent = ''
        if(elQazi.checked == false && elTuz.checked == false && elKurka.checked == false && elQoziq.checked == false && elZaytun.checked == false){
    }}
})
elKurka.addEventListener('click', ()=>{
    if(elKurka.checked){
        elItem3.textContent = '+ Kurka goshti'
        elPomidor.textContent = a
        elBodring.textContent = a
        elSir.textContent = a
    }else if(elKurka.checked == false){
        elItem3.textContent = ''
        if(elPomid.checked == false && elTuz.checked == false && elQazi.checked == false && elQoziq.checked == false && elZaytun.checked == false){
    }}
    
})
elQoziq.addEventListener('click', ()=>{
    if(elQoziq.checked){
        elItem4.textContent = '+ Qoziqorin'
        elPomidor.textContent = a
        elBodring.textContent = a
        elSir.textContent = a
    }else if(elQoziq.checked == false){
        elItem4.textContent = ''
        if(elPomid.checked == false && elTuz.checked == false && elKurka.checked == false && elQazi.checked == false && elZaytun.checked == false){
    }}
    
})
elZaytun.addEventListener('click', ()=>{
    if(elZaytun.checked){
        elItem5.textContent = '+ Zaytun'
        elPomidor.textContent = a
        elBodring.textContent = a
        elSir.textContent = a
    }else if(elZaytun.checked == false){
        elItem5.textContent = ''
        if(elPomid.checked == false && elTuz.checked == false && elKurka.checked == false && elQoziq.checked == false && elQazi.checked == false){
    }}
    
})
elQazi.addEventListener('click', ()=>{
    if(elQazi.checked){
        elItem6.textContent = '+ Qazi'
        elPomidor.textContent = a
        elBodring.textContent = a
        elSir.textContent = a
    }else if(elQazi.checked == false){
        elItem6.textContent = ''
        if(elPomid.checked == false && elTuz.checked == false && elKurka.checked == false && elQoziq.checked == false && elZaytun.checked == false){
    }}
    
})

elGorko.addEventListener('click', ()=>{
    if(elGorko.checked){
        elItem7.textContent = '+ Achiq'
        elAchiq.textContent = a
        elPishloq.textContent = a
    }else if(elGorko.checked == false){
        elItem7.textContent = a
        if(elSirok.checked == false){
            elAchiq.textContent = ''
            
            elPishloq.textContent = ''
        }
    }
})
elSirok.addEventListener('click', ()=>{
    if(elSirok.checked){
        elItem8.textContent = '+ Pishloq'
        elAchiq.textContent = a
        elPishloq.textContent = a
    }else if(elSirok.checked == false){
        elItem8.textContent = a
        if(elGorko.checked == false){
            elAchiq.textContent = ''
            
            elPishloq.textContent = ''
        }
    }
})
elButton123.addEventListener('click', function(){
    console.log(elH.textContent + ' '  + elRazmer2.textContent + elItem1.textContent + elItem2.textContent + elItem3.textContent + elItem4.textContent + elItem5.textContent + elItem6.textContent + elItem7.textContent+ elItem8.textContent);
})

