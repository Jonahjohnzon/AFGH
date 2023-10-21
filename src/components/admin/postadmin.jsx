import { Formik, Field } from "formik";
import React from "react";
import * as yup from "yup";

const Postadmin = ({ setload }) => {
  const schema = yup.object({
    name: yup.string().required(),
    location: yup.string().required(),
    date: yup.string().required(),
    avatar: yup.string().required(),
    link: yup.string().required(),
  });
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          location: "",
          date: "",
          avatar: "",
          link: "",
        }}
        validationSchema={schema}
        onSubmit={async (a, { resetForm }) => {
          setload(true);
          const data = await fetch("https://afgc.onrender.com/tpost", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": localStorage.getItem("token"),
            },
            body: JSON.stringify(a),
          });
          const info = await data.json();
          resetForm();
          setload(false);
        }}
      >
        {(props) => {
          return (
            <div className=" flex flex-col items-center justify-center ">
              <div className=" text-5xl font-bold mt-28 mb-10">Tournament</div>
              <div className=" flex flex-wrap w-[90%] justify-between">
                <div className=" mb-10">
                  <input
                    type="text"
                    id="title"
                    className="text-black pl-2 font-bold w-96 h-10 rounded-lg"
                    placeholder="Name"
                    value={props.values.name}
                    onChange={props.handleChange("name")}
                  />
                  <div className=" text-white text-sm">
                    {props.touched.name && props.errors.name}
                  </div>
                </div>
                <div className=" mb-10">
                  <input
                    type="text"
                    id="developers"
                    className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                    value={props.values.location}
                    onChange={props.handleChange("location")}
                    placeholder="Location"
                  />
                  <div className=" text-white text-sm">
                    {props.touched.location && props.errors.location}
                  </div>
                </div>
                <div className=" mb-10">
                  <input
                    type="text"
                    id="price"
                    className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                    placeholder="Date"
                    value={props.values.date}
                    onChange={props.handleChange("date")}
                  />
                  <div className=" text-white text-sm">
                    {props.touched.date && props.errors.date}
                  </div>
                </div>
                <div className=" mb-10">
                  <Field
                    as="select"
                    className=" w-96 text-black font-bold h-10 rounded-lg"
                    value={props.values.avatar}
                    onChange={props.handleChange("avatar")}
                  >
                    <option value="/assets/images/team_1.png">
                      Avatar 1
                    </option>
                    <option value="/assets/images/team_2.png">
                      Avatar 2
                    </option>
                    <option value="/assets/images/team_3.png">
                      Avatar 3
                    </option>
                  </Field>
                  <div className=" text-white text-sm">
                    {props.touched.avatar && props.errors.avatar}
                  </div>
                </div>
                <div className=" mb-10">
                  <input
                    type="text"
                    id="price"
                    className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                    placeholder="Link"
                    value={props.values.link}
                    onChange={props.handleChange("link")}
                  />
                  <div className=" text-white text-sm">
                    {props.touched.link && props.errors.link}
                  </div>
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
  );
};

export default Postadmin;
