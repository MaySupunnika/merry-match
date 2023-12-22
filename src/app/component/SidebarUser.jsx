import React from "react";

export default function SidebarUser() {
  return (
    <div className="w-[20%] h-screen bg-white flex flex-col items-center">
      <div className="h-[260px] border-Gray-300 border-b flex justify-center items-center">
        <div className="border border-Purple-500 bg-Gray-100 rounded-xl w-[85%] h-[187px] flex flex-col items-center justify-center">
          <div className="w-[56px] mb-1">
            <img
              className="flex justify-center"
              src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/search-love.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvc2VhcmNoLWxvdmUuc3ZnIiwiaWF0IjoxNzAwNTc0NTExLCJleHAiOjE3MzIxMTA1MTF9.Ugb7GHllghHP0ZUthAGKZFW9Ch_80itAWLcOWtfDonM&t=2023-11-21T13%3A48%3A32.704Z"
            />
          </div>
          <h4 className="text-Red-600 font-bold text-xl mb-1">
            Discover New Match
          </h4>
          <p className="font-medium text-Gray-700 text-center text-sm">
            Start find and Merry to get know and connect with new friend!
          </p>
        </div>
      </div>
      <div className="w-[85%] flex flex-col mt-3">
        <h4 className="text-Gray-900 font-bold text-xl mb-3">Merry Match!</h4>
        <div className="w-[70px] h-[70px] relative">
          <img
            className="rounded-xl"
            src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/example-profile?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZXhhbXBsZS1wcm9maWxlIiwiaWF0IjoxNzAwNTc2MDEwLCJleHAiOjE3MzIxMTIwMTB9.r_DipvoqFhGYgcXL1W19fUE5VqHJcDzpz7x9u1z-jKo&t=2023-11-21T14%3A13%3A31.196Z"
          />
        </div>
        <div className="h-[16px] w-[30px] absolute z-20 top-[66%] left-[4.5%]">
          <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/two-love.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvdHdvLWxvdmUuc3ZnIiwiaWF0IjoxNzAwNTc2NTQ2LCJleHAiOjE3MzIxMTI1NDZ9.kbd2arIjQ3N_GHBZiWcarIJYCvR0U2ug59NR06zbTo8&t=2023-11-21T14%3A22%3A27.407Z" />
        </div>
      </div>
      <div className="w-[85%] mt-12">
        <h4 className="text-Gray-900 font-bold text-xl mb-3">
          Chat with Merry Match
        </h4>
        <div className="flex">
          <div className="w-[52px] h-[52px]">
            <img
              className="rounded-full"
              src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/example-profile?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZXhhbXBsZS1wcm9maWxlIiwiaWF0IjoxNzAwNTc2MDEwLCJleHAiOjE3MzIxMTIwMTB9.r_DipvoqFhGYgcXL1W19fUE5VqHJcDzpz7x9u1z-jKo&t=2023-11-21T14%3A13%3A31.196Z"
            />
          </div>
          <div className="flex flex-col ml-2 justify-center">
            <p className="text-Gray-900">matched name</p>
            <p className="text-Gray-700 font-bold text-xs">
              You know nothing Jon Snow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
