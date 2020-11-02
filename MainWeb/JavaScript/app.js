/*
Nombre completo: Debe tener más de 6 letras y al menos un espacio entre medio.
Email: debe tener un formato de email válido.
Contraseña: Al menos 8 caracteres, formados por letras y números.
RepeatPassword
Edad: Número entero mayor o igual a 18.
Teléfono: Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.
Dirección: Al menos 5 caracteres, con letras, números y un espacio en el medio.
Ciudad: Al menos 3 caracteres.
Código Postal: Al menos 3 caracteres.
DNI: Número de 7 u 8 dígitos.
*/
window.onload = function(){

    //Name Verification*************************
    document.getElementById('name').addEventListener('blur', validateName);

    function validateName(){
        var nombre = document.getElementById('name').value;
        var nameFormat = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;;
        if(nombre.length > 6 && nombre.match(nameFormat))
        {
            document.getElementById('spanName').textContent = "Approved";
            document.getElementById('spanName').className = 'approvedText';
        }
        else{
            alert("The name must have at least 6 characters and only one space in between");
            document.getElementById('spanName').textContent = "Not Approved";
            document.getElementById('spanName').className = 'errorText';
        }
    }

    document.getElementById('name').addEventListener('focus', cleanName);
    function cleanName(){
        document.getElementById('spanName').className = 'removedText';
    }

    //Email Verification*************************
    document.getElementById('email').addEventListener('blur', validateEmail);

    function validateEmail(){
        var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var email = document.getElementById('email').value;
        if (email.match(mailFormat)){
            document.getElementById('spanEmail').textContent = "Approved";
            document.getElementById('spanEmail').className = 'approvedText';
        }
        else{
            alert("Please insert a valid email format")
            document.getElementById('spanEmail').textContent = "Not Approved";
            document.getElementById('spanEmail').className = 'errorText';
        }
    }

    document.getElementById('email').addEventListener('focus', cleanEmail);
    function cleanEmail(){
        document.getElementById('spanEmail').className = 'removedText';
    }

    //Password Verification*************************
    var password;
    document.getElementById('password').addEventListener('blur', validatePassword);
    function validatePassword(){
        password = document.getElementById('password').value;
        var validPassword = /[A-Za-z0-9]+/;
        var hasNumbers = /\d/;
        if (password.length > 8 && password.match(validPassword) && password.match(hasNumbers)){
            document.getElementById('spanPass').textContent = "Approved";
            document.getElementById('spanPass').className = 'approvedText';
            console.log(password);
            return password;
        }
        else{
            alert("The password must have at least 8 characters mixed with numbers")
            document.getElementById('spanPass').textContent = "Not Approved";
            document.getElementById('spanPass').className = 'errorText';
        }
    }
    console.log(password);
    document.getElementById('password').addEventListener('focus', cleanPass);
    function cleanPass(){
        document.getElementById('spanPass').className = 'removedText';
    }

    //Password Verification*************************

    //Age Verification*************************
    document.getElementById('age').addEventListener('blur', validateAge);
    function validateAge(){
        var age = document.getElementById('age').value;
        var validAge = /^(0|[1-9]\d*)$/;
        if (age < 18 || isNaN(age)){
            alert("The age must be higher than 18")
            document.getElementById('spanAge').textContent = "Not Approved";
            document.getElementById('spanAge').className = 'errorText';
        }
        else if(age.match(validAge)){
            document.getElementById('spanAge').textContent = "Approved";
            document.getElementById('spanAge').className = 'approvedText';
        }
    }

    document.getElementById('age').addEventListener('focus', cleanAge);
    function cleanAge(){
        document.getElementById('spanAge').className = 'removedText';
    }

    //PhoneNumber Verification*************************
    document.getElementById('phone').addEventListener('blur', validatePhone);
    function validatePhone(){
        var phone = document.getElementById('phone').value;
        var validPhone = /^(0|[1-9]\d*)$/;
        console.log(phone);
        if (phone < 7 || isNaN(phone)){
            alert("Insert a valid phone number")
            document.getElementById('spanPhone').textContent = "Not Approved";
            document.getElementById('spanPhone').className = 'errorText';
        }
        else if(phone.match(validPhone)){
            document.getElementById('spanPhone').textContent = "Approved";
            document.getElementById('spanPhone').className = 'approvedText';
        }
    }

    document.getElementById('age').addEventListener('focus', cleanPhone);
    function cleanPhone(){
        document.getElementById('spanPhone').className = 'removedText';
    }

    //PhoneNumber Verification*************************
    document.getElementById('phone').addEventListener('blur', validatePhone);
    function validatePhone(){
        var phone = document.getElementById('phone').value;
        var validPhone = /^(0|[1-9]\d*)$/;
        console.log(phone);
        if (phone < 7 || isNaN(phone)){
            alert("Insert a valid phone number")
            document.getElementById('spanPhone').textContent = "Not Approved";
            document.getElementById('spanPhone').className = 'errorText';
        }
        else if(phone.match(validPhone)){
            document.getElementById('spanPhone').textContent = "Approved";
            document.getElementById('spanPhone').className = 'approvedText';
        }
    }

    document.getElementById('age').addEventListener('focus', cleanPhone);
    function cleanPhone(){
        document.getElementById('spanPhone').className = 'removedText';
    }
}


