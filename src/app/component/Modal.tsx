import React from 'react'
import { Modal as MuiModal, Box, Button } from "@mui/material";

type props={
 text:string,
open: any,
close:any
}

function Modal({text, open, close}:props) {

   
  return (
   <MuiModal
        open={open}
        onClose ={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ backgroundColor: 'white', padding: 4, width:"300px", marginTop: '20%', color:"black"  }} >
          <p className="text-secondary font-semibold mb-10">
            {text}
          </p>

         
        </Box>
      </MuiModal>
  )
}

export default Modal
