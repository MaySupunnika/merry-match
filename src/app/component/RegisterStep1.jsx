import React, { useState } from "react";
import LocationData from "../mockLocation";

export default function RegisterStep1() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    birthDate: "",
    location: "",
    city: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
            <div className="w-[240px] h-[74px] border border-Purple-500 rounded-xl flex justify-start items-center p-3">
              <div className="w-[42px] h-[42px] bg-Gray-200 rounded-xl text-Purple-500 font-bold flex justify-center items-center mr-4">
                1
              </div>
              <div className="flex flex-col">
                <p className="text-Gray-700 text-xs font-medium">Step 1/3</p>
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
                <label htmlFor="name" className="text-sm">
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
                      <option key={country_id} value={country.country_name}>
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
                      <option key={state.state_id} value={state.state_name}>
                        {state.state_name}
                      </option>
                    ))}
                  {errors.city && (
                    <p className="text-Red-500 text-xs mt-2 ml-2 absolute top-[64%]">
                      {errors.city}
                    </p>
                  )}
                </select>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Username
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                <label htmlFor="name" className="text-sm">
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                <label htmlFor="name" className="text-sm">
                  Password
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                <label htmlFor="name" className="text-sm">
                  Confirm Password
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
  );
}
