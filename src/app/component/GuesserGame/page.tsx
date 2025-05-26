"use client";

import { useEffect, useState } from "react";
import Modal from "../Modal";

export default function GuesserGame() {
  const [randomNumber, setRandomNumber] = useState<Number>(0);
  const [rightModal, setRightModal] = useState(false);
  const [tooHighModal, setTooHighModal] = useState(false);
  const [tooLowModal, setTooLowModal] = useState(false);
  const [giveUpModal, setGiveUpModal] = useState(false);
  const [attempts, setAttempts] = useState(5);
  const [myGuesses, setMyGuesses] = useState<number[]>([]);
  const [theGuesses, setTheGuesses] = useState([])



  const [userGuess, setUserGuess] = useState<Number>(0);


  function generateRandomNumber() {
    const secretNumber = Math.floor(Math.random() * 101);
    setRandomNumber(secretNumber);
    console.log(secretNumber);
  }

  const closeRightModal = () => {
    setRightModal(false);
  };
  const closeTooHighModal = () => {
    setTooHighModal(false);
  };
  const closeTooLowModal = () => {
    setTooLowModal(false);
  };
  const closeGiveUpModal = () => {
    setGiveUpModal(false);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const handleChange = (e: any) => {
    setUserGuess(e.target.value);
  };
 

  const submit = (e: any) => {

    e.preventDefault();
   
    if (attempts > 0) {
     setMyGuesses((prev) => {
      const updated = [...prev, userGuess];

      const review = updated.map((num) => num.toString().padStart(2, "0")+ " ");

      setMyGuesses(review)
      return updated;
    });
   console.log(myGuesses)

      if (randomNumber !== userGuess && userGuess > randomNumber) {
        setTooHighModal(true);
      } else if (randomNumber !== userGuess && userGuess < randomNumber) {
        setTooLowModal(true);
      } else if (userGuess === randomNumber) {
        setRightModal(true);
      }

      setAttempts((prev) => prev - 1);
    } else {
      setGiveUpModal(true);
    }
  };

  return (
    <div>
      <div className="grid text-black grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20s sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
          <h3 className="flex justify-center font-bold text-3xl bg-gradient-to-r from-[#022876] to-[#EFAB04] bg-clip-text text-transparent">
            Guess The Number Game
          </h3>
        </div>

        <div className="flex flex-col gap-y-12 justify-center">
          <form action="" onSubmit={submit}>
            <div className="flex flex-col gap-y-5">
              <p className="font-semibold text-xl">
                Kindly enter your guess here
              </p>

              <div className="flex flex-col gap-y-6 items-center">
                <input
                  type="number"
                  onChange={handleChange}
                  className="p-3 rounded-lg"
                />
                <div className="bg-gradient-to-r w-1/3 flex justify-self-center text-white rounded-lg p-3 from-[#022876] to-[#EFAB04]">
                  <input type="submit" />
                </div>
              </div>
            </div>
          </form>

          <div className="text-center gap-4 flex flex-col">
            <div className="font-bold bg-[#022876] text-[#EFAB04] rounded-xl py-3">
 <p>Here are your guesses :</p>
          <p>{myGuesses}</p>
            </div>
         
          <p className="font-bold text-[#022876] transition-all duration-300 bg-[#EFAB04] mt-10 rounded-xl py-3">No of attempts left: {attempts}</p>
        </div>
        </div>

        
      </div>

      <div>
        {rightModal && (
          <Modal
            open={rightModal}
            close={closeRightModal}
            text="You're just too good at guessing BRUV!!!!"
          />
        )}
      </div>
      <div>
        {tooHighModal && (
          <Modal
            open={tooHighModal}
            close={closeTooHighModal}
            text="Bro, that's way too high buddy!!!"
          />
        )}
      </div>
      <div>
        {tooLowModal && (
          <Modal
            open={tooLowModal}
            close={closeTooLowModal}
            text="Thats way too Low buddy!!!"
          />
        )}
      </div>
      <div>
        {giveUpModal && (
          <Modal
            open={giveUpModal}
            close={closeGiveUpModal}
            text="just give up bro , GAME OVER"
          />
        )}
      </div>
    </div>
  );
}
