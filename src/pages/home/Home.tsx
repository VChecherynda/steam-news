import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Link to='/dashboard'>Dashboard</Link>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </>
  );
}
