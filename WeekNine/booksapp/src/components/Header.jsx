import { useContext } from "react";
import { UserContext } from "../components/context/UserContext";
function Header() {
  const { user, logout } = useContext(UserContext);
  return (
    <header className="d-flex flex-row justify-content-between align-items-center">
      <h2 className="text-start my-3 mx-3"> Create a Book</h2>
      <p>
        Hello {user?.name?.first}!!! Your Email is : {user?.email}
      </p>
      <button type="button" class="btn btn-link" onClick={logout}>
        Logout
      </button>
    </header>
  );
}

export default Header;
