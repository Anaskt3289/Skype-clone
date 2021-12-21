
    jQuery("#loginemail").validate({
        rules:{
            mail:{
                required:true,
                minlength:6,
                email:true
            },
            pass:{
                required:true,
                minlength:6,
            }
        }
    })

