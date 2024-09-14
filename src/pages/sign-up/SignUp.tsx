import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "./SignUp.api";
import { addUser } from "../../entities/models/user";
import { useDispatch } from "react-redux";
import { Layout, Header } from "../../shared/ui";
import { Alert, Input, Button } from "@material-tailwind/react";

export function SignUp() {
  const [userPost, result] = useMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "vadym@gmail.com",
    password: "12345",
  });

  const onSignUpHandler = async () => {
    const response = await userPost({
      email: state.email,
      password: state.password,
    });

    const { data } = response;
    const { isError } = result;

    if (data && data.email) {
      dispatch(addUser(data));
      navigate("/dashboard");
    }

    if (isError) {
      setError("Smth went wrong");
    }
  };

  return (
    <Layout header={<Header />}>
      <div className='flex flex-col items-center justify-center'>
        <form className='flex flex-col items-end gap-6 mb-6'>
          {error ? <Alert color='red'>{error}</Alert> : null}

          <Input
            label='Email'
            name='email'
            value={state.email}
            placeholder='Enter email'
            error={Boolean(error)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = e.target;

              setState((prev) => ({
                ...prev,
                email: value as string,
              }));

              setError("");
            }}
          />
          <Input
            label='Password'
            name='password'
            value={state.password}
            placeholder='Enter password'
            error={Boolean(error)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = e.target;

              setState((prev) => ({
                ...prev,
                password: value as string,
              }));

              setError("");
            }}
          />
        </form>

        <div className='flex min-w-[200px] justify-between'>
          <Button onClick={onSignUpHandler}>Sing Up</Button>
        </div>
      </div>
    </Layout>
  );
}
