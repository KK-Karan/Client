import { useState } from "react";
import { Button } from "@nextui-org/react";
function Job() {
  const [showModal, setShowModal] = useState(false);
  const [applied , setApplied] = useState(false)

  const handleApply = () => {
    setApplied(true);
  };

    return (
      <>
       <div>
        <div className="job__portal">
          <h1 className="title">Job Portal</h1>
        </div>
          <div className="company__container">
            <div className="company__info">
              <p onClick={() => setShowModal(true)} className="company__name">DE Shaw</p>
              <button onClick={handleApply} className="company__button">{applied ? "Applied!" : "Apply"}</button>
            </div>

            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal__box"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               
                {/*body*/}
                <div className="relative p-6 flex-auto job__modal">
                <p className="text-black text-xl">Company Name</p>
                <p className="text-black text-xl">Company Description</p>
                <p className="text-black text-xl">CGPA</p>
                <p className="text-black text-xl">Branch Eligible</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowModal(false)}
                    color="secondary"
                    variant="flat"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          </div>
       </div>
      </>
    )
  }
  
  export default Job