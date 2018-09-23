// alert("Hola Mundo");  

let ElementList = document.querySelectorAll(".fa-star");

ElementList.forEach(function(Element){
    Element.addEventListener('click',function(){
        alert("Estrellita Okey")
    })

    // console.log(Element);
})
