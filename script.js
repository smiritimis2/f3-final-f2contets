let mains=document.getElementsByTagName("main");
let major=document.getElementById("apidata");
let tb=document.getElementById("row");
let bd=document.getElementsByTagName("body");//fetchimg data from given url

       
function getMenu()
{

 // (resolve,reject)=>{
  return new Promise((resolve,reject)=>{

     fetch('https://free-food-menus-api-production.up.railway.app/burgers').then((apidata)=>{
     console.log(apidata);

      return apidata.json();

        })

.then((actualdata)=>{

         console.log(actualdata);
    
         for(let k=0;k<60;k++)
          {
       
         const mr=document.createElement("div");
        const mydata=actualdata[k];
      
         
        const cr=document.createElement("div");
      
        cr.innerHTML=`
     
      <img src=${mydata.img} height="200" width="200" alt="photo" border="1px solid black" box-sizing="border-box"  justifyContent="space-between" />    
     <br>
      Name: ${mydata.name}
      <br>
      country:${mydata.country} 
      <br>
      Price  ${mydata.price}
      <br>
     
      <br>
     
     
       Rating -${mydata.rate}
       <br>
       Description -${mydata.dsc}
      <br>
      
      
      `
    
      cr.style.height="370px";
      cr.style.width="200px";
      cr.style.borderStyle="solid";
    
    cr.style.borderRadius="5px";
    cr.style.borderColor="black"
    cr.style.display="block";
  
    major.append(cr);
    
    }

     })
     resolve(obj);   
  })
}


  
 


 

    let count=0;
    let obj={};
      
  
  function takeorder(){
  

  

  return new Promise((resolve,reject)=>{
  
      fetch('https://free-food-menus-api-production.up.railway.app/burgers').then((apidata)=>{
      console.log(apidata);
      
      return apidata.json();
      
      }).then((actualdata)=>{
  
  
       let k=Math.floor(Math.random()*60);
 

      console.log("Taking order")
       if(k<=57)
       {
          const mydata1=actualdata[k];
          const mydata2=actualdata[k+1];
          const mydata3=actualdata[k+2];
     


     count++;
    
    
    console.log(k);
    

      obj={
        first:`${mydata1.name}`,
        second:`${mydata2.name}`,
       third:`${mydata3.name}`
         }

      console.log(obj.first);
      console.log(obj.second);
      console.log(obj.third);
   }
  })
resolve(obj);

 } )
}


  
    
    
    
  //  let count=0;
    let obk={};
  
    
   function orderPrep(){

 
      
 return new Promise((resolve,reject)=>{

    console.log("order is under preparation")
    //let obj={};let obj1={};let obj2={};let obj3={};
    
    
    

      obk={
       order_status:true,
       paid:false
         }
         resolve(obk);
      
    
   }

   

 )

   }  
    
    
    
    

  
  


  let obf={}; var paystatus;
   var counter=0;
  
 function payOrder(){


    return new Promise((resolve,reject)=>{
  console.log("payment is done")


    obf={
     order_status:true,
     paid:true
       }
    counter++;
    paystatus=obf.paid;
     
   resolve(obf);
      



      })}

    
 function thankyouFnc()
  {

   // setTimeout(()=>)
   return new Promise((resolve,reject)=>{
     console.log(counter);
    console.log(paystatus);
       if(counter===1)
       {
          if(paystatus==true)
            {
        console.log("done");
         //alert("THANK YOU");
           }
      }
     alert('THANK YOU')
      //resolve(alert('THANK YOU'));
   
    })
  }
  setTimeout(thankyouFnc,3000);

window.onload=getMenu()

  .then(()=>{setTimeout(takeorder(),2500)})
  .then(()=>{setTimeout(orderPrep(),1500)})
 .then(()=>{setTimeout(payOrder(),1000)})
  //.then(()=>{setTimeout(thankyouFnc(),3000)})
.catch((error)=>{


    console.log(`The Error: ${error}`);
});