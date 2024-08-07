import { useState } from "react";
import Layout from "../layout/Layout";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";

import { searchAccounts, AccountType } from "../utils/Accountsearch";
import Githubuser from "./Githubuser";
import { useMyContext } from "../context/LoaderContext";

interface filterIconInterface {
  name: string;
  Image: React.ReactElement;
}

const FilterIcon: filterIconInterface[] = [
  {
    name: "Location",
    Image: <FaLocationDot />,
  },
  {
    name: "Username",
    Image: <FaUser />,
  },
  {
    name: "Fullname",
    Image: <FaUserAstronaut />,
  },
  {
    name: "Email",
    Image: <MdEmail />,
  },
];

const Home = () => {
  const [inputtext, setinputtext] = useState("");
  const [filtername, setfiltername] = useState("Location");
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const { toggleLoadingMode } = useMyContext();

  const fetchAccounts = async () => {
    if (inputtext.trim().length < 1) {
      return;
    }
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
      title="GitHunt - The Premier Tool for Advanced GitHub Account Search and Discovery"
      description="GitHunt is an advanced search platform designed to help you find GitHub accounts with precision and ease. Our tool allows you to search for GitHub users by various criteria, including username, full name, location, and email address. Whether you're a developer looking to connect with peers, a recruiter searching for talent, or a tech enthusiast exploring profiles, GitHunt delivers fast, reliable, and accurate search results. With intuitive filters and a user-friendly interface, GitHunt makes it simple to discover and connect with professionals across the GitHub community."
      keywords="GitHub account search, advanced GitHub search tool, GitHub user finder, find GitHub users by username, search GitHub profiles by full name, GitHub account search by location, GitHub email search, developer profile search, connect with GitHub users, tech professionals directory, GitHub user lookup, GitHub profile discovery, tech industry connections, GitHub search engine, find developers on GitHub, GitHub account lookup, GitHub user directory, advanced GitHub user search, GitHub profile lookup, tech talent search, find GitHub accounts by criteria, GitHub account discovery, search GitHub profiles by criteria, GitHub search filters, GitHub user search engine, GitHub account filter, search GitHub profiles quickly, GitHub user search tool, GitHub account finder tool, GitHub profile search tool, GitHub search and discovery, GitHub account lookup tool, GitHub user database, search GitHub users efficiently, GitHub profile search engine, find GitHub users easily, GitHub user search platform, GitHub account exploration, GitHub user profile search, GitHub profile search by email, GitHub profile search by location, GitHub user search by full name, GitHub user search by username, tech industry talent search, GitHub users by criteria, GitHub account search features, GitHub account search options, GitHub user search methods, find GitHub profiles by location, GitHub search by username, GitHub search by full name, GitHub user email search, find GitHub users with filters, GitHub search tool for developers, GitHub account search for recruiters, GitHub user search for tech enthusiasts, GitHub profile search for professionals, GitHub search results, GitHub user search results, GitHub account search accuracy, GitHub profile search accuracy, GitHub user discovery tool, GitHub account search platform, GitHub user search functionality, GitHub search results accuracy, GitHub profile lookup tool, GitHub user search features, GitHub search engine tool, GitHub search platform, GitHub user search options, GitHub profile search methods, GitHub account search capabilities, GitHub user search engine tool, GitHub profile search for developers, GitHub account search for tech professionals, GitHub user search for recruiters, GitHub profile search for recruiters, GitHub user search tool for tech enthusiasts, GitHub account search for tech enthusiasts, GitHub profile search tool for developers, GitHub user discovery platform, GitHub search capabilities, GitHub search tool for tech industry, GitHub search platform for developers, GitHub user search capabilities, GitHub account search for tech industry, GitHub profile search tool for tech professionals, GitHub search tool for recruiters, GitHub user search for tech professionals, GitHub search engine capabilities, GitHub account search engine, GitHub profile discovery tool, GitHub search options for users, GitHub user search engine capabilities, GitHub user profile discovery, GitHub account lookup for tech professionals, GitHub profile lookup for recruiters, GitHub user search tool for recruiters, GitHub profile search for tech industry, GitHub user search and discovery, GitHub account search by tech industry, GitHub user discovery tool for tech professionals, GitHub account discovery platform, GitHub search for tech professionals, GitHub user search tool for tech enthusiasts, GitHub profile search for tech enthusiasts, GitHub search for tech industry professionals, GitHub profile lookup for tech enthusiasts, GitHub account search for tech enthusiasts, GitHub user search platform for tech industry, GitHub profile search tool for tech industry, GitHub account search engine for tech professionals, GitHub search tool for tech enthusiasts, GitHub user search by tech industry, GitHub profile search by tech industry, GitHub account search for developers and recruiters, GitHub search results for tech industry, GitHub user search tool for tech professionals, GitHub profile search for developers and recruiters, GitHub account search for tech industry professionals, GitHub profile lookup for tech industry, GitHub search engine for tech enthusiasts, GitHub user profile search for tech industry, GitHub search options for tech professionals, GitHub user search for tech enthusiasts, GitHub account lookup for developers, GitHub profile search engine for tech industry, GitHub search engine for developers and recruiters, GitHub user search platform for tech enthusiasts, GitHub profile lookup for tech professionals, GitHub search results for developers, GitHub user search and discovery for tech professionals, GitHub account search for tech industry professionals, GitHub profile search tool for tech enthusiasts, GitHub search options for developers, GitHub account search engine for tech industry professionals, GitHub user discovery tool for tech enthusiasts, GitHub search tool for developers and tech enthusiasts, GitHub profile search engine for developers, GitHub search engine capabilities for tech industry, GitHub account search tool for tech professionals, GitHub user search results for tech industry, GitHub search for developers and tech industry, GitHub profile lookup for developers, GitHub search tool for tech professionals and enthusiasts"
      author="Sudhanshu Kumar"
    >
      <div className="home">
        <div className="home-title">
          <h1>
            THE EASE AND SPEED OF <br /> FINDING THE GITHUB ACCOUNTS IS IN YOUR
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
            <p>
              <IoSearch />
            </p>
            <input
              type="text"
              value={inputtext}
              placeholder="search here.."
              onChange={(e) => setinputtext(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="home-sc-filter">
            <p>{handleFilterIcon(filtername)}</p>
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
