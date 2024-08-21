import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
  const navigate = useNavigate();
  const location = useLocation();

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (userInfo: TUserInfo) => {
    try {
      const toastId = toast.loading("Logging in ...");
      console.log(userInfo);
      const from = location.state?.from?.pathname || "/";
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      console.log("response", res);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(from, { replace: true });
      toast.success("Successfully logged in.", { id: toastId });
    } catch (error) {
      // Handle login error
      console.log('error')
      // console.error("Login failed:", error);
      // toast.error("Login failed.");
    }
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
