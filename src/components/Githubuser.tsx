import React from "react";
import { AccountType } from "../utils/Accountsearch";
import { FaExternalLinkAlt } from "react-icons/fa";
interface Props {
  key: number;
  account: AccountType;
}

const Githubuser: React.FC<Props> = (account) => {
  const handleClick = () => {
    window.open(account?.account.html_url, "_blank");
  };

  return (
    <div onClick={handleClick} className="githubaccount">
      <img className="profile-img" src={account?.account.avatar_url} alt="github account icons" />
      <p>{account?.account.login}</p>
      <p><FaExternalLinkAlt/></p>
    </div>
  );
};

export default Githubuser;
