let kgr = document.getElementById('kg');
let ibr = document.getElementById('ib');
let ozr = document.getElementById('oz');

kgref = () =>{
    let kg = kgr.value;
    ibr.value = (kg*2.205).toFixed(3);
    ozr.value = (kg*35.274).toFixed(3);
}
ibref = () =>{
    let ib = ibr.value;
    kgr.value = (ib/2.205).toFixed(3);
    ozr.value = (ib*16).toFixed(3);
}
ozref = () =>{
    let oz = ozr.value;
    ibr.value = (oz/16).toFixed(3);
    kgr.value = (oz/35.274).toFixed(3);
}

kg.addEventListener('input', kgref);
ibr.addEventListener('input', ibref);
ozr.addEventListener('input', ozref);