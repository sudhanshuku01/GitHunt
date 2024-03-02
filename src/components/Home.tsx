import { useState } from "react";
import Layout from "../layout/Layout";
import search_ICON from "../Images/search.png";
import location_ICON from "../Images/location.png";
import username_ICON from "../Images/username.png";
import email_ICON from "../Images/email.png";
import fullname_ICON from "../Images/fullname.png";

import { searchAccounts, AccountType } from "../utils/Accountsearch";
import Githubuser from "./Githubuser";
import { useMyContext } from "../context/LoaderContext";

interface filterIconInterface {
  name: string;
  Image: string;
}

const FilterIcon: filterIconInterface[] = [
  {
    name: "Location",
    Image: location_ICON,
  },
  {
    name: "Username",
    Image: username_ICON,
  },
  {
    name: "Fullname",
    Image: fullname_ICON,
  },
  {
    name: "Email",
    Image: email_ICON,
  },
];

const Home = () => {
  const [inputtext, setinputtext] = useState("");
  const [filtername, setfiltername] = useState("Location");
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const { toggleLoadingMode } = useMyContext();
  const fetchAccounts = async () => {
    try {
      toggleLoadingMode();
      const DATA = await searchAccounts(inputtext, filtername);
      setAccounts(DATA);
    } catch (error) {
      console.error(error);
    } finally {
      toggleLoadingMode();
    }
  };

  const handleFilterIcon = (name: string) => {
    const desiredImage = FilterIcon.find((icon) => icon.name === name)?.Image;
    return desiredImage;
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetchAccounts();
    }
  };
  return (
    <Layout
      title="GitHunt - Explore GitHub Profiles Based On Location, Username, Fullname and Email"
      description="Explore GitHub profiles, projects, and repositories with GitHunt. Find developers, learn, and innovate in the open-source community."
      keywords="GitHub, developer profiles, projects, repositories, open-source, GitHunt"
      author="Sudhanshu Kumar"
    >
      <div className="home">
        <div className="home-title">
          <h1>
            THE EASE AND SPEED OF <br /> FINDING THE GIHUB ACCONTS IS IN YOUR
            HANDS
          </h1>
          <p>
            Welcome to your window into the vibrant GitHub community. Our
            GitHunt empowers you to seamlessly explore developer profiles,
            projects, and repositories. Whether you're a seasoned coder, a
            budding enthusiast, or a curious observer, our platform offers a
            gateway to connect, learn, and innovate. Join us on a quest to
            uncover the brilliance of open-source collaboration.
          </p>
        </div>
        <div className="home-sc">
          <div className="home-sc-input">
            <img src={search_ICON} alt="" />
            <input
              type="text"
              value={inputtext}
              placeholder="search here.."
              onChange={(e) => setinputtext(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="home-sc-filter">
            <img src={handleFilterIcon(filtername)} alt="filter icon" />
            <select
              value={filtername}
              onChange={(e) => setfiltername(e.target.value)}
              name="filter"
              className="home-sc-filter-select"
            >
              {FilterIcon.map((value, index) => (
                <option key={index} value={value.name}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div onClick={fetchAccounts} className="home-sc-search-button">
            <p>Search</p>
          </div>
        </div>
        <div className="home-accountcontainer">
          {accounts.map((account, index) => (
            <Githubuser key={index} account={account} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
