function createBlock(){
    var name=document.getElementById('name').value;
    var element=document.createElement('div');
    element.innerHTML=`Hi ${name}`
    element.style.width='100%';
    element.style.height='50px';
    element.style.lineHeight='50px';
    element.style.textAlign='center';
    element.style.backgroundColor='orange';
    var close=document.createElement('div')
    close.style.width='30px';
    close.style.height='30px';
    close.style.borderRadius="100%";
    close.style.float='right';
    close.innerHTML='X';
    close.style.lineHeight='30px';
    close.style.textAlign='center';
    close.style.backgroundColor='cyan';
    close.style.cursor="pointer";
    element.appendChild(close);
    close.addEventListener('click',function (){
    document.getElementById('right-container-id').removeChild(element);    
    })
    document.getElementById('right-container-id').appendChild(element);
}