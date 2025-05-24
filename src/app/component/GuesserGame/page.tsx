"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../Modal";



export default function GuesserGame() {

  const {handleSubmit}= useForm()
const [randomNumber, setRandomNumber] = useState<number>(0)
const [wrongModal, setWrongModal] = useState(false)
const [rightModal, setRightModal] = useState(false)
const [tooHighModal, setTooHighModal] = useState(false)
const [tooLowModal, setTooLowModal] = useState(false)
const [giveUpModal, setGiveUpModal] = useState(false)

const [userGuess, setUserGuess] = useState<number>(0)

  function generateRandomNumber(){
    const secretNumber = Math.floor(Math.random()*101)
    setRandomNumber(secretNumber)
  }


  const closeWrongModal =()=>{
    setWrongModal(false)
  }
    const closeRightModal =()=>{
    setRightModal(false)
  }
  const closeTooHighModal=()=>{
    setTooHighModal(false)
  }
    const closeTooLowModal=()=>{
    setTooLowModal(false)
  }
    const closeGiveUpModal=()=>{
    setTooHighModal(false)
  }

  useEffect(()=>{
    generateRandomNumber()
  },[])


const handleChange=(e: any)=>{
 setUserGuess(e.target.value)
 console.log(userGuess)
}

const attempts = 5

const submit =(e:any)=>{
  e.preventDefault()


  if(attempts <= 5 && randomNumber !== userGuess){
      setWrongModal(true)
  }
  else if (attempts <=5 && userGuess > randomNumber ){
    setTooHighModal(true)
  }
  else if (attempts <=5 && userGuess === randomNumber){
    setRightModal(true)
  }

}


  return (
    <div>
    <div className="grid text-black grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
          <h3 className="flex justify-center font-bold text-3xl bg-gradient-to-r from-[#022876] to-[#EFAB04] bg-clip-text text-transparent">Guess The Number Game</h3>
      </div>

      <div>
         <form action="" onSubmit={submit} >
          <div className="flex flex-col gap-y-5">
 <p className="font-semibold text-xl">Kindly enter your guess here</p>

             <div className="flex flex-col gap-y-6 items-center">

               <input type="number" onChange={handleChange} className="p-3 rounded-lg"  />
               <div className="bg-gradient-to-r w-1/3 flex justify-self-center text-white rounded-lg p-3 from-[#022876] to-[#EFAB04]">
  <input type="submit" />
               </div>
      
            </div>
          </div>
           

         </form>
      </div>
    </div>


    <div>
      {wrongModal && (  <Modal open={wrongModal} close={closeWrongModal}  text="Never seen a guess so wrong in my entire existence"/>
  )}
      </div>
 <div>
      {rightModal && (  <Modal open={rightModal} close={closeRightModal}  text="You're just too good at guessing BRUV!!!!"/>
  )}
      </div>
      <div>
      {tooHighModal && (  <Modal open={tooHighModal} close={closeTooHighModal}  text="Bro, that's way too high buddy!!!"/>
  )}
      </div>
      <div>
      {tooLowModal && (  <Modal open={tooLowModal} close={closeTooLowModal}  text="Thats way too Low buddy!!!"/>
  )}
      </div>
       <div>
      {giveUpModal && (  <Modal open={giveUpModal} close={giveUpModal}  text="just give up bro"/>
  )}
      </div>
    </div>
  );
}
