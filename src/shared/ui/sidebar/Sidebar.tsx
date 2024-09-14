import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
    </ul>
  );
};
