import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { AnimatePresence } from "framer-motion";
import Loading from "../../loading/loading";
import * as yup from "yup";
import Postadmin from "./postadmin";

const Admin = () => {
  const [load, setload] = useState(false);
  const [checks, setChecks] = useState(0);

  const Schema = yup.object({
    title: yup.string().min(2).max(20).required().label("Title"),
    developers: yup.string().min(2).max(15).required().label("Developers"),
    price: yup.number().min(0).max(50000).required().label("Price"),
    images: yup.string().min(2).max(1000).required().label("Images"),
    avatar: yup.string().min(2).max(100).required().label("Avatar"),
    country: yup.string().min(2).max(30).required().label("Nigeria"),
    rate: yup.number().min(0).max(100).required().label("Rate"),
    sale: yup.number().min(0).max(1).required().label("Sale"),
    art: yup.string().min(2).max(1000).required().label("Art"),
    category: yup.string().min(2).max(12).required().label("Category"),
    link: yup.string().min(10).max(1000).required().label("Link"),
    comment: yup.string().min(10).max(500).required().label("Comment"),
    action: yup.boolean(),
    adventure: yup.boolean(),
    rpg: yup.boolean(),
    arcade: yup.boolean(),
    puzzle: yup.boolean(),
    storyline: yup.boolean(),
  });
  const Lists = {
    title: "",
    developers: "",
    price: "",
    images: "",
    avatar: "",
    country: "",
    comment: "",
    rate: "",
    art: "",
    category: "",
    link: "",
    sale: "",
    cate: {
      action: false,
      adventure: false,
      rpg: false,
      arcade: false,
      puzzle: false,
      storyline: false,
    },
  };
  return (
    <div className=" bg-dark w-full h-[100%] flex flex-col items-center justify-center text-white font-barlow py-20">
      <AnimatePresence>{load && <Loading />}</AnimatePresence>
      <div className=" w-[90%] mt-20 flex flex-col items-center">
        <div className=" text-8xl font-bold mb-20">ADMIN</div>
        <Formik
          initialValues={Lists}
          validationSchema={Schema}
          onSubmit={async (v, { resetForm }) => {
            if (checks < 3 && checks > 4) {
              return;
            }
            setload(true);
            const data = await fetch("https://afgc.onrender.com/post", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token"),
              },
              body: JSON.stringify(v),
            });
            const info = await data.json();
            setload(false);
            resetForm();
          }}
        >
          {(props) => {
            return (
              <div className=" flex flex-col items-center w-full">
                <div className=" w-full flex flex-col items-center">
                  <div className=" w-full flex flex-wrap justify-between items-center mb-10">
                    <div className=" mb-5">
                      <input
                        type="text"
                        id="title"
                        className="text-black pl-2 font-bold w-96 h-10 rounded-lg"
                        placeholder="Title"
                        value={props.values.title}
                        onChange={props.handleChange("title")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.title && props.errors.title}
                      </div>
                    </div>
                    <div className=" mb-5">
                      <input
                        type="text"
                        id="developers"
                        className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                        value={props.values.cate.developers}
                        onChange={props.handleChange("developers")}
                        placeholder="Developers"
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.developers && props.errors.developers}
                      </div>
                    </div>
                    <div className=" mb-5">
                      <input
                        type="number"
                        id="price"
                        className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                        placeholder="Price"
                        value={props.values.cate.price}
                        onChange={props.handleChange("price")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.price && props.errors.price}
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-wrap flex justify-between items-center mb-10">
                    <div className=" mb-5">
                      <input
                        type="text"
                        id="images"
                        className="text-black pl-2 font-bold w-96 h-10 rounded-lg"
                        placeholder="Images"
                        value={props.values.images}
                        onChange={props.handleChange("images")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.images && props.errors.images}
                      </div>
                    </div>
                    <div className=" mb-5 w-96 h-ful text-black font-bold">
                      <Field
                        as="select"
                        className=" w-full h-10 rounded-lg"
                        value={props.values.avatar}
                        onChange={props.handleChange("avatar")}
                      >
                        <option value="/assets/_avatar.png">Avatar</option>
                      </Field>
                      <div className=" text-red-500 text-sm">
                        {props.touched.avatar && props.errors.avatar}
                      </div>
                    </div>
                    <div className=" mb-5">
                      <input
                        type="text"
                        id="country"
                        className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                        placeholder="Country"
                        value={props.values.country}
                        onChange={props.handleChange("country")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.country && props.errors.country}
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-wrap flex justify-between items-center mb-10">
                    <div className=" mb-5">
                      <input
                        type="number"
                        id="rate"
                        className="text-black pl-2 font-bold w-96 h-10 rounded-lg"
                        placeholder="Rate"
                        value={props.values.rate}
                        onChange={props.handleChange("rate")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.rate && props.errors.rate}
                      </div>
                    </div>
                    <div className=" mb-5">
                      <input
                        type="text"
                        id="art"
                        className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                        placeholder="Art"
                        value={props.values.art}
                        onChange={props.handleChange("art")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.art && props.errors.art}
                      </div>
                    </div>
                    <div className=" mb-5 font-bold text-black w-96">
                      <Field
                        as="select"
                        className=" w-full h-10 rounded-lg"
                        value={props.values.category}
                        onChange={props.handleChange("category")}
                      >
                        <option value="Adventure">Adventure</option>
                        <option value="Racing">Racing</option>
                        <option value="Action">Action</option>
                        <option value="Cards">Cards</option>
                        <option value="Educational">Educational</option>
                        <option value="Puzzle">Puzzle</option>
                      </Field>
                      <div className=" text-red-500 text-sm">
                        {props.touched.category && props.errors.category}
                      </div>
                    </div>
                  </div>
                  <div className=" mb-20 flex flex-wrap justify-between w-full">
                    <div>
                      <input
                        type="text"
                        id="link"
                        className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                        placeholder="Link"
                        value={props.values.link}
                        onChange={props.handleChange("link")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.link && props.errors.link}
                      </div>
                    </div>
                    <div className=" mb-20">
                      <input
                        type="number"
                        id="sale"
                        className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                        placeholder="Sale"
                        value={props.values.sale}
                        onChange={props.handleChange("sale")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.sale && props.errors.sale}
                      </div>
                    </div>
                  </div>

                  <div className=" w-full flex flex-col items-center justify-center mb-10">
                    <textarea
                      className=" text-black font-bold placeholder:text-black p-2 lg:w-[40%] h-40 rounded-lg"
                      placeholder=" Comment"
                      value={props.values.comment}
                      onChange={props.handleChange("comment")}
                    />
                    <div className=" text-red-500 text-sm">
                      {props.touched.comment && props.errors.comment}
                    </div>
                  </div>
                  <div className=" flex flex-wrap justify-between w-[80%] mb-10 font-bold">
                    <div className=" mb-3">
                      <label htmlFor="action" className=" mr-2">
                        ACTION
                      </label>
                      <input
                        type="checkbox"
                        id="action"
                        className=" scale-150"
                        value={props.values.cate.action}
                        onChange={props.handleChange("cate.action")}
                        onClick={(e) => {
                          if (e.target.checked) {
                            setChecks((p) => p + 1);
                          } else {
                            setChecks((p) => p - 1);
                          }
                        }}
                      />
                    </div>
                    <div className=" mb-3">
                      <label htmlFor="adventure" className=" mr-2">
                        Adventure
                      </label>
                      <input
                        type="checkbox"
                        id="adventure"
                        className=" scale-150"
                        value={props.values.cate.adventure}
                        onChange={props.handleChange("cate.adventure")}
                        onClick={(e) => {
                          if (e.target.checked) {
                            setChecks((p) => p + 1);
                          } else {
                            setChecks((p) => p - 1);
                          }
                        }}
                      />
                    </div>
                    <div className=" mb-3">
                      <label htmlFor="rpg" className=" mr-2">
                        Rpg
                      </label>
                      <input
                        type="checkbox"
                        id="rpg"
                        className=" scale-150"
                        value={props.values.cate.rpg}
                        onChange={props.handleChange("cate.rpg")}
                        onClick={(e) => {
                          if (e.target.checked) {
                            setChecks((p) => p + 1);
                          } else {
                            setChecks((p) => p - 1);
                          }
                        }}
                      />
                    </div>
                    <div className=" mb-3">
                      <label htmlFor="arcade" className=" mr-2">
                        Arcade
                      </label>
                      <input
                        type="checkbox"
                        id="arcade"
                        className=" scale-150"
                        value={props.values.cate.arcade}
                        onChange={props.handleChange("cate.arcade")}
                        onClick={(e) => {
                          if (e.target.checked) {
                            setChecks((p) => p + 1);
                          } else {
                            setChecks((p) => p - 1);
                          }
                        }}
                      />
                    </div>
                    <div className=" mb-3">
                      <label htmlFor="puzzle" className=" mr-2">
                        Puzzle
                      </label>
                      <input
                        type="checkbox"
                        id="puzzle"
                        className=" scale-150"
                        value={props.values.cate.puzzle}
                        onChange={props.handleChange("cate.puzzle")}
                        onClick={(e) => {
                          if (e.target.checked) {
                            setChecks((p) => p + 1);
                          } else {
                            setChecks((p) => p - 1);
                          }
                        }}
                      />
                    </div>
                    <div className=" mb-3">
                      <label htmlFor="storyline" className=" mr-2">
                        Storyline
                      </label>
                      <input
                        type="checkbox"
                        id="storyline"
                        className=" scale-150"
                        value={props.values.cate.storyline}
                        onChange={props.handleChange("cate.storyline")}
                        onClick={(e) => {
                          if (e.target.checked) {
                            setChecks((p) => p + 1);
                          } else {
                            setChecks((p) => p - 1);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Send"
                    className=" text-black font-bold bg-green px-9 py-3 rounded-lg cursor-pointer hover:bg-dark hover:text-green"
                    onClick={props.handleSubmit}
                  />
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
      <div>
        <Formik
          initialValues={{ image: "" }}
          validationSchema={yup.object({
            image: yup.string().required().label("Image"),
          })}
          onSubmit={async (a, { resetForm }) => {
            setload(true);
            const data = await fetch("https://afgc.onrender.com/image", {
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
          {(prop) => {
            return (
              <div className=" flex flex-col items-center">
                <div className=" font-bold mb-6 mt-20 text-5xl">PICTURE</div>
                <div className=" mb-5">
                  <input
                    type="text"
                    id="developers"
                    className="text-black pl-2 font-bold  w-96 h-10 rounded-lg"
                    value={prop.values.image}
                    onChange={prop.handleChange("image")}
                    placeholder="Picture"
                  />
                  <div className=" text-red-500 text-sm">
                    {prop.touched.image && prop.errors.image}
                  </div>
                </div>
                <input
                  type="submit"
                  value="Send"
                  className=" text-black font-bold bg-green px-9 py-3 rounded-lg cursor-pointer hover:bg-dark hover:text-green"
                  onClick={prop.handleSubmit}
                />
              </div>
            );
          }}
        </Formik>
      </div>
      <div>
        <Postadmin setload={setload} />
      </div>
    </div>
  );
};

export default Admin;
