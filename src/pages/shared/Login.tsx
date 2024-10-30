import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import NexusForm from "../../components/form/NexusForm";
import CustomInput from "../../components/form/NexusInput";

type TUserInfo = {
  id: string;
  password: string;
};

const Login = () => {
  const defaultValues: TUserInfo = {
    id: "A-0001",
    password: "admin123",
  };
  const navigate = useNavigate();
  const location = useLocation();

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (userInfo: FieldValues) => {
    console.log(userInfo);
    try {
      const toastId = toast.loading("Logging in ...");
      const from = location.state?.from?.pathname || "/";
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      console.log("response", res);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(from, { replace: true });
      toast.success("Successfully logged in.", { id: toastId });
    } catch (error) {
      //Handle login error
      console.error("Login failed:", error);
      toast.error(error?.message);
    }
  };
  return (
    <NexusForm onSubmit={onSubmit} defaultValues={defaultValues}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomInput name="id" type="text" placeholder="User ID" />
        <CustomInput name="password" type="text" placeholder="Password" />

        <Button htmlType="submit">SUBMIT</Button>
      </div>
    </NexusForm>
  );
};

export default Login;
