$("#formValidation").validate({
    rules: {
        name:{
            minlength: 4
        },
        place:{
            minlength: 2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength: 10,
            maxlength: 10
        }
    

    },
    messages: {
        name:{
         required: " please enter your name",
         minlength: "Name at least 4 characters"
        },
        place:{
         required: "Please enter your place",
         minlength: "Name at least 2 characters"
        },
        email:"Please enter your email",
        phone:"Please enter your phone",
        message:"Please enter your message"

      },
   
   
    submitHandler: function(form) {
      form.submit();
    }
   });