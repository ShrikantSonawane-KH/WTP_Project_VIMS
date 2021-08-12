function ThirdPagevalidation(){
    var pno = document.getElementById('pno').value;
    var eno = document.getElementById('eno').value; 
    var cno = document.getElementById('cno').value;
    var mno = document.getElementById('mno').value; 
    var name = document.getElementById('name').value;
    var eid = document.getElementById('eid').value;
    var ps = document.getElementById('ps').value;

    var First2char = /^[A-Za-z]+$/;
    var num = pno.substring(2, 4);
    var char = pno.substring(0, 2);

    if(pno.trim().length !=4 || pno==null || pno.length != 4 || isNaN(num) || char != char.match(First2char) ) 
    {   
        alert('Invalid Passing Number..!');
        return false;
    }

    console.log(ps);
    var engine =/^[0-9a-zA-Z]+$/;
 
    if(eno.trim().length >=10 || eno==null || eno.length >= 10 || eno != eno.match(engine)) 
    {   
        alert('Invalid Engine Number..!');
        return false;
    }

    var chassis = /^[0-9a-zA-Z]+$/;

    if(cno.trim().length >= 17 || cno==null || cno.length >= 17 || cno != cno.match(chassis)) 
    {   
        alert('Invalid Chassis Number..!');
        return false;
    }

    if(mno== "" || mno==null || mno.length != 10 || isNaN(mno) || mno<0 || mno.substring(0, 1) != 01) 
    {   
        alert('Invalid Mobile Number..!');
        return false;
    }

    var NameFormat =  /^[a-zA-Z ]$/;
    if(name.trim().length =="" || !(isNaN(name))) 
    {   
        alert('Invalid Name..!'); 
        return false;
      
    }

    // remain
    var eformat =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(eid.trim().length =="" || eid==null ||  eid != eid.match(eformat)) 
    {   
        alert('Invalid Email..!');
        return false;
    }

    if(ps.trim().length =="" || ps==null) 
    {   
        alert('Fill Date..!');
        return false;
    }


}

    




