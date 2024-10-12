import React from "react";

import InputWithLabel from "../../../components/InputWithLabel";
import Button from "../../../components/Button";
import type { Profile } from "../../../types/Profile.type";

type Props = {
  profile: Profile;
};

const ProfileForm = (props: Props): React.ReactElement => {
  const { profile } = props;

  return (
    <>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="fullName"
          label="Full Name"
          placeholder=""
          disabled
          value={profile.fullName}
        />
        <InputWithLabel
          name="userName"
          label="User Name"
          placeholder=""
          disabled
          value={profile.userName}
        />
      </div>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="email"
          type="email"
          label="Email"
          placeholder=""
          disabled
          value={profile.email}
        />
      </div>
      <div className="border border-graySecondary mt-6 mb-6"></div>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="address"
          label="Address"
          placeholder=""
          disabled
          value={profile.address}
        />
        <InputWithLabel
          name="city"
          label="City"
          placeholder=""
          disabled
          value={profile.city}
        />
      </div>
      <InputWithLabel
        name="phoneNumber"
        label="Phone Number"
        placeholder=""
        disabled
        value={profile.phoneNumber}
      />
      <div className="mt-10">
        <Button text="Log Out" type="submit" fullWidth color="bg-redPrimary" />
      </div>
    </>
  );
};

export default ProfileForm;
