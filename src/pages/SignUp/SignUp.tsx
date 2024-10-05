import React, { useEffect } from "react";
import { ActionFunctionArgs, Form, useActionData } from "react-router-dom";
import { ValidationError } from "yup";
import { toast } from "react-toastify";

import PageTitle from "../../components/PageTitle";
import signUpSchema from "../../schemas/SignUp.schema";

import SignUpForm from "./components/SignUpForm";

export const signUpAction = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();

    const formValues = {
      fullName: formData.get("fullName"),
      userName: formData.get("userName"),
      email: formData.get("email"),
      password: formData.get("password"),
      address: formData.get("address"),
      city: formData.get("city"),
      phoneNumber: formData.get("phoneNumber"),
    };

    await signUpSchema.validate(formValues);

    toast("Sign Up successfully", { type: "success" });

    return null;
    // return redirect("/login");
  } catch (e) {
    if (e instanceof ValidationError) {
      return { error: e.message };
    }

    return { error: e };
  }
};

const SignUp = (): React.ReactElement => {
  const actionData = useActionData() as { error: string };

  useEffect(() => {
    if (actionData && actionData.error) {
      toast(actionData.error, { type: "error" });
    }
  }, [actionData]);

  return (
    <div className="pl-20 pr-20 pb-10">
      <PageTitle text="Sign Up" />
      <div className="flex flex-row justify-between mt-6">
        <Form action="/sign-up" method="post">
          <SignUpForm />
        </Form>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdO2zWFboubWHsrH0y18GvLMwcSNgvEZSZSz43uzm2VeISQCCjwHXCKqgqOGw6CtaeXGr3t2LvVOrz7ivNyrDovXHdhzttgMFdUrWcigkh1AMb69OXcq5yq0rnbV78wqSRkumpJi0tVbsW0VIwUEe7IjqflWBLE1qfXSuglIGhSpnp5Ge2X1P2FBAShtyz/s1600/new-kylian-mbappe-switches-to-next-gen-nike-mercurial-superfly-10-for-euro-2024-knockout-stage%20%20%288%29.jpg"
          alt="ortuseight"
          className="h-1/3 w-1/3"
        />
      </div>
    </div>
  );
};

export default SignUp;
