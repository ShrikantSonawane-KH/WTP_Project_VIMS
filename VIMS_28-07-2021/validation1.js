function frontPagevalidation(){
    var pno = document.getElementById('pno').value; 
    var sno = document.getElementById('sno').value; 
    var rno = document.getElementById('rno').value;
    var mno = document.getElementById('mno').value;

 
    if(pno.trim().length !=4 || pno==null || pno.length != 4 ) 
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


//    if(document.getElementById('gender1').checked != true ) {   
//          if(document.getElementById('gender2').checked != true ) {   
//             alert('Select Geneder');
//             return false; 
//             }
//             return true;
//     }
//     if(MobNo == "" || MobNo.length != 10 ||  isNaN(MobNo)) 
//     {
//         alert('Invalid number');
//         return false;
//     }
//     if( address==null || address =="")
//     {
//         alert('Add Address');
//         return false;
//     }

//     //by using regex to validate the uploaded file
//         var allowed_Image = /(\.jpeg|\.jpg|\.png|\.gif)/i;
//         var allowed_Resume = /(\.pdf)/i;

//         if(!allowed_Resume.exec(Resume_upload))
//         {
//             alert('Invalid file Upload : .pfd');
//             return false;
//         }
        
//         if(!allowed_Image.exec(Image_upload))
//         {
//             alert('Invalid file Upload : .jpeg/.jpg/ .PNG/ .gif');
//             return false;
//         }

    // validation IndexOf method    
        // var a = Resume_upload.substr(Resume_upload.lastIndexOf('.')+1);
        // if( a != 'pdf' )
        // {
        //     alert('Invalid file Upload : .pfd');
        //     document.getElementById('U1').value='';
        //     return false;
        // }

        // var b = Image_upload.substr(Image_upload.lastIndexOf('.')+1);
        
        // if( b != 'jpeg' || b != 'jpg' || b != 'PNG' || b != 'gif')          // error
        // {
        //     alert('Invalid file Upload :.jpeg/.jpg/ .png/ .gif');
        //     document.getElementById('U2').value='';
        //     return false;
        // }
}

    




