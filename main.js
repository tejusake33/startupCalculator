 document.querySelector('#find').addEventListener('click',function(e){
   e.preventDefault();

     var lusers=document.getElementById('amount').value;
     var growth=document.getElementById('ir').value;
     var growth2 = (growth/100)+1;
     var churn = document.getElementById('churn').value;
     var churn2 = churn/100;

     var u1 = (lusers*growth2) - (lusers*churn2);
  
     var u2 = (u1*growth2) - (u1*churn2);

     var u3 = (u2*growth2) - (u2*churn2);
 
     var u4 = (u3*growth2) - (u3*churn2);
 
     var u5 = (u4*growth2) - (u4*churn2);
    

     var users=document.querySelector('.user');
     users.innerHTML=Math.trunc(u5);

 })

