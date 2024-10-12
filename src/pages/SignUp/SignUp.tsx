import React, { useEffect } from "react";
import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";
import { ValidationError } from "yup";
import { toast } from "react-toastify";

import PageTitle from "../../components/PageTitle";
import signUpSchema from "../../schemas/SignUp.schema";
import { signUp } from "../../services/Auth.services";

import SignUpForm from "./components/SignUpForm";
import { getSignUpFormValues } from "./SignUp.handler";
import { signUpImage } from "./SignUp.config";

export const signUpAction = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const formValues = getSignUpFormValues(formData);

    await signUpSchema.validate(formValues);

    await signUp(formValues);

    toast("Sign Up successfully", { type: "success" });

    return redirect("/sign-in");
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
    document.title = "Sign Up";
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
        <img src={signUpImage} alt="ortuseight" className="h-1/3 w-1/3" />
      </div>
    </div>
  );
};

export default SignUp;
