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
        <Box sx={{   position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color:"black",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4, }} >
          <p className="text-secondary font-semibold mb-10">
            {text}
          </p>

         
        </Box>
      </MuiModal>
  )
}

export default Modal
