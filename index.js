
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
     document.getElementById('years').textContent=`${year}`;

const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showNextTestimonial() {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}

setInterval(showNextTestimonial, 3000); 
//
     const sendbtn=document.getElementById('send');
            const notis=document.getElementById('notify');
            const email=document.getElementById('email');
            const name1=document.getElementById('email1');
            const message=document.getElementById('text-content');

            sendbtn.addEventListener('click',function(){
                if(email.value ==='' || name1.value ==='' || message.value ===''){
                    notis.style.color='red';
                    notis.innerHTML='please fill in all fields';
                }else{
                    notis.style.color='green';
                    notis.innerHTML='message sent successfully';
                    email.value='';
                    name1.value='';
                    message.value='';
                }
            });


// change every 4 seconds
/*
 const notis=document.getElementById('notification');
 const notisimg=document.getElementById('notify-img');
 const error=document.getElementById('notify');
 const msg=document.getElementById('noti-message');
 

 const closebtn=document.getElementById('close-notis');
 closebtn.addEventListener('click',()=>{
  notis.style.display="none";
 });
 //account button index.html
document.getElementById('login').addEventListener('click',()=>{
  notis.style.display="";
  notisimg.innerHTML='<img src="img/bg.png'alt="image"/>;
  error.innerHTML="<h3>ERROR</h3>"
  msg.innerHTML="<p>sorry feature coming soon</p>"

});

 //form val;idation
 const phone=document.getElementById('phone').value;
 const email=document.getElementById('email').value;
 const pass1=document.getElementById('pass1').value;
 const pass2=document.getElementById('phone').value;
 const valid=document.getElementById('validphone').value;
 pass2.addEventListener('input',()=>{
 if(pass1===pass2){
  document.getElementById('pass-success').innerHTML="<p>success</p>";
 }else{
   document.getElementById('pass-success').textContent="<p>no match</P>";
 }
});
*/


 
 



 