import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "./SignIn.api";
import { addUser } from "../../entities/models/user";
import { useDispatch } from "react-redux";
import { Layout, Header } from "../../shared/ui";
import { Alert, Input, Button } from "@material-tailwind/react";

export function SignIn() {
  const [trigger] = useLazyQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "john@test.com",
    password: "123456",
  });

  const onSignInHandler = async () => {
    const { data, isError } = await trigger({
      email: state.email,
      password: state.password,
    });

    if (data && data.email) {
      dispatch(addUser(data));
      navigate("/dashboard");
    }

    if (isError) {
      setError("Smth going wrong");
    }
  };

  const onSignUpHandler = async () => {
    navigate("/sign-up");
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
          <Button onClick={onSignInHandler}>Sing In</Button>

          <Button variant='outlined' onClick={onSignUpHandler}>
            Sing Up
          </Button>
        </div>
      </div>
    </Layout>
  );
}
