import Swal from "sweetalert2";

const showSuccessDialog = (message) => 
     Swal.fire({
        icon: "success",
        title: "Success",
  
        timer: 2000
    });
    
    
const showErrorDialog = (message) => 
        Swal.fire({
           icon: "error",
           title: "error",
      
           timer: 2000
       });

       export const dialogs = {success:showSuccessDialog, error:showErrorDialog};