import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";

type TUserInfo = {
  id: string;
  password: string;
};

const Login = () => {
  const { handleSubmit, register } = useForm<TUserInfo>({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });
  const [login, { data, isLoading, isError }] = useLoginMutation();
  console.log("login data", data);
  console.log("login isLoading", isLoading);
  console.log("login isError", isError);
  const onSubmit = (userInfo: TUserInfo) => {
    console.log(userInfo);
    login(userInfo);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "5px" }}>Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          {...register("id")}
          style={{ width: "50%", height: "30px", padding: "10px" }}
          placeholder="USER ID"
        ></input>
        <input
          {...register("password")}
          type="password"
          style={{ width: "50%", height: "30px", padding: "10px" }}
          placeholder="PASSWORD"
        ></input>
        <Button htmlType="submit">SUBMIT</Button>
      </form>
    </div>
  );
};

export default Login;
