import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // React Query
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://doctors-portals-by-rasel.herokuapp.com/services").then(
      (res) => res.json()
    )
  );

  //Imgbb's API
  const imageStorageKey = "a0db073f3ff58ba08bb4b1b3737e1555";

  /**
   *  Three ways to store images
   * 1. Third party storage // Free open public storage is ok for Practice project
   * 2. Your own storage in your own server (file system)
   * 3. Database: Mongodb
   * YUP: to validate file: Search: Yup file validation for react hook form
   */

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };

          // send to your database
          fetch("https://doctors-portals-by-rasel.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add the doctor");
              }
            });
        }
      });
  };

  // Loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-2xl">Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full max-w-xs input input-bordered"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="text-red-500 label-text-alt">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full max-w-xs input input-bordered"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="text-red-500 label-text-alt">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500 label-text-alt">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="w-full max-w-xs select input-bordered"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="w-full max-w-xs input input-bordered"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="text-red-500 label-text-alt">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="w-full max-w-xs text-white btn"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
