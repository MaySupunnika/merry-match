import React, { useState, useEffect } from "react";

export default function RegisterStep3() {
  const [images, setImages] = useState([]);
  const [selectImage, setSelectImage] = useState(null);

  const clickRemoveImage = (id) => {
    const imageId = id;

    const imageDelete = images.filter((value, id) => {
      return id !== imageId;
    });

    setImages(imageDelete);
    setSelectImage(null);
  };

  const handlerImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((prevImage) => [...prevImage, reader.result]);
        setSelectImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="flex justify-center">
      <div className="w-[930px] h-[500px] flex flex-col mt-[130px]">
        <div className="flex">
          <div className="flex flex-col w-[453px]">
            <p className="text-xs text-Beige-700 font-semibold">REGISTER</p>
            <h2 className="text-4xl font-extrabold text-Purple-500 w-[400px]">
              Join us and start matching
            </h2>
          </div>
          <div className="flex items-end">
            <div className="h-[74px] w-[74px] border border-Gray-300 rounded-xl flex justify-center items-center">
              <div className="bg-Gray-200 text-Gray-600 font-bold w-[42px] h-[42px] rounded-xl flex justify-center items-center">
                1
              </div>
            </div>
            <div className="h-[74px] w-[74px] border border-Gray-300 rounded-xl flex justify-center items-center mr-2 ml-2">
              <div className="bg-Gray-200 text-Gray-600 font-bold w-[42px] h-[42px] rounded-xl flex justify-center items-center">
                2
              </div>
            </div>
            <div className="w-[200px] h-[74px] border border-Purple-500 rounded-xl flex justify-start items-center p-3">
              <div className="w-[42px] h-[42px] bg-Gray-200 rounded-xl text-Purple-500 font-bold flex justify-center items-center mr-4">
                3
              </div>
              <div className="flex flex-col">
                <p className="text-Gray-700 text-xs font-medium">Step 3/3</p>
                <p className="text-Purple-500 font-extrabold">Upload Photos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[3.5rem]">
          <h4 className="text-xl text-Purple-500 font-bold">
            Identities and Interests
          </h4>
          <p className="text-Gray-800 text-sm mb-[3rem]">
            Upload at least 2 photos
          </p>
          <div className="flex">
            {images.length < 1 ? (
              <label className="w-[140px] h-[140px] mr-6 cursor-pointer bg-Gray-200 text-sm text-Purple-600 rounded-xl flex flex-col items-center justify-center">
                <span className="text-3xl text-Purple-600 ">+</span>
                upload photo
                <input
                  type="file"
                  className="hidden"
                  onChange={handlerImageChange}
                />
              </label>
            ) : (
              <>
                <div className="w-[140px] h-[140px] mr-6 rounded-xl relative">
                  <img
                    src={images[0]}
                    className="rounded-xl w-[140px] h-[140px] bg-cover"
                  />
                </div>
                <div
                  className="cursor-pointer bg-Red-500 w-[1.3rem] h-[1.3rem] absolute top-[54%] left-[25%] rounded-full flex justify-center items-center text-lg text-white font-bold"
                  onClick={() => clickRemoveImage(0)}
                >
                  -
                </div>
              </>
            )}
            {images.length < 2 ? (
              <label className="w-[140px] h-[140px] mr-6 cursor-pointer bg-Gray-200 text-sm text-Purple-600 rounded-xl flex flex-col items-center justify-center">
                <span className="text-3xl text-Purple-600 ">+</span>
                upload photo
                <input
                  type="file"
                  className="hidden"
                  onChange={handlerImageChange}
                />
              </label>
            ) : (
              <>
                <div className="w-[140px] h-[140px] mr-6 rounded-xl relative">
                  <img
                    src={images[1]}
                    className="rounded-xl w-[140px] h-[140px] bg-cover"
                  />
                </div>
                <div
                  className="cursor-pointer bg-Red-500 w-[1.3rem] h-[1.3rem] absolute top-[54%] left-[37%] rounded-full flex justify-center items-center text-lg text-white font-bold"
                  onClick={() => clickRemoveImage(1)}
                >
                  -
                </div>
              </>
            )}
            {images.length < 3 ? (
              <label className="w-[140px] h-[140px] mr-6 cursor-pointer bg-Gray-200 text-sm text-Purple-600 rounded-xl flex flex-col items-center justify-center">
                <span className="text-3xl text-Purple-600 ">+</span>
                upload photo
                <input
                  type="file"
                  className="hidden"
                  onChange={handlerImageChange}
                />
              </label>
            ) : (
              <>
                <div className="w-[140px] h-[140px] mr-6 rounded-xl relative">
                  <img
                    src={images[2]}
                    className="rounded-xl w-[140px] h-[140px] bg-cover"
                  />
                </div>
                <div
                  className="cursor-pointer bg-Red-500 w-[1.3rem] h-[1.3rem] absolute top-[54%] left-[49.3%] rounded-full flex justify-center items-center text-lg text-white font-bold"
                  onClick={() => clickRemoveImage(2)}
                >
                  -
                </div>
              </>
            )}
            {images.length < 4 ? (
              <label className="w-[140px] h-[140px] mr-6 cursor-pointer bg-Gray-200 text-sm text-Purple-600 rounded-xl flex flex-col items-center justify-center">
                <span className="text-3xl text-Purple-600 ">+</span>
                upload photo
                <input
                  type="file"
                  className="hidden"
                  onChange={handlerImageChange}
                />
              </label>
            ) : (
              <>
                <div className="w-[140px] h-[140px] mr-6 rounded-xl relative">
                  <img
                    src={images[3]}
                    className="rounded-xl w-[140px] h-[140px] bg-cover"
                  />
                </div>
                <div
                  className="cursor-pointer bg-Red-500 w-[1.3rem] h-[1.3rem] absolute top-[54%] left-[61.4%] rounded-full flex justify-center items-center text-lg text-white font-bold"
                  onClick={() => clickRemoveImage(3)}
                >
                  -
                </div>
              </>
            )}
            {images.length < 5 ? (
              <label className="w-[140px] h-[140px] cursor-pointer bg-Gray-200 text-sm text-Purple-600 rounded-xl flex flex-col items-center justify-center">
                <span className="text-3xl text-Purple-600 ">+</span>
                upload photo
                <input
                  type="file"
                  className="hidden"
                  onChange={handlerImageChange}
                />
              </label>
            ) : (
              <>
                <div className="w-[140px] h-[140px] mr-6 rounded-xl relative">
                  <img
                    src={images[4]}
                    className="rounded-xl w-[140px] h-[140px] bg-cover"
                  />
                </div>
                <div
                  className="cursor-pointer bg-Red-500 w-[1.3rem] h-[1.3rem] absolute top-[54%] left-[73.4%] rounded-full flex justify-center items-center text-lg text-white font-bold"
                  onClick={() => clickRemoveImage(4)}
                >
                  -
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
