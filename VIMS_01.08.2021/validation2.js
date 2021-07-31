function SecondPagevalidation(){
    var ppno = document.getElementById('ppno').value; 
    var crc = document.getElementById('crc').value;
    var cb = document.getElementById('cb').value; 
    var mb = document.getElementById('mb').value;
    var rmy = document.getElementById('rmy').value;
    // console.log(mb);
    
    var First2char = /^[A-Za-z]+$/;
    var num = ppno.substring(2, 4);
    var char = ppno.substring(0, 2);

    if(ppno.trim().length !=4 || ppno==null || ppno.length != 4 || isNaN(num) || char != char.match(First2char)) 
    {   
        alert('Invalid Passing Number..!');
        return false;
    }

    var regEx = /^[A-Za-z]+$/;

    if(crc.trim().length >= 20 || crc==null || crc.length >= 20 || crc != crc.match(regEx)) 
    {   
        alert('Invalid City..!');
        return false;
    }

    if(cb== "" || cb==null || cb.length >= 8 || !(isNaN(cb)) || cb<0 || cb.substring(0, 0) != 0) 
    {   
        alert('Invalid Brand..!');
        return false;
    }

    var model = /^[0-9a-zA-Z]+$/;

    if(mb.trim().length >= 10 || mb==null || mb.length >= 10 || mb != mb.match(model)) 
    {   
        alert('Invalid Model..!');
        return false;
    }
    if(rmy== "" ||rmy==null ) 
    {   
        alert('fill the date ..!');
        return false;
    }

}

    




