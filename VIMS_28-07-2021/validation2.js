function Regvarification(){
    var name = document.getElementById('name').value; 
    var MobNo = document.getElementById('MobNo').value; 
    var address = document.getElementById('Addr').value;
    var Resume_upload = document.getElementById('U1').value;
    var Image_upload = document.getElementById('U2').value; 
;
    if(name=="" || name==null ) 
    {
        alert('Invalid Name');
        return false;
    }

   if(document.getElementById('gender1').checked != true ) {   
         if(document.getElementById('gender2').checked != true ) {   
            alert('Select Geneder');
            return false; 
            }
            return true;
    }
    if(MobNo == "" || MobNo.length != 10 ||  isNaN(MobNo)) 
    {
        alert('Invalid number');
        return false;
    }
    if( address==null || address =="")
    {
        alert('Add Address');
        return false;
    }

    //by using regex to validate the uploaded file
        var allowed_Image = /(\.jpeg|\.jpg|\.png|\.gif)/i;
        var allowed_Resume = /(\.pdf)/i;

        if(!allowed_Resume.exec(Resume_upload))
        {
            alert('Invalid file Upload : .pfd');
            return false;
        }
        
        if(!allowed_Image.exec(Image_upload))
        {
            alert('Invalid file Upload : .jpeg/.jpg/ .PNG/ .gif');
            return false;
        }

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

    




