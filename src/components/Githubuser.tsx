import React from "react";
import { AccountType } from "../utils/Accountsearch";
import externallink_IMG from '../Images/icons8-external-link-50.png'
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
      <img className="link-img" src={externallink_IMG} alt="" />
    </div>
  );
};

export default Githubuser;
