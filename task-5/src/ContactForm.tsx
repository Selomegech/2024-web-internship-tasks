import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";

let renderCount = 0;
const styles = {

}
type formValues = {
  exampleFormControlInput1: string;
  exampleFormControlInput2: string;
  exampleFormControlTextarea1: string;
};
const ContactForm = () => {
  const form = useForm<formValues>();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: formValues) => {
    alert("your form was submmited");
  };
  renderCount++;
  return (
    <div style={ {height:'100vh' , display :'flex' ,flexDirection :'column' ,  justifyContent : 'center' , alignItems:'center'}}>
      
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="card text-bg-light mb-3">
        <h4 className="card-header " >Contact Us</h4>
        <div className="mb-3 d-flex flex-column justify-content-start">
          <label className="form-label text-start" >Name:</label>

          <input
            type="text"
            className={errors.exampleFormControlInput1 ? "form-control is-invalid":"form-control "}
            id="exampleFormControlInput1"
            placeholder="Your Name"
            {...register("exampleFormControlInput1", {
              required: { value: true, message: "email required" },
            })}
          />
          {errors.exampleFormControlInput1?.type === "required" && (
            <p role="alert" className="text-danger text-start">First name is required</p>
          )}
        </div>
        <div className="mb-3 d-flex flex-column justify-content-start">
          <label className="form-label text-start">Email address:</label>

          <input
            type="email"
            className={errors.exampleFormControlInput2 ?"form-control is-invalid" :'form-control '}
            id="exampleFormControlInput2"
            placeholder="name@example.com"
            {...register("exampleFormControlInput2", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "invalid email format",
              },
              required: true,
            })}
            aria-invalid={errors.exampleFormControlInput2 ? "true" : "false"}
          />
          {errors.exampleFormControlInput2?.type === "required" && (
            <p role="alert" className="text-danger text-start">Email is required</p>
          )}
          {errors.exampleFormControlInput2?.type === "pattern" && (
            <p role="alert" className="text-danger text-start">invalid email format</p>
          )}
        </div>
        <div className="mb-3 d-flex flex-column justify-content-start">
          <label className="form-label text-start">Messege:</label>
          <textarea
            className={errors.exampleFormControlTextarea1 ? "form-control is-invalid" :"form-control "}
            id="exampleFormControlTextarea1"
            {...register("exampleFormControlTextarea1", { required: true })}
          ></textarea>
          {errors.exampleFormControlTextarea1?.type === "required" && (
            <p role="alert" className="text-danger text-start">Messege is required</p>
          )}
        </div>

        <button className="btn btn-primary me-md-2" type="submit">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ContactForm;
