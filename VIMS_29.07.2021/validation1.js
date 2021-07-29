function frontPagevalidation(){
    var pno = document.getElementById('pno').value; // MH17
    var sno = document.getElementById('sno').value; 
    var rno = document.getElementById('rno').value;
    var mno = document.getElementById('mno').value;

    // var passing = /^[0-9a-zA-Z]+$/;
    var First2char = /^[A-Za-z]+$/;
    var num = pno.substring(2, 4);
    var char = pno.substring(0, 2);

    if(pno.trim().length !=4 || pno==null || pno.length != 4 || isNaN(num) || char != char.match(First2char) ) 
    {   
        alert('Invalid Passing Number..!');
        return false;
    }

    var regEx = /^[A-Za-z]+$/;
    if(sno.trim().length != 2 || sno==null || sno.length != 2 || sno != sno.match(regEx)) 
    {   
        alert('Invalid Series Number..!');
        return false;
    }

    if(rno== "" || rno==null || rno.length != 4 || isNaN(rno) ) 
    {   
        alert('Invalid Registration Number..!');
        return false;
    }

    if(mno== "" || mno==null || mno.length != 10 || isNaN(mno) || mno<0 || mno.substring(0, 1) != 01) 
    {   
        alert('Invalid Mobile Number..!');
        return false;
    }
}






    




