import React from "react";

export default function FooterRegister({
  onNextStep,
  onBack,
  currentStep,
  onSubmit,
}) {
  return (
    <div className="w-screen h-[90px] border-t border-Gray-300 bg-white">
      <div className="flex justify-between">
        <p className="mt-5 ml-28 text-Gray-600">
          <span className="text-Gray-700">{currentStep}</span>/3
        </p>
        <div className="flex mt-2 mr-24">
          <button
            className="border border-Red-500 text-Red-500 font-bold rounded-3xl w-[80px] h-[45px] mr-2 hover:text-white hover:bg-Red-500"
            onClick={currentStep > 1 ? onBack : null}
          >
            Back
          </button>
          {currentStep === 3 ? (
            <button
              className="bg-Red-500 border border-Red-500 rounded-3xl w-[120px] h-[45px] text-white font-bold hover:bg-Red-600"
              type="submit"
              onClick={onSubmit}
            >
              Confirm
            </button>
          ) : (
            <button
              className="bg-Red-500 border border-Red-500 rounded-3xl w-[120px] h-[45px] text-white font-bold hover:bg-Red-600"
              onClick={onNextStep}
            >
              Next step
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
