import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import PageTitle from "../../components/PageTitle";
import { cookie } from "../../configuration/Cookies";
import { getProfile } from "../../services/Profile.services";
import type { Profile } from "../../types/Profile.type";

import ProfileForm from "./components/ProfileForm";

export const profileLoader = async (): Promise<{ profile: Profile | null }> => {
  try {
    document.title = "Profile";
    const token: string = cookie.get("token");
    const data = await getProfile(token);

    return {
      profile: data.data,
    };
  } catch {
    return { profile: null };
  }
};

export const profileAction = async () => {
  try {
    cookie.set("token", "");

    toast("Successfully Log Out", { type: "success" });

    return redirect("/sign-in");
  } catch {
    toast("Log Out failed", { type: "error" });
  }
};

const Profile = (): React.ReactElement => {
  const { profile } = useLoaderData() as { profile: Profile };

  return (
    <div className="pl-20 pr-20 pb-10">
      <PageTitle text="Profile" />
      <div className="flex flex-row justify-between mt-6">
        <Form action="/profile" method="post">
          <ProfileForm profile={profile} />
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
