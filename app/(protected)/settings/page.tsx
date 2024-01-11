"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingPage = () => {
  const user = useCurrentUser();

  const onclick = () => {
    logout();
  };

  return (
    <div>
      {JSON.stringify(user)}

      <button onClick={onclick} type="submit">
        SignOut
      </button>
    </div>
  );
};

export default SettingPage;
