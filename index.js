
    let a=document.getElementById('menubar');
    a.addEventListener('click',()=>{
        let b=document.getElementById('nav-bar');
        b.style.display="grid"
        b.style.animation="scroll 2s "
    })
    let close=document.getElementById('close').addEventListener('click',()=>{
          let b=document.getElementById('nav-bar');
        b.style.display="none"
    })
    const year=new Date().getFullYear();
    document.getElementById('year').textContent=`${year}`;


 