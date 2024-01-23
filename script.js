document.addEventListener('DOMContentLoaded',function(){
    fetch('class.json')
    .then(response=>response.json())
    .then(data=>{
        const items=data.json;

        const contentDiv=document.getElementById('content')

        items.forEach(item =>{
            const itemDiv=document.createElement('div')
        })
    })
})