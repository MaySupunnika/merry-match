import React from "react";

export function ModalDeleteAccount({ isOpen, onRequestClose, confirmDelete }) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-Red-200 opacity-20 z-20"></div>
      )}
      <div
        className={`fixed top-[50%] left-[50%] z-30 transform ${
          isOpen ? "" : "hidden"
        } -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="bg-white w-[30rem] h-[12rem] rounded-xl flex flex-col shadow-[15px_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex justify-between w-full border-b border-Gray-300">
            <p className="text-xl font-semibold pl-7 py-3">
              Delete Confirmation
            </p>
            <p
              className="text-xl text-Gray-500 pr-4 pt-3 cursor-pointer"
              onClick={onRequestClose}
            >
              x
            </p>
          </div>
          <p className="text-Gray-700 ml-7 mt-4">
            Do you sure to delete account?
          </p>
          <div className="flex ml-7 mt-5">
            <button
              onClick={confirmDelete}
              className="text-white font-semibold bg-Red-500 py-[12px] px-[24px] rounded-full h-[48px] w-[199px] mr-3 hover:bg-Red-600"
            >
              Yes, I want to delete
            </button>
            <button
              onClick={onRequestClose}
              className="text-Red-600 font-semibold bg-Red-100 py-[12px] px-[24px] rounded-full h-[48px] w-[125px] hover:bg-Red-500 hover:text-white mr-4"
            >
              No, I don’t
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
