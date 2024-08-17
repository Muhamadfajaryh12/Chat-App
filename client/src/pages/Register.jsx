import React from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useForm } from "react-hook-form";
import AuthAPI from "../api/Auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await AuthAPI.register({
        username: data.username,
        password: data.password,
      });

      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2">
          <Input
            type={"text"}
            placeholder={"Masukkan Username"}
            name={"username"}
            required={true}
            register={register}
            error={errors.username}
          />
        </div>
        <div className="mt-2">
          <Input
            type={"password"}
            placeholder={"Masukkan Password"}
            name={"password"}
            required={true}
            register={register}
            error={errors.password}
          />
        </div>
        <Button title={"Sign In"} type={"submit"} />
      </form>
    </div>
  );
};

export default Register;
