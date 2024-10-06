import React, { useEffect } from "react";
import { ActionFunctionArgs, Form, useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import { ValidationError } from "yup";

import PageTitle from "../../components/PageTitle";
import signInSchema from "../../schemas/SignIn.schema";
import SignInForm from "./components/SignInForm";

export const signInAction = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();

    const formValues = {
      userName: formData.get("userName"),
      password: formData.get("password"),
    };

    await signInSchema.validate(formValues);

    toast("Sign In successfully", { type: "success" });

    return null;
    // return redirect("/login");
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
        <img
          src="https://making-pictures.com/wp-content/uploads/2021/10/Elliott_Wilcox_Adidas_Speedflow_0001-1.jpg"
          alt="ortuseight"
          className="h-1/3 w-1/3"
        />
      </div>
    </div>
  );
};

export default SignIn;
