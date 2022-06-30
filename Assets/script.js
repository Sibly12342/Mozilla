$( "#emailForm" ).validate({
    rules: {
        emailBox:{
            required: true,
            email: true,
      }
    }
  })