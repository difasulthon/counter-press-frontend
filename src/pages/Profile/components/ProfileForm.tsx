import React from "react";

import InputWithLabel from "../../../components/InputWithLabel";

const ProfileForm = (): React.ReactElement => {
  return (
    <>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="fullName"
          label="Full Name"
          placeholder="Difa Sulthon"
          disabled
        />
        <InputWithLabel
          name="userName"
          label="User Name"
          placeholder="difasulthon"
          disabled
        />
      </div>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="email"
          type="email"
          label="Email"
          placeholder="difa@email.com"
          disabled
        />
      </div>
      <div className="border border-graySecondary mt-6 mb-6"></div>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="address"
          label="Address"
          placeholder="Soekarno-Hatta road"
          disabled
        />
        <InputWithLabel
          name="city"
          label="City"
          placeholder="Jakarta"
          disabled
        />
      </div>
      <InputWithLabel
        name="phoneNumber"
        label="Phone Number"
        placeholder="081212121212"
        disabled
      />
    </>
  );
};

export default ProfileForm;
