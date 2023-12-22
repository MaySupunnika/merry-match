import React, { useState, useEffect } from "react";

export function PopupProfile({ isOpen, onRequestClose }) {
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
        <div className="w-[50rem] h-[34rem] bg-white rounded-xl flex flex-col ">
          <div
            className="absolute top-3 right-5 text-Gray-700 text-xl cursor-pointer"
            onClick={onRequestClose}
          >
            x
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <div className="w-[18rem] h-[20rem] mr-[2rem] mt-[7rem]">
                <img
                  className="w-[100%] h-[100%] rounded-3xl object-cover bg-center"
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/profile-fake.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvcHJvZmlsZS1mYWtlLmpwZyIsImlhdCI6MTcwMjA0OTYyNywiZXhwIjoxNzMzNTg1NjI3fQ.aE4PPBTPL8n8T9gtSbaHgG_4GjX6FUpqszxw8E664iA&t=2023-12-08T15%3A33%3A47.618Z"
                />
              </div>
              <div className="flex mt-2">
                <p className="text-Gray-700 text-sm ml-[1rem]">
                  1<span className="text-Gray-600">/2</span>
                </p>
                <div className="flex ml-[11rem]">
                  <p className="text-Gray-600 mr-4 cursor-pointer">🡨</p>
                  <p className="text-Gray-600 cursor-pointer">🡪</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="cursor-pointer absolute top-[74%] left-[17%] w-[3.5rem] h-[3.5rem]"
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/not-button.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvbm90LWJ1dHRvbi5zdmciLCJpYXQiOjE3MDIxMzMxOTYsImV4cCI6MTczMzY2OTE5Nn0.XgumDlHlw7umIA7Mr-Y3KjYwdPn5az9tFhR0vyWRwqo&t=2023-12-09T14%3A46%3A37.568Z"
                />
                <img
                  className="cursor-pointer absolute top-[74%] left-[23%] w-[3.5rem] h-[3.5rem]"
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/love-button.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvbG92ZS1idXR0b24uc3ZnIiwiaWF0IjoxNzAyMTMzMjI0LCJleHAiOjE3MzM2NjkyMjR9.UevP3kRa_k5SYGH7m4XnxFTgelIHYabCmhqIDxLMGNs&t=2023-12-09T14%3A47%3A05.221Z"
                />
              </div>
            </div>
            <div className="flex flex-col mt-[5rem]">
              <h2 className="text-Gray-900 font-extrabold text-3xl">
                Danny <span className="text-Gray-700 ml-2">25</span>
              </h2>
              <div className="flex mt-2">
                <img
                  className="w-[24px] h-24px]"
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/icon-location.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvaWNvbi1sb2NhdGlvbi5zdmciLCJpYXQiOjE3MDIwNTAxOTUsImV4cCI6MTczMzU4NjE5NX0.TXW9yArs-A1VGmvdvgrJvuhh6tCuJNBvz8s9ZxbGvf8&t=2023-12-08T15%3A43%3A15.258Z"
                />
                <p className="text-Gray-700 text-lg font-semibold">
                  Bangkok, Thailand
                </p>
              </div>
              <div className="flex mt-4">
                <div className="flex flex-col mr-[3rem]">
                  <p className=" text-Gray-900 mb-1">Sexual identities</p>
                  <p className="text-Gray-900 mb-1">Sexual preferences</p>
                  <p className="text-Gray-900 mb-1">Racial preferences</p>
                  <p className="text-Gray-900">Meeting interests </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-Gray-700 font-bold mb-1">Female</p>
                  <p className="text-Gray-700 font-bold mb-1">Male</p>
                  <p className="text-Gray-700 font-bold mb-1">Indefinite</p>
                  <p className="text-Gray-700 font-bold">
                    Long-term relationship
                  </p>
                </div>
              </div>
              <h4 className="text-lg text-Gray-900 font-bold mt-4">About me</h4>
              <p className="text-Gray-900 mt-1">I know nothing..but you</p>
              <h4 className="text-lg text-Gray-900 font-bold mt-5">
                Hobbies and Interests
              </h4>
              <div className="flex flex-wrap gap-3 w-[24rem] mt-4">
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  dragon
                </div>
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  romantic relationship
                </div>
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  political
                </div>
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  black hair
                </div>
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function PopupProfileMatch({ isOpen2, onRequestClose2 }) {
  return (
    <>
      {isOpen2 && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-Red-200 opacity-20 z-20"></div>
      )}
      <div
        className={`fixed top-[50%] left-[50%] z-30 transform ${
          isOpen2 ? "" : "hidden"
        } -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="w-[50rem] h-[34rem] bg-white rounded-xl flex flex-col ">
          <div
            className="absolute top-3 right-5 text-Gray-700 text-xl cursor-pointer"
            onClick={onRequestClose2}
          >
            x
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <div className="w-[18rem] h-[20rem] mr-[2rem] mt-[7rem]">
                <img
                  className="w-[100%] h-[100%] rounded-3xl object-cover bg-center"
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/profile-fake.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvcHJvZmlsZS1mYWtlLmpwZyIsImlhdCI6MTcwMjA0OTYyNywiZXhwIjoxNzMzNTg1NjI3fQ.aE4PPBTPL8n8T9gtSbaHgG_4GjX6FUpqszxw8E664iA&t=2023-12-08T15%3A33%3A47.618Z"
                />
              </div>
              <div className="flex mt-2">
                <p className="text-Gray-700 text-sm ml-[1rem]">
                  1<span className="text-Gray-600">/2</span>
                </p>
                <div className="flex ml-[11rem]">
                  <p className="text-Gray-600 mr-4 cursor-pointer">🡨</p>
                  <p className="text-Gray-600 cursor-pointer">🡪</p>
                </div>
              </div>
              <div className="flex">
                <img
                  className="cursor-pointer absolute top-[74%] left-[17%] w-[3.5rem] h-[3.5rem]"
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/not-button.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvbm90LWJ1dHRvbi5zdmciLCJpYXQiOjE3MDIxMzMxOTYsImV4cCI6MTczMzY2OTE5Nn0.XgumDlHlw7umIA7Mr-Y3KjYwdPn5az9tFhR0vyWRwqo&t=2023-12-09T14%3A46%3A37.568Z"
                />
                <img
                  className="cursor-pointer absolute top-[74%] left-[23%] w-[3.5rem] h-[3.5rem]"
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/love-button.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvbG92ZS1idXR0b24uc3ZnIiwiaWF0IjoxNzAyMTMzMjI0LCJleHAiOjE3MzM2NjkyMjR9.UevP3kRa_k5SYGH7m4XnxFTgelIHYabCmhqIDxLMGNs&t=2023-12-09T14%3A47%3A05.221Z"
                />
              </div>
            </div>
            <div className="flex flex-col mt-[5rem]">
              <h2 className="text-Gray-900 font-extrabold text-3xl">
                Danny <span className="text-Gray-700 ml-2">25</span>
              </h2>
              <div className="flex mt-2">
                <img
                  className="w-[24px] h-24px]"
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/icon-location.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvaWNvbi1sb2NhdGlvbi5zdmciLCJpYXQiOjE3MDIwNTAxOTUsImV4cCI6MTczMzU4NjE5NX0.TXW9yArs-A1VGmvdvgrJvuhh6tCuJNBvz8s9ZxbGvf8&t=2023-12-08T15%3A43%3A15.258Z"
                />
                <p className="text-Gray-700 text-lg font-semibold">
                  Bangkok, Thailand
                </p>
              </div>
              <div className="flex mt-4">
                <div className="flex flex-col mr-[3rem]">
                  <p className=" text-Gray-900 mb-1">Sexual identities</p>
                  <p className="text-Gray-900 mb-1">Sexual preferences</p>
                  <p className="text-Gray-900 mb-1">Racial preferences</p>
                  <p className="text-Gray-900">Meeting interests </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-Gray-700 font-bold mb-1">Female</p>
                  <p className="text-Gray-700 font-bold mb-1">Male</p>
                  <p className="text-Gray-700 font-bold mb-1">Indefinite</p>
                  <p className="text-Gray-700 font-bold">
                    Long-term relationship
                  </p>
                </div>
              </div>
              <h4 className="text-lg text-Gray-900 font-bold mt-4">About me</h4>
              <p className="text-Gray-900 mt-1">I know nothing..but you</p>
              <h4 className="text-lg text-Gray-900 font-bold mt-5">
                Hobbies and Interests
              </h4>
              <div className="flex flex-wrap gap-3 w-[24rem] mt-4">
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  dragon
                </div>
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  romantic relationship
                </div>
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  political
                </div>
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  black hair
                </div>
                <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[10px] py-[5px]">
                  friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
