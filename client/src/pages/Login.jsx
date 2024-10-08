import React from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const auth = useAuth();
  const onSubmit = async (data) => {
    auth.loginAction({
      username: data.username,
      password: data.password,
    });
  };
  console.log(auth);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
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
        <Link to={"/register"} className="text-blue-800 text-sm text-center">
          Belum punya akun?
        </Link>
      </div>
    </div>
  );
};

export default Login;
