import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().required().max(30).min(5).email(),
    password: yup.string().required().max(20).min(4),
  });
  return (
    <div className=" w-full h-[100vh] bg-dark flex justify-center items-center">
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={async (a, { resetForm }) => {
            const data = await fetch("https://afgc.onrender.com/loginad", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(a),
            });
            resetForm();
            const datainfo = await data.json();
            try {
              if (datainfo?.auth) {
                localStorage.setItem("token", datainfo.token);
                navigate("/adminuser");
              } else {
                alert(datainfo.result);
              }
            } catch (e) {
              console.log(e);
            }
          }}
        >
          {(props) => {
            return (
              <div className=" flex flex-col items-center">
                <div className="mb-10">
                  <input
                    type="email"
                    className=" w-96 h-10 rounded-lg pl-2 font-bold"
                    placeholder="Email"
                    value={props.values.email}
                    onChange={props.handleChange("email")}
                  />
                  <div className=" text-white text-sm">
                    {props.touched.email && props.errors.email}
                  </div>
                </div>
                <div className="mb-10">
                  <input
                    type="password"
                    className=" w-96 h-10 rounded-lg pl-2 font-bold"
                    placeholder="Password"
                    value={props.values.password}
                    onChange={props.handleChange("password")}
                  />
                  <div className=" text-white text-sm">
                    {props.touched.password && props.errors.password}
                  </div>
                </div>
                <input
                  type="submit"
                  value="Send"
                  className=" text-black font-bold bg-green px-9 py-3 rounded-lg cursor-pointer hover:bg-dark hover:text-green"
                  onClick={props.handleSubmit}
                />
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
