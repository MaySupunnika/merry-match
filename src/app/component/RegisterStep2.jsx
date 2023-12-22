import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function RegisterStep2() {
  const [sexualIdentity, setSexualIdentity] = useState("");
  const [sexualPreference, setSexualPreference] = useState("");
  const [racialPreference, setRarialPreference] = useState("");
  const [meetingInterest, setMeetingInterest] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [errors, setErrors] = useState({
    sexualIdentity: "",
    sexualPreference: "",
    racialPreference: "",
    meetingInterest: "",
    hobbies: "",
  });

  const validateSexualIdentity = () => {
    if (!sexualIdentity) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sexualIdentity: "required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sexualIdentity: "",
      }));
    }
  };

  const validateSexualPreference = () => {
    if (!sexualPreference) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sexualPreference: "required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sexualPreference: "",
      }));
    }
  };

  const validateRacialPreference = () => {
    if (!racialPreference) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        racialPreference: "required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        racialPreference: "",
      }));
    }
  };

  const validateMeetingInterest = () => {
    if (!meetingInterest) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        meetingInterest: "required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        meetingInterest: "",
      }));
    }
  };

  const validateHobbies = (tags) => {
    if (!hobbies) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        hobbies: "Please select at least one hobby.",
      }));
    } else if (tags.length > 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        hobbies: "Maximum 5",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        hobbies: "",
      }));
    }
    console.log(tags);
  };

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
            <div className="w-[260px] h-[74px] border border-Purple-500 rounded-xl flex justify-start items-center p-3 mr-2 ml-2">
              <div className="w-[42px] h-[42px] bg-Gray-200 rounded-xl text-Purple-500 font-bold flex justify-center items-center mr-4">
                2
              </div>
              <div className="flex flex-col">
                <p className="text-Gray-700 text-xs font-medium">Step 2/3</p>
                <p className="text-Purple-500 font-extrabold">
                  Identities and Interests
                </p>
              </div>
            </div>
            <div className="h-[74px] w-[74px] border border-Gray-300 rounded-xl flex justify-center items-center">
              <div className="bg-Gray-200 text-Gray-600 font-bold w-[42px] h-[42px] rounded-xl flex justify-center items-center">
                3
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[2.5rem]">
          <h4 className="text-xl text-Purple-500 font-bold mb-[1rem]">
            Identities and Interests
          </h4>
          <form>
            <div className="flex">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Sexual dentities
                </label>
                <select
                  className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm focus:outline-none focus:border-Red-500"
                  value={sexualIdentity}
                  onChange={(e) => {
                    setSexualIdentity(e.target.value);
                    validateSexualIdentity();
                  }}
                  onBlur={() => {
                    validateSexualIdentity();
                  }}
                >
                  <option value="" hidden>
                    --Select Sexual Identities--
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="lgbtq+">LGBTQ+</option>
                </select>
                {errors.sexualIdentity && (
                  <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[52.5%]">
                    {errors.sexualIdentity}
                  </p>
                )}
              </div>
              <div className="flex flex-col ml-[15px]">
                <label htmlFor="name" className="text-sm">
                  Sexual preferences
                </label>
                <select
                  className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm focus:outline-none focus:border-Red-500"
                  value={sexualPreference}
                  onChange={(e) => {
                    setSexualPreference(e.target.value);
                    validateSexualPreference();
                  }}
                  onBlur={() => {
                    validateSexualPreference();
                  }}
                >
                  <option value="" hidden>
                    --Select Sexual Preferences--
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="lgbtq+">LGBTQ+</option>
                </select>
                {errors.sexualPreference && (
                  <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[52.5%]">
                    {errors.sexualPreference}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Racial preferences
                </label>
                <select
                  className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm focus:outline-none focus:border-Red-500"
                  value={racialPreference}
                  onChange={(e) => {
                    setRarialPreference(e.target.value);
                    validateRacialPreference();
                  }}
                  onBlur={() => {
                    validateRacialPreference();
                  }}
                >
                  <option value="" hidden>
                    --Select Racial Preferences--
                  </option>
                  <option value="asian">Asian</option>
                  <option value="american">American</option>
                  <option value="europien">Europien</option>
                </select>
                {errors.racialPreference && (
                  <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[64%]">
                    {errors.racialPreference}
                  </p>
                )}
              </div>
              <div className="flex flex-col ml-[15px]">
                <label htmlFor="name" className="text-sm">
                  Meeting interests
                </label>
                <select
                  className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm focus:outline-none focus:border-Red-500"
                  value={meetingInterest}
                  onChange={(e) => {
                    setMeetingInterest(e.target.value);
                    validateMeetingInterest();
                  }}
                  onBlur={() => {
                    validateMeetingInterest(hobbies || []);
                  }}
                >
                  <option value="" hidden>
                    --Select Meeting Interests--
                  </option>
                  <option value="friend">Friend</option>
                  <option value="ons">ONS</option>
                  <option value="fwb">FWB</option>
                  <option value="long-term">Long-term relationship</option>
                </select>
                {errors.meetingInterest && (
                  <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[64%]">
                    {errors.meetingInterest}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="text" className="text-sm">
                Hobbies / Interests (Maximum 5)
              </label>
              <div className="w-[855px] h-[40px]">
                <TagsInput
                  value={hobbies}
                  onChange={(tags) => {
                    console.log(tags);
                    setHobbies(tags);
                    validateHobbies(tags);
                  }}
                  onBlur={() => validateHobbies(hobbies)}
                  name="tags"
                />
                {errors.hobbies && (
                  <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[75.5%]">
                    {errors.hobbies}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
