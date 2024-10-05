import React from "react";

import InputWithLabel from "../../../components/InputWithLabel";
import Button from "../../../components/Button";

const SignUpForm = (): React.ReactElement => {
  return (
    <>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="fullName"
          label="Full Name"
          placeholder="Difa Sulthon"
          required
        />
        <InputWithLabel
          name="userName"
          label="User Name"
          placeholder="difasulthon"
          required
        />
      </div>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="email"
          type="email"
          label="Email"
          placeholder="difa@email.com"
          required
        />
        <InputWithLabel
          name="password"
          type="password"
          label="Password"
          placeholder="*****"
          required
        />
      </div>
      <div className="border border-graySecondary mt-6 mb-6"></div>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="address"
          label="Address"
          placeholder="Soekarno-Hatta road"
          required
        />
        <InputWithLabel
          name="city"
          label="City"
          placeholder="Jakarta"
          required
        />
      </div>
      <InputWithLabel
        name="phoneNumber"
        label="Phone Number"
        placeholder="081212121212"
        required
      />
      <div className="mt-10">
        <Button text="Sign Up" type="submit" fullWidth />
      </div>
    </>
  );
};

export default SignUpForm;
