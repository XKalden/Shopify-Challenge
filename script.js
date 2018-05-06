$(document).ready(function(){
    
    $('form').submit(function(e){
        e.preventDefault();
        
        // Push to Server if error = False;
        let error = false;
        // reset error Message
        $('.error').html('');
        
        // varables 
        const email = $('input[name=email]').val();
        const select = $('select[name=select_interests]').val();


        console.log('*-----------------*')
        console.log('Email: ', email);
        console.log('Option: ', select);

        // Email validation function that return boolean 
        function emailChecker(email){
        const regualExpress = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regualExpress.test(email);
        }

        // Check if email is Valid
        if(!emailChecker(email)){
            error = true;
            $('.error').html('Please enter a valid email address');
        }

        // Check if select was Changed
        if(select == 'select'){
            error = true;
            $('.error').html('Please select a value');

        }

        // Check if all condions are met
        if(select == 'select' && !emailChecker(email) ){
            error = true;
            $('.error').html('Please enter a valid email address and select a value');
        }

        // Reset Error 
        if(error === true){
            return false;
      
        }

        // HTTP POST request simulation
        if(!error){
            $('.btn').val('Submitting...');
            setTimeout(() => {
                $('form').remove();
                $('.thankYouPage').removeClass('display');      
            }, 2000);
        }
    });

});   



