import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "./SignIn.api";
import { addUser } from "./SignIn.slice";
import { useDispatch } from "react-redux";

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
    <>
      <form>
        <label htmlFor='email'>
          Email
          <input
            name='email'
            type='text'
            value={state.email}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            name='password'
            type='text'
            value={state.password}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
        </label>
      </form>
      <button onClick={onSubmitHandler}>Sing In</button>
    </>
  );
}
