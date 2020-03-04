import * as Yup from "yup";

export const ProfileSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "username is Too Short!")
    .max(50, "username is Too Long!")
    .required("username is Required"),
  first_name: Yup.string()
    .min(2, "firstname is Too Short!")
    .max(30, "firstname is Too Long!")
    .required("firstname is Required"),
  last_name: Yup.string()
    .min(2, "lastname is Too Short!")
    .max(30, "lastname is Too Long!")
    .required("lastname is Required"),
  phone: Yup.number("Phone number is use only number")
    .min(9, "Phone number must be 10 characters!")
    .required("Phone number is Required"),
  address: Yup.string()
    .min(5, "address is Too Short!")
    .max(50, "address is Too Long!")
    .required("address is Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required")
});
