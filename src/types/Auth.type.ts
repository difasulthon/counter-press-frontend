export type SignUpForm = {
  fullName: FormDataEntryValue | null;
  userName: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  address: FormDataEntryValue | null;
  city: FormDataEntryValue | null;
  phoneNumber: FormDataEntryValue | null;
};

export type SignInForm = {
  userName: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};
