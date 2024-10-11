import React from "react";
import { Form } from "react-router-dom";

import PageTitle from "../../components/PageTitle";

import ProfileForm from "./components/ProfileForm";

const Profile = (): React.ReactElement => {
  return (
    <div className="pl-20 pr-20 pb-10">
      <PageTitle text="Profile" />
      <div className="flex flex-row justify-between mt-6">
        <Form action="/profile" method="post">
          <ProfileForm />
        </Form>
        <img
          src="https://img.allfootballapp.com/www/M00/4C/1C/720x-/-/-/CgAGVmXDhHWAOnaHAAF2fWnaZfQ408.jpg.webp"
          alt="ortuseight"
          className="h-1/3 w-1/3"
        />
      </div>
    </div>
  );
};

export default Profile;
