import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "./SignIn.api";
import { addUser } from "./SignIn.slice";
import { useDispatch } from "react-redux";
import { Layout, Header } from "../../shared/ui";
import { Input, Button } from "@material-tailwind/react";

export function SignIn() {
  const [trigger] = useLazyQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "john@test.com",
    password: "123456",
  });

  const onSubmitHandler = async () => {
    const result = await trigger({
      email: state.email,
      password: state.password,
    }).unwrap();

    if (result && result.name) {
      dispatch(addUser(result));
      navigate("/");
    }
  };

  return (
    <Layout header={<Header />}>
      <div className='flex flex-col items-center justify-center'>
        <form className='w-1/4 flex flex-col items-end gap-6 mb-6'>
          <Input
            label='Email'
            name='email'
            value={state.email}
            placeholder='Enter email'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = e.target;

              setState((prev) => ({
                ...prev,
                email: value as string,
              }));
            }}
          />
          <Input
            label='Password'
            name='password'
            value={state.password}
            placeholder='Enter password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = e.target;

              setState((prev) => ({
                ...prev,
                email: value as string,
              }));
            }}
          />
        </form>
        <div className='w-1/4'>
          <Button placeholder='Sign In' onClick={onSubmitHandler}>
            Sing In
          </Button>
        </div>
      </div>
    </Layout>
  );
}
