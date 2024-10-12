import React, { useEffect } from "react";
import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";
import { toast } from "react-toastify";
import { ValidationError } from "yup";

import PageTitle from "../../components/PageTitle";
import signInSchema from "../../schemas/SignIn.schema";
import { signIn } from "../../services/Auth.services";

import SignInForm from "./components/SignInForm";
import { signInImage } from "./SignIn.config";
import { getSignInFormValues } from "./SignIn.handler";

export const signInAction = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const formValues = getSignInFormValues(formData);

    await signInSchema.validate(formValues);

    await signIn(formValues);

    toast("Sign In successfully", { type: "success" });

    return redirect("/profile");
  } catch (e) {
    if (e instanceof ValidationError) {
      return { error: e.message };
    }

    return { error: e };
  }
};

const SignIn = (): React.ReactElement => {
  const actionData = useActionData() as { error: string };

  useEffect(() => {
    document.title = "Sign In";
    if (actionData && actionData.error) {
      toast(actionData.error, { type: "error" });
    }
  }, [actionData]);

  return (
    <div className="pl-20 pr-20 pb-10">
      <PageTitle text="Sign In" />
      <div className="flex flex-row justify-between mt-6">
        <Form action="/sign-in" method="post">
          <SignInForm />
        </Form>
        <img src={signInImage} alt="ortuseight" className="h-1/3 w-1/3" />
      </div>
    </div>
  );
};

export default SignIn;
