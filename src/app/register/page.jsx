"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../component/Navbar";
import FooterRegister from "../component/FooterRegister";
import LocationData from "../mockLocation";
// import { TagsInput } from "react-tag-input-component";
// import { supabase } from "../supabase/supabase";

const Userspage = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sexualIdentity, setSexualIdentity] = useState("");
  const [sexualPreference, setSexualPreference] = useState("");
  const [racialPreference, setRarialPreference] = useState("");
  const [meetingInterest, setMeetingInterest] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [images, setImages] = useState([]);
  const [selectImage, setSelectImage] = useState(null);
  const [errors, setErrors] = useState({
    name: "",
    birthDate: "",
    location: "",
    city: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    sexualIdentity: "",
    sexualPreference: "",
    racialPreference: "",
    meetingInterest: "",
    hobbies: "",
  });

  const router = useRouter();
  const registerHandler = () => {
    console.log("State values:", {
      name,
      username,
      email,
      password,
      birthDate,
      location,
      city,
      sexualIdentity,
      sexualPreference,
      racialPreference,
      meetingInterest,
      hobbies,
      images,
    });

    const data = {
      name,
      username,
      email,
      password,
      date_of_birth: birthDate,
      location,
      city,
      sexual_identity: sexualIdentity,
      sexual_preference: sexualPreference,
      recial_preference: racialPreference,
      meeting_interests: meetingInterest,
      hobbies_interests: hobbies,
      profile_image: images,
    };

    console.log("Data to be sent:", data);
    try {
      axios
        .post("api/register", data)
        .then((response) => console.log(response))
        .catch((error) => console.log("register error from FE", error))
        .finally(() => router.push("/login"));
    } catch (error) {
      console.log("register error", error);
    }
  };

  //step 1
  const validateName = () => {
    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "required",
      }));
    } else if (!/^[ก-ฮa-zA-Z]+$/.test(name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must be only letters.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
    }
  };

  const validateBirthDate = () => {
    const currentDate = new Date();
    const inputDate = new Date(birthDate);
    if (!birthDate) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        birthDate: "required",
      }));
    } else if (
      inputDate >= currentDate ||
      currentDate.getFullYear() - inputDate.getFullYear() < 18
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        birthDate:
          "User must be over 18 years old, and birthdays cannot be in the future.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        birthDate: "",
      }));
    }
  };

  const validateLocation = () => {
    if (!location) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        location: "required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, location: "" }));
    }
  };

  const validateCity = () => {
    if (!city) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: "required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, city: "" }));
    }
  };

  const validateUsername = () => {
    if (!username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "required",
      }));
    } else if (!/^[ก-ฮa-zA-Z0-9]{6,}$/.test(username)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username:
          "Username must be letters or numbers, and it must be at least 6 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "",
      }));
    }
  };

  const validateEmail = () => {
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "required",
      }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Format email incorrect",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validatePassword = () => {
    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "required",
      }));
    } else if (password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "required",
      }));
    } else if (confirmPassword !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Confirm password don't match.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setCity("");
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  //step 2
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

  //step 3
  // const clickRemoveImage = (id, images, setImages, setSelectImage) => {
  //   const imageId = id;
  //   const imageDelete = images.filter((value, idx) => {
  //     return idx !== imageId;
  //   });
  //   setImages(imageDelete);
  //   setSelectImage(null);
  // };

  // const handlerImageChange = async (event, setImages) => {
  //   const file = event.target.files[0];
  //   try {
  //     if (file) {
  //       const { data, error } = await supabase.storage
  //         .from("image-users")
  //         .upload(`images/${file.name}`, file);
  //       if (error) {
  //         console.error("Error uploading file to Supabase Storage", error);
  //         return;
  //       }
  //       if (error) {
  //         console.error("Error uploading file to Supabase Storage", error);
  //         return;
  //       }
  //       const imageUrl = data.Key;
  //       setImages((prevImages) => [...prevImages, imageUrl]);
  //     }
  //   } catch (error) {
  //     console.log("Error handling image change", error);
  //   }
  // };

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

    try {
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setImages((prevImages) => [...prevImages, objectUrl]);
      }
    } catch (error) {
      console.log("error handling image change", error);
    }
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

  const [currentStep, setCurrentStep] = useState(1);
  const clickNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const clickBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="bg-main h-screen w-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="w-[100px] h-[100px] rounded-full bg-Beige-100 absolute top-[25%] left-[-1%]"></div>
      <div className="w-[8px] h-[8px] rounded-full bg-Beige-700 absolute top-[44%] left-[7%]"></div>
      {currentStep === 1 && (
        <>
          <div className="flex justify-center">
            <div className="w-[930px] h-[500px] flex flex-col mt-[130px]">
              <div className="flex">
                <div className="flex flex-col w-[453px]">
                  <p className="text-xs text-Beige-700 font-semibold">
                    REGISTER
                  </p>
                  <h2 className="text-4xl font-extrabold text-Purple-500 w-[400px]">
                    Join us and start matching
                  </h2>
                </div>
                <div className="flex items-end">
                  <div className="w-[240px] h-[74px] border border-Purple-500 rounded-xl flex justify-start items-center p-3">
                    <div className="w-[42px] h-[42px] bg-Gray-200 rounded-xl text-Purple-500 font-bold flex justify-center items-center mr-4">
                      1
                    </div>
                    <div className="flex flex-col">
                      <p className="text-Gray-700 text-xs font-medium">
                        Step 1/3
                      </p>
                      <p className="text-Purple-500 font-extrabold">
                        Basic Information
                      </p>
                    </div>
                  </div>
                  <div className="h-[74px] w-[74px] border border-Gray-300 rounded-xl flex justify-center items-center mr-2 ml-2">
                    <div className="bg-Gray-200 text-Gray-600 font-bold w-[42px] h-[42px] rounded-xl flex justify-center items-center">
                      2
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
                  Basic Information
                </h4>
                <form>
                  <div className="flex">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-sm">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                          validateName();
                        }}
                        onBlur={() => {
                          validateName();
                        }}
                      />
                      {errors.name && (
                        <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[52.5%]">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col ml-[15px]">
                      <label htmlFor="birthDate" className="text-sm">
                        Date Of Birth
                      </label>
                      <input
                        type="date"
                        className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 pr-3"
                        value={birthDate}
                        onChange={(e) => {
                          setBirthDate(e.target.value);
                          validateBirthDate();
                        }}
                        onBlur={() => {
                          validateBirthDate();
                        }}
                      />
                      {errors.birthDate && (
                        <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[52.5%]">
                          {errors.birthDate}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex mt-5">
                    <div className="flex flex-col">
                      <label htmlFor="location" className="text-sm">
                        Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm focus:outline-none focus:border-Red-500"
                        value={location}
                        onChange={(e) => {
                          handleLocationChange(e);
                          setLocation(e.target.value);
                          validateLocation();
                        }}
                        onBlur={() => {
                          validateLocation();
                        }}
                      >
                        <option value="" hidden>
                          --Select Location--
                        </option>
                        {LocationData &&
                          LocationData.map((country, country_id) => (
                            <option
                              key={country_id}
                              value={country.country_name}
                            >
                              {country.country_name}
                            </option>
                          ))}
                      </select>
                      {errors.location && (
                        <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[64%]">
                          {errors.location}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col ml-[15px]">
                      <label htmlFor="city" className="text-sm">
                        City
                      </label>
                      <select
                        id="city"
                        name="city"
                        className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                        value={city}
                        onChange={(e) => {
                          handleCityChange(e);
                          setCity(e.target.value);
                          validateCity();
                        }}
                        onBlur={() => {
                          validateCity();
                        }}
                      >
                        <option value="" hidden>
                          --Select City--
                        </option>
                        {location &&
                          LocationData.find(
                            (country) => country.country_name === location
                          )?.states.map((state) => (
                            <option
                              key={state.state_id}
                              value={state.state_name}
                            >
                              {state.state_name}
                            </option>
                          ))}
                      </select>
                      {errors.city && (
                        <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[64%]">
                          {errors.city}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex mt-5">
                    <div className="flex flex-col">
                      <label htmlFor="username" className="text-sm">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="At least 6 charactor"
                        className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          validateUsername();
                        }}
                        onBlur={() => {
                          validateUsername();
                        }}
                      />
                      {errors.username && (
                        <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[75.5%]">
                          {errors.username}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col ml-[15px]">
                      <label htmlFor="email" className="text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@website.com"
                        className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          validateEmail();
                        }}
                        onBlur={() => {
                          validateEmail();
                        }}
                      />
                      {errors.email && (
                        <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[75.5%]">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex mt-5">
                    <div className="flex flex-col">
                      <label htmlFor="password" className="text-sm">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="At least 8 charactor"
                        className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          validatePassword();
                        }}
                        onBlur={() => {
                          validatePassword();
                        }}
                      />
                      {errors.password && (
                        <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[87%]">
                          {errors.password}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col ml-[15px]">
                      <label htmlFor="confirmPassword" className="text-sm">
                        Confirm Password
                      </label>
                      <input
                        type="confirmPassword"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="At least 8 charactor"
                        className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          validateConfirmPassword();
                        }}
                        onBlur={() => {
                          validateConfirmPassword();
                        }}
                      />
                      {errors.confirmPassword && (
                        <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[87%]">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      {currentStep === 2 && (
        <>
          <div className="flex justify-center">
            <div className="w-[930px] h-[500px] flex flex-col mt-[130px]">
              <div className="flex">
                <div className="flex flex-col w-[453px]">
                  <p className="text-xs text-Beige-700 font-semibold">
                    REGISTER
                  </p>
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
                      <p className="text-Gray-700 text-xs font-medium">
                        Step 2/3
                      </p>
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
                        <option value="long-term">
                          Long-term relationship
                        </option>
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
                      {/* <TagsInput
                        value={hobbies}
                        onChange={(tags) => {
                          console.log(tags);
                          setHobbies(tags);
                          validateHobbies(tags);
                        }}
                        onBlur={() => validateHobbies(hobbies)}
                        name="tags"
                      /> */}
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
        </>
      )}
      {currentStep === 3 && (
        <>
          <div className="flex justify-center">
            <div className="w-[930px] h-[500px] flex flex-col mt-[130px]">
              <div className="flex">
                <div className="flex flex-col w-[453px]">
                  <p className="text-xs text-Beige-700 font-semibold">
                    REGISTER
                  </p>
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
                      <p className="text-Gray-700 text-xs font-medium">
                        Step 3/3
                      </p>
                      <p className="text-Purple-500 font-extrabold">
                        Upload Photos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-[3.5rem]">
                <h4 className="text-xl text-Purple-500 font-bold">
                  Profile pictures
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
                        id="upload"
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
        </>
      )}
      <FooterRegister
        onNextStep={clickNextStep}
        onBack={() => clickBack()}
        currentStep={currentStep}
        onSubmit={registerHandler}
      />
    </div>
  );
};

export default Userspage;
