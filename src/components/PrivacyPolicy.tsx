import React from "react";
import Layout from "../layout/Layout";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const PrivacyPolicy: React.FC = () => {
  return (
    <Layout
      title="Privacy Policy - GitHunt"
      description="Read GitHunt's Privacy Policy to understand how we collect, use, and protect your data. This policy outlines our practices regarding the information we collect through our GitHub account search tool and how we safeguard your privacy."
      keywords="Privacy Policy, GitHunt Privacy, Data Protection, GitHub Account Search, User Data, Privacy Practices, Data Collection, Privacy Guidelines"
      author="Sudhanshu"
    >
      <div className="privacypolicy">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated: [01/07/2024]</strong>
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information based on user search inputs, including GitHub
          usernames, full names, email addresses, and locations.
        </p>

        <h2>2. Use of Information</h2>
        <p>
          We use search input data solely to provide GitHub account search
          results based on the chosen filter (location, username, fullname, or
          email).
        </p>

        <h2>3. Data Sharing</h2>
        <p>We do not store or share personal search data with third parties.</p>

        <h2>4. Security</h2>
        <p>
          We prioritize protecting your data but cannot guarantee absolute
          security.
        </p>

        <h2>5. Changes to This Policy</h2>
        <p>We may update this policy. Please review it periodically.</p>

        <h2>6. Contact Us</h2>
        <p>
          For Feedback, contact us at: [sudhanshu.kumar.mail@gmail.com]{" "}
          <Link
            to="https://www.linkedin.com/in/sudhanshu-kumar-2a9ba5228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
