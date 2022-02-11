function store() {
    const firstname= document.getElementById('fname').value;
    const middlename= document.getElementById('mname').value;
    const lastname= document.getElementById('lname').value;
    const phonenumber= document.getElementById('number').value;
    const email= document.getElementById('email').value;
    const address= document.getElementById('address').value;
    const gender = document.getElementById("gender").value;

    localStorage.setItem('Fname',firstname);
    localStorage.setItem('Mname',middlename);
    localStorage.setItem('Lname',lastname);
    localStorage.setItem('number',phonenumber);
    localStorage.setItem('email',email);
    localStorage.setItem('address',address);
    localStorage.setItem('gender',gender);
    return;
    }

function editinfo() {
    const Firstname = localStorage.getItem('Fname');
    const Middlename = localStorage.getItem('Mname');
    const Lastname = localStorage.getItem('Lname');
    const fullname= Firstname +' '+ Middlename+ ' '+ Lastname;
    const Address= localStorage.getItem('address');
    const Phonenumber= localStorage.getItem('number');
    const Email= localStorage.getItem('email');
    const Gender= localStorage.getItem('gender');

    document.getElementById("cvname").innerHTML= '<strong> '+ fullname +' </strong> ' +' <br> '+Gender +' <br> '+ Address+' <br> ' + Phonenumber+' <br> '+Email;
    
    return;
    } 

function check(){
    const firstname= document.getElementById('fname').value;
    const middlename= document.getElementById('mname').value;
    const lastname= document.getElementById('lname').value;
    const phonenumber= document.getElementById('number').value;
    const email= document.getElementById('email').value;
    const address= document.getElementById('address').value;

    const checkname = /^[A-Za-z]{3,30}$/;
    const checkemail = /^[A-Za-z_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const checknumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\/0-9]*$/;
    const checkaddress = /^[#.0-9a-zA-Z\s,-]+$/;

    if(checkname.test(firstname)){
        document.getElementById('errorfname').innerHTML=" ";
    }
    else{
        document.getElementById("errorfname").innerHTML="  The name you entered is invalid. <br>";
        return false;
    }

    if(checkname.test(middlename)){
        document.getElementById('errormname').innerHTML=" ";
    }
    else{
        document.getElementById("errormname").innerHTML="   The name you entered is invalid. <br>";
        return false;
    }

    if(checkname.test(lastname)){
        document.getElementById('errorlname').innerHTML=" ";
    }
    else{
        document.getElementById("errorlname").innerHTML="   The name you entered is invalid. <br>";
        return false;
    }

    if(checknumber.test(phonenumber)){
        document.getElementById('errornumber').innerHTML=" ";
    }
    else{
        document.getElementById("errornumber").innerHTML="   The phone number you entered is invalid. <br>";
        return false;
    }

    if(checkemail.test(email)){
        document.getElementById('erroremail').innerHTML=" ";
    }
    else{
        document.getElementById("erroremail").innerHTML="   The email you entered is invalid. <br>";
        return false;
    }

    if(checkaddress.test(address)){
        document.getElementById('erroraddress').innerHTML=" ";
    }
    else{
        document.getElementById("erroraddress").innerHTML="   The address you entered is invalid. <br>";
        return false;
    }




}

