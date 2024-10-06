import React from "react";

import InputWithLabel from "../../../components/InputWithLabel";
import Button from "../../../components/Button";

const SignInForm = (): React.ReactElement => {
  return (
    <>
      <div className="flex flex-row gap-7 mb-4">
        <InputWithLabel
          name="userName"
          label="User Name"
          placeholder="difasulthon"
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
      <div className="mt-10">
        <Button text="Sign In" type="submit" fullWidth />
      </div>
    </>
  );
};

export default SignInForm;
