const arr = [];


function addactual(){
    const input1 = document.querySelector('.actual-one-input');
    const input2 = document.querySelector('.actual-one-date');
    const name   = input1.value;
    const date   = input2.value; 
    arr.push({name,date});
    input1.value = '';
    input2.value = '';
    loop()

}

function loop(){
    let totlisthtml = '';
    
    arr.forEach((value,index) => {
        const a = value;
        const b = `
                    <div>${a.name}</div>
                    <div>${a.date}</div> 
                    <button class="button-for-delete" onclick = "deleteitem(${index})">Delete</button>
                   `
        totlisthtml += b;
    })
    console.log(totlisthtml);

    document.querySelector('.display-arr').innerHTML = totlisthtml;
}

function deleteitem(index){
    arr.splice(index,1);
    loop();
}